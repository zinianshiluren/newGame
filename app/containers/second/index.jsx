import React, {Component} from "react";
import Foot from "../foot";
import './index.scss'
import spiderMan1 from "../../resource/pic/second/蜘蛛侠1.png"
import spiderMan2 from "../../resource/pic/second/蜘蛛侠2.png"

class Second extends Component {
    render(){
        const { goNextPage,goCancel } = this.props
        return(
            <div>
                <div className="second-dialog"></div>
                <Foot goNext={ goNextPage } cancel={ goCancel }/>
                <div className="second-spiderman1"><img src={spiderMan1}/></div>
                <div className="second-spiderman2"><img src={spiderMan2}/></div>
            </div>
        )
    }
}
export default Second;
