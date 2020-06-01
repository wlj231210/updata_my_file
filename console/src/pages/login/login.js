import React from 'react';
import { Link
    // , withRouter, Switch, Route, Redirect
 } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Col, Row, Spin, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Footer from '../../components/footer'
import './index.less';
import api from '../../api';
import cookie from 'react-cookies'
export default class Login extends React.Component {
    constructor(props) {
        super(props)
        // console.log(this.props)
        this.state = {
            loading: false
        }
    }



    login = async values => {
        this.setState({ loading: true });
        try {
            values = Object.assign(values);
            let res = await api.login(values);
            if (res.code === 200) {
                message.success('登录成功');
                window.location.href = '/index'
            } else {
                message.error(res.message);
            }
        } catch (error) {
            message.error('网络出错');
        }
        this.setState({ loading: false });
    };


    render() {
        return (
            <Spin spinning={this.state.loading}>
                <div className="login">
                    <Row>
                        <Col xs={{ span: 20, offset: 0 }} lg={{ span: 4, offset: 0 }} style={{ margin: 'auto' }}>
                            <Form className="login-form" onFinish={this.login} name="normal_login" initialValues={{ remember: true }}>
                                <h2 className="text-left">登录</h2>
                                <Form.Item
                                    name="username"
                                    rules={[{ required: true, message: '请输入帐号' }]}
                                >
                                    <Input
                                        prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="手机号"
                                    />
                                </Form.Item>
                                <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
                                    <Input

                                        prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="密码"
                                    />
                                </Form.Item>
                                <Form.Item className="mb-0">
                                    {/* <Form.Item name="remember" valuePropName="checked" noStyle >
                                        <Checkbox className='float-left'>记住密码</Checkbox>
                                    </Form.Item> */}
                                    {/* <a href="/reset" className="login-form-forgot">忘记密码</a> */}
                                </Form.Item>
                                <Form.Item className="mb-0">
                                    <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                                </Form.Item>
                                <span className="gologin"><a href="/register">没有帐号?去注册</a></span>
                            </Form>
                        </Col>
                    </Row>
                </div>
                {/* <Footer></Footer> */}
            </Spin>
        );
    }
}


