import React,{Component} from "react";
import Foot from '../foot/index'
import './index.scss'

class First extends Component {
    constructor(...args){
        super(...args);
        this.state = {
            childList : [1,2,3,4],
            choose : null,
        }
        this.goNextPage = this.goNextPage.bind(this);
        this.goCancel = this.goCancel.bind(this);
    }

    render(){
        const { goNextPage,goCancel } = this.props
        // const { childList } = this.state
        // console.log(childList)
        return (
            <div>
                <div className="first-dialog"></div>
                <div>
                    <div className="first-container"/>
                </div>
                {
                    ()=>{

                    }
                }
                <div></div>
                <Foot goNext={ goNextPage } cancel={ goCancel }/>
            </div>

        )
    }
}

export default First;