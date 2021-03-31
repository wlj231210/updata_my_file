
import instance from './instance.js';
import { base } from "./config.js";
import { message } from 'antd';
// import cookie from 'react-cookies'
export default {
   async getWalletInfo(){
    return await instance.get(`${base}/userWallet/getByIdWallet`).then((res) => {
      return res.data;
    }).catch((error) => {
      message.error('服务器出错');
    });
  },
 //获取订单信息
 async createOrderInfo(params) {
    return await instance.post(`${base}/userWalletOrder/add`, params, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }).then(res => {
      return res.data;
    }).catch((error) => {
      message.error("服务器出错")
    })
  },

}