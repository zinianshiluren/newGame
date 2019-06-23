import React,{Component} from "react";
import Foot from "../foot"
import './index.scss'
import marked from "marked";

class Predraw extends Component {

    goNext (){
        alert("点击下一步")
    }
    cancel (){
        alert("点击返回")
    }
    render(){
        return (
            <div>
                <div className="predraw-block"></div>
                <div className="dialog-predraw"></div>
                <div className="predraw-block"></div>
                <div className="canvas-predraw"></div>
                <Foot goNext={ this.goNext } cancel={ this.cancel }/>
            </div>
        )
    }
}

export default Predraw;