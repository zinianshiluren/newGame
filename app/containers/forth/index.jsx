import React, {Component} from "react";
import Foot from "../foot";
import './index.scss'
import { Radio } from 'antd';
import diamond from '../../resource/pic/common/钻石_小.png'
import success from '../../resource/pic/common/对号.png'

export default class Forth extends Component {
    constructor(...args){
        super(...args);
        this.state = {
            childList : [1,2,3,4],
            answer1 : null,
            answer2 : null,
            answer3 : null,
            diaCount : null,
            end : false,
        }
        this.render = this.render.bind(this);
        this.onChange1 = this.onChange1.bind(this);
        this.onChange2 = this.onChange2.bind(this);
        this.onChange3 = this.onChange3.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);
    }

    checkAnswer(){
        let { answer1,answer2,answer3 } = this.state
        const { setCount } = this.props
        let a = answer1 === '3' ? 1:0
        let b = answer2 === '2' ? 1:0
        let c = answer3 === '3' ? 1:0
        let count = a + b + c
        this.setState({
            end: true,
        });
        setTimeout(
            () => {
                setCount(count)
                this.props.goNextPage()
            },
            5000
        );
    }

    onChange1(e){
        if(!this.state.end){
            console.log('修改'+e.target.value)
            this.setState({
                answer1: e.target.value,
            });
        }
    };
    onChange2(e){
        if(!this.state.end){
            console.log('修改'+e.target.value)
            this.setState({
                answer2: e.target.value,
            });
        }
    };
    onChange3(e){
        if(!this.state.end){
            console.log('修改'+e.target.value)
            this.setState({
                answer3: e.target.value,
            });
        }
    };


    render(){
        const { goCancel } = this.props
        let { answer1,answer2,answer3,end } = this.state
        return(
            <div>
                <div className="forth-dialog"/>
                <div className="forth-radio-group" onChange={(e)=>{this.onChange1(e)}}>
                    <Radio.Group>
                        <p className="forth-tiStyle">1.地震发生时，人会感觉到</p>
                        <Radio className="forth-radioStyle" value={1}>
                            A.先摇后晃
                        </Radio>
                        <Radio className="forth-radioStyle" value={2}>
                            B.先晃后摇
                        </Radio>
                        <Radio className="forth-radioStyle" value={3}>
                            C.同时发生<span>{end && <img width={20} src={success}/>}</span>
                        </Radio>
                    </Radio.Group>
                    <div style={{textAlign:'right'}}>
                        { answer1==='3' && end && <img src={diamond}/>}
                    </div>
                </div>
                <div className="forth-radio-group" onChange={(e)=>{this.onChange2(e)}}>
                    <Radio.Group>
                        <p className="forth-tiStyle">2.海底地震有可能会引起</p>
                        <Radio className="forth-radioStyle" value={1}>
                            A.狂风暴雨
                        </Radio>
                        <Radio className="forth-radioStyle" value={2}>
                            B.海啸{end && <img width={20} src={success}/>}
                        </Radio>
                        <Radio className="forth-radioStyle" value={3}>
                            C.海平面下降
                        </Radio>
                    </Radio.Group>
                    <div style={{textAlign:'right'}}>
                        { answer2==='2' && end && <img src={diamond}/>}
                    </div>
                </div>
                <div className="forth-radio-group" onChange={(e)=>{this.onChange3(e)}}>
                    <Radio.Group>
                        <p className="forth-tiStyle">3.下面哪个不是地震造成的现象</p>
                        <Radio className="forth-radioStyle" value={1}>
                            A.山崩地裂
                        </Radio>
                        <Radio className="forth-radioStyle" value={2}>
                            B.房屋倒塌
                        </Radio>
                        <Radio className="forth-radioStyle" value={3}>
                            C.极光现象{end && <img width={20} src={success}/>}
                        </Radio>
                    </Radio.Group>
                    <div style={{textAlign:'right'}}>
                        { answer3==='3' && end && <img src={diamond}/>}
                    </div>
                </div>
                <Foot goNext={ this.checkAnswer } cancel={ goCancel }/>
            </div>
        )
    }
}
