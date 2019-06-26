import React,{Component} from "react";
import Foot from '../foot/index'
import './index.scss'
import child1 from '../../resource/pic/first/人1.png'
import child2 from '../../resource/pic/first/人2.png'
import child3 from '../../resource/pic/first/人3.png'
import child4 from '../../resource/pic/first/人4.png'

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
        let arr = [child1, child2, child3, child4];
        const { childList } = this.state
        const { goNextPage,goCancel } = this.props
        return (
            <div>
                <div className="first-dialog"></div>
                <div>
                    <div className="first-container"/>
                </div>
                <div className="first-flex">
                    {childList.map((item,index) => {
                        return (
                            <div key={item}><img src={arr[index]}/></div>
                        )
                    })}
                </div>
                <div></div>
                <Foot goNext={ goNextPage } cancel={ goCancel }/>
            </div>
        )
    }
}

export default First;
