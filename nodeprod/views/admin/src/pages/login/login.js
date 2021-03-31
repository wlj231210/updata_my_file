import React from 'react';
import { Spin, Card, Form, Input, Button, Checkbox } from 'antd';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import {
    UserOutlined, LockOutlined
} from '@ant-design/icons';

import './login.less';

class Login extends React.Component {
    state = {
        login_state: ''
    }

    componentWillMount() {

    }

    render() {
        const onFinish = (values) => {
            console.log('Success:', values);
        };

        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
        };
        const layout = {
            labelCol: {
                span: 8,
            },
            wrapperCol: {
                span: 24,
            },
        };
        const tailLayout = {
            wrapperCol: {
                offset: 0,
                span: 24,
            },
        };
        return (

            <div className="loginbg">
                <div>
                    <Spin spinning={this.state.login_state}>
                        <div className="">
                            <div className="">
                                <div></div>
                                <div className="" style={{ paddingTop: '20%' }}>
                                    <Card style={{ width: 350 }} className="m-auto">
                                        <div className="mb-2">欢迎回来，请登录您的账号</div>
                                        <Form
                                            {...layout}
                                            name="basic"
                                            initialValues={{ remember: true }}
                                            onFinish={onFinish}
                                            onFinishFailed={onFinishFailed}
                                        >
                                            <Form.Item
                                                label=""
                                                name="username"
                                                rules={[{ required: true, message: '请输入用户名' }]}
                                                initialValues="admin"
                                            >
                                                <Input placeholder="请输入用户名" defaultValue="admin" prefix={<UserOutlined />} />
                                            </Form.Item>

                                            <Form.Item
                                                label=""
                                                name="password"
                                                initialValues="admin"
                                                rules={[{ required: true, message: '请输入用密码' }]}
                                            >
                                                <Input.Password placeholder="请输入用密码" defaultValue="admin" prefix={<LockOutlined />} />
                                            </Form.Item>

                                            <Form.Item className="mb-0 d-block">
                                                <Button type="primary" htmlType="submit" className="w-100">
                                                    登录
                                                </Button>
                                            </Form.Item>
                                        </Form>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </Spin>
                    <div className=" text-center w-100" style={{ position: 'absolute', bottom: 10, margin: 'auto' }}>
                        <p className="fs-10 mb-0" style={{ color: '#fff' }}>Copyright © 2021 上海其多信息技术有限公司  <a href="http://beian.miit.gov.cn/" className="text-white">沪ICP备20201201号-1</a></p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;
