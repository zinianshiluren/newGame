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
        this.render = this.render.bind(this);
    }

    render(){
        const { childList } = this.state
        const { goNextPage,goCancel } = this.props
        return (
            <div>
                <div className="first-dialog"></div>
                <div>
                    <div className="first-container"/>
                </div>
                <div className="first-flex">
                    {childList.map(() => {
                        return (<div></div>)
                    })}
                </div>


                <div></div>
                <Foot goNext={ goNextPage } cancel={ goCancel }/>
            </div>

        )
    }
}

export default First;