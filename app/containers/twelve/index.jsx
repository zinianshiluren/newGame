import React, {Component} from "react";
import Foot from "../foot";
import './index.scss'

export default class Twelve extends Component {
    render(){
        const { goNextPage,goCancel } = this.props
        return(
            <Foot goNext={ goNextPage } cancel={ goCancel }/>
        )
    }
}
