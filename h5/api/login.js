import instance from './instance';
import { base } from './config.js';

// import cookie from 'cookies';

export default {

    async login(param) {
        return await instance.post(`${base}/v3/user/login`,param, {
            // headers: {
            //     'token': cookie.load('token') ? cookie.load('token') : ''
            // }
        }).then((res) => {
            return res.data;
        }).catch((error) => {
            console.log('服务器出错');
        });
    },
	async getFileUrl(params) {
	    return await instance.get(`${base}/v3/user/getFileUrl?pageNum=` + params.pageNum + '&pageSize=' + params.pageSize,{
	        headers: {
	                'token': uni.getStorageSync('token') ?  uni.getStorageSync('token') :  ''
	            }
	    } ).then((res) => {
	      return res.data;
	    }).catch((error) => {
	      message.error('服务器出错');
	    });
	  },
	
}