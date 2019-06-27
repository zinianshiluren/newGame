import React, {Component} from "react";
import Foot from "../foot";
import './index.scss'
import { Radio } from 'antd';
import { Checkbox } from 'antd';

export default class Forth extends Component {
    constructor(...args){
        super(...args);
        this.state = {
            childList : [1,2,3,4],
            value : null,
            diaCount : null,
        }
        this.render = this.render.bind(this);
    }


    render(){
        const { goNextPage,goCancel } = this.props
        const radioStyle = {
            display: 'block',
            height: '80px',
            lineHeight: '80px',
            fontSize: '40px',
            textAlign: 'center',
        };
        const TiStyle = {
            height: '80px',
            lineHeight: '80px',
            fontSize: '45px',
            fontWeight: '600',
        };
        return(
            <div className="forth-flex-container">
                <div className="forth-dialog"></div>
                <div>
                    <p style={TiStyle}>1.地震发生时，感觉</p>
                    <Radio.Group size="large" value={this.state.value}>
                        <Radio  style={radioStyle} value={1}>
                            A.先摇后晃
                        </Radio>
                        <Radio style={radioStyle} value={2}>
                            B.先晃后摇
                        </Radio>
                        <Radio style={radioStyle} value={3}>
                            C.同时发生
                        </Radio>
                    </Radio.Group>
                </div>
                <div>
                    <p style={TiStyle}>2.海底地震可能会引起</p>
                    <Radio.Group size="large" value={this.state.value}>
                        <Radio  style={radioStyle} value={1}>
                            A.狂风暴雨
                        </Radio>
                        <Radio style={radioStyle} value={2}>
                            B.海啸
                        </Radio>
                        <Radio style={radioStyle} value={3}>
                            C.海平面下降
                        </Radio>
                    </Radio.Group>
                </div>
                <div>
                    <p style={TiStyle}>3.下面哪个不是地震造成的现象</p>
                    <Radio.Group size="large" value={this.state.value}>
                        <Radio  style={radioStyle} value={1}>
                            A.山崩地裂
                        </Radio>
                        <Radio style={radioStyle} value={2}>
                            B.房屋倒塌
                        </Radio>
                        <Radio style={radioStyle} value={3}>
                            C.极光现象
                        </Radio>
                    </Radio.Group>
                </div>

                <Foot goNext={ goNextPage } cancel={ goCancel }/>
            </div>

        )
    }
}
