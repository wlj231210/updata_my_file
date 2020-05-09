import instance from './instance';
import { base } from './config.js';

// import cookie from 'cookies';

export default {
	//订单列表
    async getTemplate(param) {
        return await instance.post(`${base}/sales/template/getTemplate`,param,{
		}).then((res) => {
            return res.data;
        }).catch((error) => {
            console.log('服务器出错');
        });
    },
}