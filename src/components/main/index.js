import React,{ Component } from 'react'
import './index.css'

class Main extends Component {
    render () {
        return (
            <div className = 'main'>
                <img src = 'https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png'/>
                <div className = 'kong'></div>
                <div className = 'form'>
                    <form>
                        <div className = 'text'>
                            <p>If not now, when?</p>
                            <p>If not me, who?</p>
                            <p>此时此刻，非我莫属！</p>
                            <div className = 'search'>
                                <div className = 'kong'></div>
                                <input type = 'text' className = 'sou' placeholder = '请输入职位关键词'></input>
                                <input type = 'submit' value = '搜索'></input>
                            </div>
                            <div className = 'hot'>
                                热门搜索：
                                <a>Java</a>
                                <a>Java</a>
                                <a>Java</a>
                                <a>Java</a>
                                <a>Java</a>
                                <a>Java</a>
                                <a>Java</a>
                                <a>Java</a>
                                <a>Java</a>
                                <a>Java</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Main