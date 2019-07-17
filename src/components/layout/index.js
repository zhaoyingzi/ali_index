import React,{ Component } from 'react'

import Head from '../common/header'
import Foot from '../common/footer'
import Main from '../main'
import Work from '../works'

class LayOut extends Component {
    render () {
        return (
            <div>
                <Head></Head>
                <Main></Main>
                <Work></Work>
                <Foot></Foot>
            </div>
        )
    }
}

export default LayOut