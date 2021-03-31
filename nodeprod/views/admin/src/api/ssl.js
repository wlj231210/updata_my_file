import instance from './instance.js';
import { base } from './config.js';
import { message } from 'antd';


export default {

    async sslgetList() {
        return await instance.get(`${base}/Api/SSL/SslProductV/getList`).then((res) => {
            return res.data;
        }).catch((error) => {
            message.error("服务器出错")
        })
    },
}