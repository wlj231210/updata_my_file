import React from 'react';

import {
    Link
    // , withRouter, Switch, Route, Redirect
} from 'react-router-dom';
import { Form, Input, Select, Row, Col, Checkbox, Button, Spin, message } from 'antd';
import { TabletOutlined, CommentOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';

import api from '../../api/index';
import Footer from '../../components/footer'
export default class Forget extends React.Component {
    state = {
        contdown: 0,
        timeout: false,
        loading: false, loading2: false,
        isagree: false
    }
    componentWillMount = () => {
        document.title = "修改"
    }

    register = async values => {
        this.setState({ loading: true })
        let res = await api.changePassword(values);
        // console.log(res)
        if (res.code === 200) {
            message.success('修改密码成功');
            this.props.history.push('/login');
            this.setState({ loading: false })
        } else {
            message.error(res.message)
            this.setState({ loading: false })
        }

    };

    formRef = React.createRef();
    getcode = async (e) => {
        let ip = window.returnCitySN["cip"];
        this.setState({ loading: true });
        let mobile = this.formRef.current.getFieldValue().mobile;
        let pattern = /^(1[3-9][0-9])\d{8}$/;
        if (mobile !== '' && pattern.test(mobile)) {
            let data = { mobile, ip }
            let res = await api.userChangePassword(data);
            if (res.code === 200) {
                message.success('验证码发送成功')
                this.setState({ contdown: 60, timeout: true })
                setInterval(() => {
                    if (this.state.contdown >= 1) {
                        this.setState({ contdown: this.state.contdown - 1 })
                    } else {
                        this.setState({ timeout: false });
                    }
                    this.setState({ loading: false })
                }, 1000);
                this.setState({ loading: false })
            } else {
                message.error(res.message)
                this.setState({ loading: false })
            }
        } else {
            message.error('请输入手机号')
            this.setState({ loading: false })
        }
    }

    render() {
        const { Option } = Select;
        const prefixSelector = (
            <Form.Item name="prefix" noStyle>
                <Select style={{ width: 70 }}>
                    <Option value="86">+86</Option>
                </Select>
            </Form.Item>
        );
        return (
            <Spin spinning={this.state.loading}>
                <div className="register">
                    <Row>
                        <Col xs={{ span: 20, offset: 1 }} lg={{ span: 5, offset: 2 }} style={{ margin: 'auto' }}>
                            <Form
                                ref={this.formRef}
                                className="register-form"
                                name="register"
                                onFinish={this.register}
                                initialValues={{
                                    prefix: '86',
                                }}
                                scrollToFirstError
                            >

                                <h2 className="text-left">修改密码 - GID账号</h2>
                                <Form.Item
                                    name="mobile"
                                    rules={[{ required: true, message: '请输入你的手机号' }, {
                                        pattern: /^(1[3-9][0-9])\d{8}$/,
                                        message: '请输入正确的手机号',
                                    },]}
                                >
                                    <Input placeholder="请输入手机号" addonBefore={prefixSelector} style={{ width: '100%' }} prefix={<TabletOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: '请输入你的密码!',
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Input.Password placeholder="请输入密码" prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} />
                                </Form.Item>
                                <Form.Item
                                    name="confirm"
                                    dependencies={['password']}
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message: '请再次输入密码',
                                        },
                                        ({ getFieldValue }) => ({
                                            validator(rule, value) {
                                                if (!value || getFieldValue('password') === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject('两次密码不一致');
                                            },
                                        }),
                                    ]}
                                >
                                    <Input.Password placeholder="重复密码" prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} />
                                </Form.Item>
                                <Form.Item rules={[{ required: true, message: '请输入手机验证码' }]}>
                                    <Row gutter={8}>
                                        <Col span={14}>
                                            <Form.Item
                                                name="verificationCode"
                                                noStyle
                                                rules={[{ required: true, message: '请输入手机验证码' }]}
                                                hasFeedback
                                            >
                                                <Input placeholder="请输入验证码" prefix={<CommentOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} />
                                            </Form.Item>
                                        </Col>
                                        <Col span={10}>
                                            <Spin spinning={this.state.loading2}>
                                                {this.state.timeout === true ? <Button disabled>等待{this.state.contdown}秒后</Button> : <Button onClick={this.getcode}>获取验证码</Button>}
                                            </Spin>
                                        </Col>
                                    </Row>
                                </Form.Item>
                                <Form.Item className="mb-0">
                                    <Button type="primary" htmlType="submit" className="register-form-button">
                                        修改密码
                                    </Button>
                                </Form.Item>
                                <span className="gologin"><a href="/login">已有帐号?去登录</a></span>
                            </Form>
                        </Col>
                    </Row>
                </div>
                <Footer></Footer>
            </Spin>
        );
    }
}
