import React from 'react';
import { Button, Card, Input, message, Spin } from 'antd';

import api from '../../api/index';

import {
    RedoOutlined, VerticalAlignTopOutlined, CopyOutlined
} from '@ant-design/icons';
import copy from 'copy-to-clipboard';
import './personal.less';
const TextArea = Input.TextArea

export default class Access_key extends React.Component {
    state = {
        loading: false,
        // 列表
        data: {},
        userinfo: {},
        ak: '',
        iplist: ''
    }
    componentWillMount = () => {
        this.setState({ loading: false })
        this.getlist();
        this.getIp()
    }
    getlist = async () => {
        let res = await api.getAccessKey();
        // console.log(res)
        if (res.code === 200) {
            this.setState({ ak: res.dataMap });
        } else {
            message.error(res.message)
        }
        this.setState({ loading: false })
    }
    setitem = async () => {
        this.setState({ loading: true })
        let res = await api.resetAccessKey();
        // console.log(res)
        if (res.code === 200) {
            message.success('重置成功')
            this.setState({ loading: false })
            this.getlist()
        } else {
            message.error(res.message)
            this.setState({ loading: false })
        }

    }

    onChange = (e) => {
        this.setState({ iplist: e.target.value });
    }
    getIp = async () => {
        this.setState({ loading: true })
        let res = await api.getIpAddr();
        // console.log(res)
        if (res.code === 200) {
            this.setState({ iplist: res.dataMap, iplist2: res.dataMap });
            this.setState({ loading: false })
        } else {
            message.error(res.message)
            this.setState({ loading: false })
        }
    }
    setIp = async () => {
        this.setState({ loading: true })

        if (this.state.iplist2 !== this.state.iplist){
            let res = await api.addIpAddr({ ipAddr: this.state.iplist });
            // console.log(res)
            if (res.code === 200) {
                message.success('设置成功')
                this.setState({ loading: false })
            } else {
                message.error(res.message)
                this.setState({ loading: false })
            }
        }else{
            message.error('没有修改ip')
            this.setState({ loading: false })
        }

    }
    copyv=(e)=>{
        copy(this.state.ak)
        message.success('复制成功')
    }
    render() {

        return (
            <div className="access_key  text-left">
                <Spin spinning={this.state.loading}>
                    <Card title="Access Key" //extra={<a href="#">More</a>}
                    >
                        <div>
                            <div style={{ marginRight: '15px', display: "inline-block", width: "100px" }}>Access Key：</div>
                            <Input value={this.state.ak} disabled style={{ marginRight: '15px', display: "inline-block", width: "300px" }}
                                addonAfter={<Button type="primary" style={{ display: "inline-block", border: 0 }} onClick={this.copyv}><CopyOutlined /></Button>}
                            />
                            <Button type="primary" onClick={this.setitem}><RedoOutlined /> 重置</Button>
                        </div>
                        <div className="pt-3">
                            <div style={{ marginRight: '15px', display: "inline-block", width: "100px", verticalAlign: 'top', lineHeight: 2 }}>
                                使用IP：
                                </div>
                            <TextArea autoSize={{ minRows: 3, maxRows: 6 }} value={this.state.iplist} onChange={this.onChange} style={{ marginRight: '15px', width: "300px", }} />
                        </div>
                        <div className="pt-1">
                            <div style={{ marginRight: '15px', display: "inline-block", width: "100px", verticalAlign: 'top', lineHeight: 2 }}>
                            </div>
                            <span className="text-999 fs-12">多个ip用英文逗号“,”隔开</span>
                        </div>
                        <div className="pt-1">
                            <div style={{ marginRight: '15px', display: "inline-block", width: "100px", verticalAlign: 'top', lineHeight: 2 }}>
                            </div>
                            <Button type="primary" onClick={this.setIp}><VerticalAlignTopOutlined /> 提交</Button>
                        </div>
                    </Card>
                </Spin>
            </div>
        );
    }
}