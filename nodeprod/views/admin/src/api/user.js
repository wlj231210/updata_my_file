
import instance from './instance.js';
import { base } from "./config.js";
import { message } from 'antd';
// import cookie from 'react-cookies'
export default {
  //用户登陆
   async getById(){
    return await instance.get(`${base}/userData/getById`).then((res) => {
      return res.data;
    }).catch((error) => {
      message.error('服务器出错');
    });
  },


}