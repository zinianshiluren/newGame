import React, {Component} from "react";
import Foot from "../foot";
import './index.scss'
import {Radio} from "antd";
import success from "../../resource/pic/common/对号.png";
import diamond from "../../resource/pic/common/钻石_小.png";

export default class Seven extends Component {
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
        let b = answer2 === '2' ? 1:0
        let c = answer3 === '3' ? 1:0
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
                <div className="seven-dialog"/>
                <div className="forth-radio-group" onChange={(e)=>{this.onChange1(e)}}>
                    <Radio.Group>
                        <p className="forth-tiStyle">1.楼房遇到地震时该如何躲避</p>
                        <Radio className="forth-radioStyle" value={1}>
                            A.躲在卫生间角落<span>{end && <img width={20} src={success}/>}</span>
                        </Radio>
                        <Radio className="forth-radioStyle" value={2}>
                            B.在阳台等待救援
                        </Radio>
                        <Radio className="forth-radioStyle" value={3}>
                            C.坐电梯快速下楼
                        </Radio>
                    </Radio.Group>
                    <div style={{textAlign:'right'}}>
                        { answer1==='1' && end && <img src={diamond}/>}
                    </div>
                </div>
                <div className="forth-radio-group" onChange={(e)=>{this.onChange3(e)}}>
                    <Radio.Group>
                        <p className="forth-tiStyle">2.在室外遇到地震时该如何应对</p>
                        <Radio className="forth-radioStyle" value={1}>
                            A.躲进大楼层底
                        </Radio>
                        <Radio className="forth-radioStyle" value={2}>
                            B.在无遮掩的空地上抱头蹲下{end && <img width={20} src={success}/>}
                        </Radio>
                        <Radio className="forth-radioStyle" value={3}>
                            C.躲在大树下
                        </Radio>
                    </Radio.Group>
                    <div style={{textAlign:'right'}}>
                        { answer3==='2' && end && <img src={diamond}/>}
                    </div>
                </div>
                <div className="forth-radio-group" onChange={(e)=>{this.onChange2(e)}}>
                    <Radio.Group>
                        <p className="forth-tiStyle">3.地震时，有哪些自救方法可取</p>
                        <Radio className="forth-radioStyle" value={1}>
                            A.朝着浓烟来源逃跑
                        </Radio>
                        <Radio className="forth-radioStyle" value={2}>
                            B.躲在洗手间等狭小空间{end && <img width={20} src={success}/>}
                        </Radio>
                        <Radio className="forth-radioStyle" value={3}>
                            C.大喊大叫
                        </Radio>
                    </Radio.Group>
                    <div style={{textAlign:'right'}}>
                        { answer2==='2' && end && <img src={diamond}/>}
                    </div>
                </div>
                <Foot goNext={ this.checkAnswer } cancel={ goCancel }/>
            </div>
        )
    }
}
