import React, {Component} from "react";
import Foot from "../foot";
import './index.scss'


export default class Home extends Component {
    constructor(...args){
        super(...args);
        this.state = {
        }
        this.render = this.render.bind(this);
    }

    render(){
        const { goNextPage,goCancel } = this.props
        return(
            <div className="home-container">
                <div className="home-title">
                    <div className="home-content">
                        <div className="home-house"></div>
                        <div className="home-superman"></div>
                        <div className="home-button" onClick={goNextPage}></div>
                    </div>
                </div>
                {/*<iframe frameBorder="0" marginWidth="0" marginHeight="0"*/}
                        {/*src="//music.163.com/outchain/player?type=2&id=33166539&auto=1&height=66">*/}
                {/*</iframe>*/}
            </div>

        )
    }
}
