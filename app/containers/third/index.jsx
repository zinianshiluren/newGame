import React, {Component} from "react";
import Foot from "../foot";
import './index.scss'

class Third extends Component {
    render(){
        const { goNextPage,goCancel } = this.props
        return(
            <div className="third-flex-container">
                <div className="third-dialog"></div>
                <div className="third-vedio">
                    <video width="100%"  src="http://earthquake67373.natapp1.cc/resource/video/vedio1.mp4" controls="controls">
                        您的浏览器不支持 video 标签。
                    </video>
                </div>
                <div className="third-children"></div>

                <Foot goNext={ goNextPage } cancel={ goCancel }/>
            </div>
        )
    }
}
export default Third;
