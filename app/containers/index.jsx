import React,{Component} from "react";
import Predraw from './predraw/predraw'

class Container extends Component {
    constructor(...args){
        super(...args);
        this.state = {
            page : 0,
        }
    }
    getContent(){
        if (this.state.page==0){
            <Predraw/>
        }
    }

    render(){
        const {page} = this.state
        return (
            getContent()
        )
    }
}

export default Predraw;