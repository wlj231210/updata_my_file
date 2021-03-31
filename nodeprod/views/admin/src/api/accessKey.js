
import instance from './instance.js';
import { base } from "./config.js";
export default {
    async getAccessKey() {
        return await instance.get(`${base}/user/getAccessKey`).then((res) => {
            return res.data;
        }).catch((error) => {
        });
    },
    async resetAccessKey() {
        return await instance.get(`${base}/user/resetAccessKey`).then((res) => {
            return res.data;
        }).catch((error) => {
        });
    },
    async addIpAddr(params) {
        return await instance.post(`${base}/user/addIpAddr`, params).then((res) => {
            return res.data;
        }).catch((error) => {
        });
    },
    async getIpAddr() {
        return await instance.get(`${base}/user/getIpAddr`).then((res) => {
            return res.data;
        }).catch((error) => {
        });
    },

}