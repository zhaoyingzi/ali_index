import React,{ Component } from 'react'
import './index.css'
import InfiniteScrollingList from '../Marquee/InfiniteScrollingList';

class Work extends Component {
    
    render () {
        const data = [
            { name: 'Lazada-iOS开发专家-Seller-深圳', address: '深圳',time:'一小时前' },
            { name: 'Lazada-iOS开发专家(Mobile 团队)-深圳', address: '深圳',time:'一小时前' },
            { name: '盒马-物流大仓负责人-深圳', address: '深圳',time:'一小时前' },
            { name: 'Lazada-Data Scientist-深圳', address: '深圳',time:'一小时前' },
            { name: '盒马-门店仓储管理专家-深圳', address: '深圳',time:'一小时前' },
            { name: '菜鸟-站点线上运营', address: '深圳',time:'一小时前' },
            { name: 'Lazada-JAVA 专家 - Seller&Operation-深圳', address: '深圳',time:'一小时前' },
            { name: 'Lazada-Java开发专家-深圳', address: '深圳',time:'一小时前' },
            { name: 'Lazada-Android开发专家mobile-深圳', address: '深圳',time:'一小时前' },
          ];
        return (
            <div className = 'works-box'>
                <div className = 'works'>
                        <div class="left2">
                            <InfiniteScrollingList
                                data={data}
                                //speed = '1000'
                                // height={height}
                                // width={width}
                                url={"https://job.alibaba.com/zhaopin/positionList.html?"}
                                title={'最新职位'}
                            />
                        </div>
                    <div className = 'right'>
                        <a className = 'one'>
                            <img src = 'https://img.alicdn.com/tfs/TB1Z7JvoxGYBuNjy0FnXXX5lpXa-358-136.png'/>
                        </a>
                        <a className = 'two'>
                            <img src = 'https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg'/>
                        </a>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Work