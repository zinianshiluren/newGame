import React, {Component} from "react";
import Foot from "../foot";
import './index.scss'
import superman from "../../resource/pic/eight/超人.png";

export default class Eight extends Component {
    constructor(...args){
        super(...args);
        this.state = {
            childList : [1,2,3,4],
            value : null,
            diaCount : null,
        }
        this.render = this.render.bind(this);
    }

    render(){
        const radioStyle = {
            display: 'block',
            height: '80px',
            lineHeight: '80px',
            fontSize: '40px',
            textAlign: 'center',
        };
        const TiStyle = {
            height: '80px',
            lineHeight: '80px',
            fontSize: '45px',
            fontWeight: '600',
        };
        const { goNextPage,goCancel } = this.props
        return(
            <div className="forth-flex-container">
                <div className="eight-dialog"></div>
                <div><img src={superman}/></div>
                <Foot goNext={ goNextPage } cancel={ goCancel }/>
            </div>
        )
    }
}
