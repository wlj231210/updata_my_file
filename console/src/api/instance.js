import axios from 'axios';
import { message } from 'antd'
import cookie from 'react-cookies'
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
  if (response.status && response.status == 200 && response.data.status == 'error') {
    message.error(response.data.msg);
    return;
  }
  return response;
}, function (error) {
  if (error.response.status == 504 || error.response.status == 404) {
    message.error('服务器出错');
  } else if (error.response.status == 403) {
    message.error('权限不足,请联系管理员!');
  } else {
    message.error('未知错误!');
  }
  return { data: { code: 504 } };
});


//请求拦截
instance.interceptors.request.use(function (config) {
  config.timeout = 30000;
  let requestData = getRequestIdentify(config, true)
  removePending(requestData, true)
  config.cancelToken = new CancelToken((c) => {
    pending[requestData] = c
  })
  //console.log(config);  // 该处可以将config打印出来看一下，该部分将发送给后端（server端）

  return config  // 对config处理完后返回，下一步将向后端发送请求
}, function (error) {
  // 对请求失败做处理
  message.error('请求超时')
  return Promise.reject(error);
});

export default instance