import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './login/login';
import Register from './login/register';
import Index from './index';
import Forget from './login/forget';
import Empower from './index/empower';
import MList from './index/list';
import Footer from '../components/footer';
// test
import PicturesWall from '../components/upload'
class Pages extends React.Component {
    state = {
        login_state: false,
    }
    componentWillMount = () => {
        // this.setState({ loading: true })
    }

    render() {
        return (
            <div >
                <Switch>
                    {/* 首页部分 */}
                    <Route path="/" exact component={Login} onEnter={() => { document.title = "登录" }} />
                    <Route path="/index" component={Index} />
                    <Route path="/login" component={Login} />
                    <Route path="/reset" component={Forget} />
                    <Route path="/register" component={Register} />
                    <Route path="/index/empower" exact component={Empower} />
                    <Route path="/index/list" component={MList} />
                    {/* test */}
                    {/* <Route path="/test/upload" component={PicturesWall} /> */}

                    <Redirect to={`/login`} />
                </Switch>
                <Footer></Footer>
            </div>
        );
    }
}
export default Pages;
