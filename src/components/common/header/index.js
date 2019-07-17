import React,{ Component } from 'react'
import './index.css'

class Head extends Component {
    render () {
        return (
            <header>
                <div className = 'head'>
                    <div className = 'head-inner'>
                        <a className = 'logo'>
                            <img src = 'https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png'/>
                        </a>
                        <i className = 'shu'>|</i>
                        <i className = 'she'>社招官网</i>
                        <ul>
                            <li>
                                <a className = 'active'>首&nbsp;&nbsp;页</a>
                            </li>
                            <li>
                                <a>社会招聘</a>
                            </li>
                            <li>
                                <a>校园招聘</a>
                            </li>
                            <li>
                                <a>了解阿里</a>
                            </li>
                            <li>
                                <a>个人中心</a>
                            </li>
                            <div className = 'login'>                               
						        欢迎来到阿里巴巴集团招聘！	
                                <a>登陆</a>
                                &nbsp;|&nbsp;
                                <a>注册</a>																				
                            </div>
                        </ul>
                    </div>
                </div>
            </header>    
        )
    }
}

export default Head