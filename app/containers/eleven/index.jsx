import React, {Component} from "react";
import './index.scss'
import diamond from '../../resource/pic/eleven/钻石.png'
import ma from '../../resource/pic/eleven/二维码.png'
import more from '../../resource/pic/eleven/可获得更多地震知识哦.png'
import saoma from '../../resource/pic/eleven/扫描二维码.png'

export default class Eleven extends Component {
    constructor(...args){
        super(...args);
        this.state = {
            list : [],
        }
        this.render = this.render.bind(this);
        let count=this.props.count
        for (let i=0; i<count; i++)
        {
            this.state.list[i]=1
        }
    }
    componentDidMount(): void {
    }

    render(){
        const { goNextPage,goCancel,count } = this.props
        const { list } = this.state
        return(
            <div className="eleven-backgrand">
                <div className="eleven-container">
                    {
                        list.map((e,index)=>{
                            return <span key={index}><img key={index} src={diamond}/></span>
                        })
                    }
                    {/*<span><img src={diamond}/></span>*/}
                </div>
                <div className="eleven-right-bottom">
                    <p><img src={saoma}/></p>
                    <p><img src={ma}/></p>
                    <p><img src={more}/></p>
                </div>

            </div>
            // <Foot goNext={ goNextPage } cancel={ goCancel }/>
        )
    }
}
