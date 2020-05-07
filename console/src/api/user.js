
import instance from './instance.js';
import { base } from "./config.js";
import cookie from 'react-cookies'
export default {
  //用户登陆
  async getUserInfo(){
    return  await instance.get(`${base}/user/getUserInfo`,{
        headers:{
            token:cookie.load('token')
        }
    }).then((res)=>{
      return res.data;
    }).catch((error)=>{
      //message.error('服务器出错')
    });
  },


}