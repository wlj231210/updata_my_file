import React from 'react';

// import { Switch, Route, Redirect } from 'react-router-dom';

import { Menu, Layout,Avatar,Divider,Popover,Button } from 'antd';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import {
    MailOutlined, UserOutlined, TransactionOutlined
} from '@ant-design/icons';

//引入
import Sms from './sms/index'
import Access_key from './personal/access_key'
import SSL from './ssl/index';
import Balance from './wallet/balance'


const { SubMenu } = Menu;
const { Content, Sider,Header } = Layout;
let mypromise = function(handle){
    console.log(this)
}


class Index extends React.Component {
       state = {
            collapsed: false,
            SubMenu: [],
            SubMenuf: [],
            locationpath: {
                '': 'sub1-1',
                '/index': 'sub1-1',
                '/sms': 'sub1-1',
                '/ssl': 'sub1-2',
                '/wallet/balance': 'sub2-1',
                '/wallet/wallet_order': 'sub2-2',
                '/personal/basic_information': 'sub3-1',
                '/personal/authentication': 'sub3-2',
                '/personal/password': 'sub3-3',
                '/personal/access_key': 'sub3-4',
            },
        }
    componentWillMount(){
        let str = this.state.locationpath[window.location.pathname];
        if (!str) {
            str = 'sub1-1'
        }
        let str2 = str.split('-');
        this.setState({ SubMenu: [str], SubMenuf: [str2[0]] });
       
    }
    onCollapse = () => {
        this.setState({ collapsed: !this.state.collapsed })
    }
    render() {
        const content = (
            <div>
                <Button type="link" onClick={this.loginout} style={{ padding: 0 }}>退出登录</Button>
            </div>
        );
        return (
            <div className="services">
                 <Header className="mainheader">
                        <div className="logo">
                            <img src={require("../atess/image/logo.png")} alt="" />
                        </div>
                        {
                            this.state.islogin ?
                            <div className="headermenu">
                                    <span>{this.state.userinfo.userName}</span>
                                    <Divider type="vertical" className="dividercolor" />
                                    <span>{this.state.userinfo.mobile}</span>
                                    <Divider type="vertical" className="dividercolor" />
                                    <span>{this.state.userinfo.email}</span>

                                    <Popover content={content} placement="bottom" >
                                        <Avatar shape="square" icon={<UserOutlined />} className="userimg" />
                                    </Popover>
                                </div> : ''
                        }
                    </Header>
                <Layout>
                <Sider  collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} className="site-layout-background" >
                    <Menu defaultSelectedKeys={this.state.SubMenu}
                        defaultOpenKeys={this.state.SubMenuf} mode="inline">
                        <SubMenu key="sub1" title={<span><MailOutlined /><span>云服务</span></span>}>
                            <Menu.Item key="sub1-1"><Link to="/sms">短信</Link></Menu.Item>
                            <Menu.Item key="sub1-2"><Link to="/ssl">SSL证书</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><TransactionOutlined /><span>钱包</span></span>}>
                            <Menu.Item key="sub2-1"><Link to="/wallet/balance"><span>余额</span></Link></Menu.Item>
                            <Menu.Item key="sub2-2"><Link to="/wallet/wallet_order"><span>订单</span></Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title={<span><UserOutlined /><span>个人</span></span>}>
                            {/* <Menu.Item key="sub3-1"><Link to="/personal/basic_information"><span>基本资料</span></Link></Menu.Item>
                            <Menu.Item key="sub3-2"><Link to="/personal/authentication"><span>认证</span></Link></Menu.Item>
                            <Menu.Item key="sub3-3"><Link to="/personal/password"><span>密码</span></Link></Menu.Item> */}
                            <Menu.Item key="sub3-4"><Link to="/personal/access_key"><span>Access_Key</span></Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Content className="maincontent" >
                    <Switch>
                        {/* 首页部分 */}
                        <Route path="/" exact component={Sms} />
                        <Route path="/index" component={Sms} />
                        <Route path="/sms" component={Sms} />
                        <Route path="/ssl" component={SSL} />
                        <Route path="/wallet/balance" component={Balance} />
                        <Route path="/personal/access_key" component={Access_key} />
                        {/* test */}
                        {/* <Route path="/test/upload" component={PicturesWall} /> */}

                        <Redirect to={`/index`} />
                    </Switch>
                </Content>
            </Layout>
            </div>
        );
    }
}
export default Index;
