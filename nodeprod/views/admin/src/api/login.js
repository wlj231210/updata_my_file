import instance from './instance.js';
import { base } from "./config.js";
import {message} from 'antd';
import cookie from 'react-cookies'
export default {
  //获取appIp

  async getUserInfo() {
    return await instance.get(`${base}/user/getUserInfo`, {
      headers: {
        'token': cookie.load('token') ? cookie.load('token'):''
      }
    }).then((res) => {
      return res.data;
    }).catch((error) => {
      message.error('服务器出错');
    });
  },
  async getUserInfo1() {
    return await instance.get(`${base}/user/getUserInfo`).then((res) => {
      return res.data;
    }).catch((error) => {
      message.error('服务器出错');
    });
  },
  async logOut() {
    return await instance.get(`${base}/user/logOut`).then((res) => {
      return res.data;
    }).catch((error) => {
      message.error('服务器出错');
    });
  },

}