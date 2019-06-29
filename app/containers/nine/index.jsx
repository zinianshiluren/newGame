import React, {Component} from "react";
import Foot from "../foot";
import './index.scss'
import {Radio} from "antd";
import success from "../../resource/pic/common/对号.png";
import diamond from "../../resource/pic/common/钻石_小.png";

export default class Nine extends Component {
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
        let a = answer1 === '1' ? 1:0
        let b = answer2 === '3' ? 1:0
        let c = answer3 === '1' ? 1:0
        let count = a + b + c
        this.setState({
            end: true,
        });
        setTimeout(
            () => {
                // this.props.setCount(count)
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
            <div className="nine-dialog"/>
            <div className="forth-radio-group" onChange={(e)=>{this.onChange1(e)}}>
                <Radio.Group>
                    <p className="forth-tiStyle">1.震后对于在黑暗中掩埋过久的人</p>
                    <Radio className="forth-radioStyle" value={1}>
                        A.蒙上眼睛救出来，慢慢进食<span>{end && <img width={20} src={success}/>}</span>
                    </Radio>
                    <Radio className="forth-radioStyle" value={2}>
                        B.尽快救出来，尽快进食
                    </Radio>
                    <Radio className="forth-radioStyle" value={3}>
                        C.尽快救出来，尽快见光亮
                    </Radio>
                </Radio.Group>
                <div style={{textAlign:'right'}}>
                    { answer1==='1' && end && <img src={diamond}/>}
                </div>
            </div>
            <div className="forth-radio-group" onChange={(e)=>{this.onChange3(e)}}>
                <Radio.Group>
                    <p className="forth-tiStyle">2.对于幸存者，最好的帮助是</p>
                    <Radio className="forth-radioStyle" value={1}>
                        A.刻意找话
                    </Radio>
                    <Radio className="forth-radioStyle" value={2}>
                        B.追问回忆
                    </Radio>
                    <Radio className="forth-radioStyle" value={3}>
                        C.倾听理解{end && <img width={20} src={success}/>}
                    </Radio>
                </Radio.Group>
                <div style={{textAlign:'right'}}>
                    { answer3==='3' && end && <img src={diamond}/>}
                </div>
            </div>
            <div className="forth-radio-group" onChange={(e)=>{this.onChange2(e)}}>
                <Radio.Group>
                    <p className="forth-tiStyle">3.地震时若被压埋如何求救?</p>
                    <Radio className="forth-radioStyle" value={1}>
                        A.耐心等待{end && <img width={20} src={success}/>}
                    </Radio>
                    <Radio className="forth-radioStyle" value={2}>
                        B.敲击呼救
                    </Radio>
                    <Radio className="forth-radioStyle" value={3}>
                        C.拼命呼救
                    </Radio>
                </Radio.Group>
                <div style={{textAlign:'right'}}>
                    { answer2==='1' && end && <img src={diamond}/>}
                </div>
            </div>
            <Foot goNext={ this.checkAnswer } cancel={ goCancel }/>
        </div>
        )
    }
}
