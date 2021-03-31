import React from 'react';

import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { Spin, message,} from 'antd';

import Index from './index';
import Login from './login/login';
import api from '../api';

// test
// import PicturesWall from '../components/upload'
import cookie from 'react-cookies'
import './index.less';
class Pages extends React.Component {
    state = {
        login_state: false,
        userinfo: {},
        islogin: false
    }
    componentWillMount = () => {
        let arr = window.location.search.slice(1);
        let i = arr.split('=');
        if (i[0] === 'token') {
            cookie.save('token', i[1]);
            this.getUserInfo();
        } else {
            this.getUserInfo1();
        }
    }
    getUserInfo = async () => {
        this.setState({ login_state: true });
        let res = await api.getUserInfo();
        // console.log(res)
        if (res.code === 200) {
            cookie.remove('token');
            window.location = window.location.origin;
            // window.location.reload(true)
        } else {
            if (res.dataMap) {
                window.location.href = res.dataMap.url;
            } else {
                message.error(res.message)
            }
        }
    }
    getUserInfo1 = async () => {
        this.setState({ login_state: true });
        let res = await api.getUserInfo1();
        // console.log(res)
        if (res.code === 200) {
            this.setState({ userinfo: res.dataMap });
            this.setState({ login_state: false, islogin: true })
        } else {
            this.setState({ login_state: false })
            if (res.dataMap) {
                window.location.href = res.dataMap.url;
            } else {
                message.error(res.message)
            }
        }
    }
    loginout = async () => {
        this.setState({ login_state: true });
        let res = await api.logOut();
        if (res.code === 200) {
            if (res.dataMap.url) {
                message.success(res.message);
                window.location.href = res.dataMap.url;
            }
        } else {
            message.error(res.message);
            this.setState({ login_state: false })
        }
    }
    render() {
        
        return (
            <div >
                <Switch>
                    {/* 首页部分 */}
                    <Route path="/" exact component={Login} />
                    <Route path="/index" component={Index} />
                    <Route path="/login" component={Login} />
                    <Redirect to={`/login`} />
                </Switch>
                
            </div>
        );
    }
}
export default Pages;
