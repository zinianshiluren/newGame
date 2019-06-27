import React, {Component} from "react";
import Foot from "../foot";
import './index.scss'
import diamond from '../../resource/pic/fifth/钻石.png'
import superman from '../../resource/pic/fifth/超人.png'
import word from '../../resource/pic/fifth/字2.png'

export default class Fifth extends Component {
    render(){
        const { goNextPage,goCancel } = this.props
        return(
            <div className="fifth-flex-container">
                <div className="fifth-dialog"></div>
                <div className="fifth-diamond"><img src={diamond}/></div>
                <div className="fifth-superman"><img src={superman}/></div>
                <div className="fifth-word"><img src={word}/></div>
                <Foot goNext={ goNextPage } cancel={ goCancel }/>
            </div>
        )
    }
}
