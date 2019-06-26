import React,{Component} from "react";
import Foot from "../foot"
import './index.scss'

class Predraw extends Component {

    render(){
        const { goNextPage,goCancel } = this.props
        return (
            <div>
                <div className="predraw-block"></div>
                <div className="dialog-predraw"></div>
                <div className="predraw-block"></div>
                <div className="canvas-predraw"></div>
                <Foot goNext={ goNextPage } cancel={ goCancel }/>
            </div>
        )
    }
}

export default Predraw;
