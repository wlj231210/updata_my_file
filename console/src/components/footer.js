import React from 'react';
import './index.less'
export default class footer extends React.Component{

    timeTrans= () => {
            let date = new Date();
            let Y = date.getFullYear()
            return Y
        }
    render(){
        return (
            <div className="footer" >
                ©2013-{this.timeTrans()} 王姥爷 <a href="http://beian.miit.gov.cn/">皖ICP备19007398号-1</a>
            </div>
        );}
}


