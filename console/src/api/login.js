import instance from './instance.js';
import { base } from "./config.js";
import {message} from 'antd';
import cookie from 'react-cookies'
export default {
  //用户登陆
  async login(params){
    return await instance.post(`${base}/v2/v3/user/login`,params).then((res)=>{
      return res.data;
    }).catch((error)=>{
      message.error('服务器出错');
    });
  },
  async getFileUrl(params) {
    return await instance.get(`${base}/v2/v3/user/getFileUrl?pageNum=` + params.pageNum + '&pageSize=' + params.pageSize,{
        headers: {
                'token': cookie.load('token') ? cookie.load('token') : ''
            }
    } ).then((res) => {
      return res.data;
    }).catch((error) => {
      message.error('服务器出错');
    });
  },
  async delete(params) {
    return await instance.get(`${base}/v2/v3/user/del?id=` + params, {
      headers: {
        'token': cookie.load('token') ? cookie.load('token') : ''
      }
    }).then((res) => {
      return res.data;
    }).catch((error) => {
      message.error('服务器出错');
    });
  },
  //用户注册
  async register(params){
    return  await instance.post(`${base}/user/register`,params).then((res)=>{
      return res.data;
    }).catch((error)=>{
      //message.error('服务器出错')
    });
  },
  //手机验证码注册
  async securitycode(params){
    return  await instance.post(`${base}/smsRecord/userRegister`,params).then((res)=>{
      return res.data;
    }).catch((error)=>{
      //message.error('服务器出错')
    });
  },
   //手机验证码修改
  async userChangePassword(params){
    return await instance.post(`${base}/smsRecord/userChangePassword`,params).then((res)=>{
      return res.data;
    }).catch((error)=>{
      //message.error('服务器出错')
    });
  },
  //修改密码
  async changePassword(params) {
    return await instance.post(`${base}/user/changePassword`, params).then((res) => {
      return res.data;
    }).catch((error) => {
      //message.error('服务器出错')
    });
  },


}