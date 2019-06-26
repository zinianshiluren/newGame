import React, {Component} from "react";
import Foot from "../foot";
import './index.scss'

class Third extends Component {
    render(){
        const { goNextPage,goCancel } = this.props
        return(
            <div className="third-flex-container">
                <div className="third-dialog"></div>
                <div className="third-vedio">这里放一个视频</div>
                <div className="third-children"></div>

                <Foot goNext={ goNextPage } cancel={ goCancel }/>
            </div>
        )
    }
}
export default Third;
