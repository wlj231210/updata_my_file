import React from 'react';
import { Switch, Route, Redirect,Link } from 'react-router-dom';
import { Spin, Layout, Menu } from 'antd'

import {
    AppstoreOutlined,
} from '@ant-design/icons';
import api from '../api';
import './index.less';
import Empower from './index/empower';
import MList from './index/list'
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
class Index extends React.Component {
    state = {
        loading: false,
        user_data: '',
        mode: 'inline',
        theme: 'light',
    }
    componentWillMount = () => {
        // this.setState({ loading: true })
        // this.getUserInfo()
        // console.log(this.props)
    }

    render() {
        return (
            <Spin spinning={this.state.loading}>
                <Layout id="components-layout-demo-responsive">
                    <Sider
                        collapsedWidth="0"
                        onBreakpoint={broken => {
                            console.log(broken);
                        }}
                        onCollapse={(collapsed, type) => {
                            console.log(collapsed, type);
                        }}
                    >
                        <div className="logo">资源管理</div>
                        <Menu
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode={this.state.mode}
                            theme={this.state.theme}
                        >
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <AppstoreOutlined />
                                        <span>上传</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="1"><Link to={'/index/empower'}>上传</Link></Menu.Item>
                                <Menu.Item key="2"><Link to={'/index/list'}>list</Link></Menu.Item>
                                {/* <SubMenu key="sub1-2" title="Submenu">
                                    <Menu.Item key="5">Option 5</Menu.Item>
                                    <Menu.Item key="6">Option 6</Menu.Item>
                                </SubMenu> */}
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ height: 'calc(100vh)' }}>
                        <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
                        <Content style={{ margin: '24px 16px 0' }}>
                            <div className="site-layout-background" style={{ padding: 24, }}>
                                <Switch>
                                    {/* 首页部分 */}
                                    <Route path="/index/empower" exact component={Empower} />
                                    <Route path="/index/list" component={MList} />
                                    {/* <Route path="/empower" component={Empower}/> */}
                                    <Redirect to={`/index/empower`} />
                                </Switch>
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </Spin>
        );
    }
}

export default Index;
