import React, {Component} from "react";
import Foot from "../foot";
import './index.scss'

export default class Ten extends Component {
    render(){
        const { goNextPage,goCancel } = this.props
        return(
            <div className="forth-flex-container">
                <div className="ten-dialog"></div>
                <Foot goNext={ goNextPage } cancel={ goCancel }/>
            </div>
        )
    }
}
