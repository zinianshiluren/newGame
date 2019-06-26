import React, {Component} from "react";
import Foot from "../foot";
import './index.scss'

export default class Fifth extends Component {
    render(){
        const { goNextPage,goCancel } = this.props
        return(
            <Foot goNext={ goNextPage } cancel={ goCancel }/>
        )
    }
}
