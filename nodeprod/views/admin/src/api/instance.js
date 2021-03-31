import axios from 'axios';
import { message } from 'antd'

const instance = axios.create({
  baseURL: process.env.BASE_API,  // 该处url会根据开发环境进行变化（开发/发布）
  timeout: 10000  // 设置请求超时连接时间
})
const pending = {}
const CancelToken = axios.CancelToken
const removePending = (key, isRequest = false) => {
  if (pending[key] && isRequest) {
    pending[key]('取消重复请求')
  }
  delete pending[key]
}
const getRequestIdentify = (config, isReuest = false) => {
  let url = config.url
  if (isReuest) {
    url = config.baseURL + config.url.substring(1, config.url.length)
  }
  return config.method === 'get' ? encodeURIComponent(url + JSON.stringify(config.params)) : encodeURIComponent(config.url + JSON.stringify(config.data))
}

// 响应拦截
instance.interceptors.response.use(function (response) {
  if (response.status && response.status === 200 && response.data.status === 'error') {
    message.error(response.data.msg);
    return;
  }
  if (response.data.dataMap && response.data.dataMap.url) {
    window.location = response.data.dataMap.url
  }
  return response;
}, function (error) {
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        error.message = '错误请求'
        break
      case 401:
        error.message = '未授权，请重新登录'
        break
      case 403:
        error.message = '拒绝访问'
        break
      case 404:
        error.message = '请求错误,未找到该资源'
        break
      case 405:
        error.message = '请求方法未允许'
        break
      case 408:
        error.message = '请求超时'
        break
      case 500:
        error.message = '服务器端出错'
        break
      case 501:
        error.message = '网络未实现'
        break
      case 502:
        error.message = '网络错误'
        break
      case 503:
        error.message = '服务不可用'
        break
      case 504:
        error.message = '网络超时'
        break
      case 505:
        error.message = 'http版本不支持该请求'
        break
      default:
        error.message = `连接错误${error.response.status}`
    }
  } else {
    error.message = '连接服务器失败'
  }
  return { data: { code: 400, message: error.message } };
});


//请求拦截
instance.interceptors.request.use(function (config) {
  config.timeout = 30000;
  let requestData = getRequestIdentify(config, true);

  removePending(requestData, true)
  config.cancelToken = new CancelToken((c) => {
    pending[requestData] = c
  })
  // const usid = cookie.load('usid');
  // console.log(Object.assign(config.data, { openid:usid }));
  // 该处可以将config打印出来看一下，该部分将发送给后端（server端）
  // config.headers.token = '该处可设置token内容';
  return config  // 对config处理完后返回，下一步将向后端发送请求
}, function (error) {
  // 对请求失败做处理
  message.error('请求超时')
  return Promise.reject(error);
});

export default instance