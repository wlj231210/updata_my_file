import axios from '@/js_sdk/gangdiedao-uni-axios'

const instance = axios.create({
	baseURL: process.env.BASE_API, // 该处url会根据开发环境进行变化（开发/发布）
	timeout: 10000 // 设置请求超时连接时间
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
	return config.method === 'get' ? encodeURIComponent(url + JSON.stringify(config.params)) : encodeURIComponent(config.url +
		JSON.stringify(config.data))
}

// 响应拦截
instance.interceptors.response.use(function(response) {
	if (response.status && response.status === 200 && response.data.status === 'error') {
		alert(response.data.msg);
		return;
	}
	return response;
}, function(error) {
	if (error.response.status === 504 || error.response.status === 404) {
		alert('服务器出错');
	} else if (error.response.status === 403) {
		alert('权限不足,请联系管理员!');
	} else {
		alert('未知错误!');
	}
	return {
		data: {
			code: 300,
			dataMap: {},
			message: '网络出错'
		}
	};
});


//请求拦截
instance.interceptors.request.use(function(config) {
	config.timeout = 30000;
	// let requestData = getRequestIdentify(config, true);
	// removePending(requestData, true)
	// config.cancelToken = new CancelToken((c) => {
	// 	pending[requestData] = c
	// })
	
	// const usid = cookie.load('usid');
	// console.log(Object.assign(config.data, { openid:usid }));
	// 该处可以将config打印出来看一下，该部分将发送给后端（server端）
	// config.headers.token = '该处可设置token内容';
	return config // 对config处理完后返回，下一步将向后端发送请求
}, function(error) {
	// 对请求失败做处理
	alert('请求超时')
	return Promise.reject(error);
});

export default instance
