import instance from './instance.js';
import { base } from './config.js';
import { message } from 'antd';


export default {

    async getUserData(params) {
            return await instance.post(`${base}/user/getUserData`, params).then((res) => {
            return res.data;
        }).catch((error) => {
            message.error("服务器出错")
        })
    },
    async getSendRecord(params) {
        return await instance.post(`${base}/sendRecord/getSendRecord`, params).then((res) => {
            return res.data;
        }).catch((error) => {
            message.error("服务器出错")
        })
    },
    // 公共短信模板列表
    // async getPublicSmsTemplate(params) {
    //     return await instance.post(`${base}/SmsTemplate/getPublicSmsTemplate`, params).then((res) => {
    //         return res.data;
    //     }).catch((error) => {
    //         message.error("服务器出错")
    //     })
    // },
// // 短信模板列表 2020/8/17 修改前接口
//     async sms_template_list(params) {
//         return await instance.post(`${base}/SmsTemplate/getSmsTemplate`, params).then((res) => {
//             return res.data;
//         }).catch((error) => {
//             message.error("服务器出错")
//         })
//     },
    // 短信模板列表
        async sms_template_list(params) {
            return await instance.post(`${base}/messageTemplate/queryMessageTemplate`, params).then((res) => {
                return res.data;
            }).catch((error) => {
                message.error("服务器出错")
            })
        },
    


    //短信修改新增模板
    async sms_template_post(params) {
        return await instance.post(`${base}/SmsTemplate/insertOrUpdateTemplate`, params).then((res) => {
            return res.data;
        }).catch((error) => {
            message.error("服务器出错")
        })
    },
    //删除短信模板
    async sms_template_delete(id) {
        return await instance.delete(`${base}/SmsTemplate/bySmsTemplateIdDelete?id=` + id).then((res) => {
            return res.data;
        }).catch((error) => {
            message.error("服务器出错")
        })
    },
    // //分页获取签名模板 2020/8/17 修改前接口
    // async sms_signature_list(params) {
    //     return await instance.post(`${base}/signTemplate/getByIdSignTemplate`, params).then((res) => {
    //         return res.data;
    //     }).catch((error) => {
    //         message.error("服务器出错")
    //     })
    // },
    //分页获取签名模板
    async sms_signature_list(params) {
        return await instance.post(`${base}/sign/queryList`, params).then((res) => {
            return res.data;
        }).catch((error) => {
            console.log(3,error)
            // message.error("服务器出错")
            return { code: 400,message:'出错' };
        })
    },
    // //新增签名模板 2020/8/17 修改前接口
    // async sms_signature_post(params) {
    //     return await instance.post(`${base}/signTemplate/insertOrUpdateSignTemplate`, params).then((res) => {
    //         return res.data;
    //     }).catch((error) => {
    //         message.error("服务器出错")
    //     })
    // },
    //新增签名模板
    async sms_signature_post(params) {
        return await instance.post(`${base}/sign/create`, params).then((res) => {
            return res.data;
        }).catch((error) => {
            message.error("服务器出错")
        })
    },
    //删除签名模板
    async sms_signature_delete(id) {
        return await instance.delete(`${base}/signTemplate/bySignIdDelete?id=`+id).then((res) => {
            return res.data;
        }).catch((error) => {
            message.error("服务器出错")
        })
    },

    async sms_sendrecord(params) {
        return await instance.get(`${base}/service/sms/sendrecord`, {
            params, headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }).then((res) => {
            return res.data;
        }).catch((error) => {
            message.error("服务器出错")
        })
    },
}