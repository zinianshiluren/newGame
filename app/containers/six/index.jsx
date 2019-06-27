import React, {Component} from "react";
import Foot from "../foot";
import './index.scss'
import word from "../../resource/pic/six/字2.png";
import diamond from "../../resource/pic/six/宝石.png";
import superman from "../../resource/pic/six/超人.png";

export default class Six extends Component {
    render(){
        const { goNextPage,goCancel } = this.props
        return(
            <div className="six-flex-container">
                <div className="six-dialog"></div>
                <div className="six-diamond"><img src={diamond}/></div>
                <div className="six-superman"><img src={superman}/></div>
                <div className="six-word"><img src={word}/></div>
                <Foot goNext={ goNextPage } cancel={ goCancel }/>
            </div>
        )
    }
}
