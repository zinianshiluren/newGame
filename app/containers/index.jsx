import React,{Component} from "react";
import Predraw from './predraw/predraw'
import First from './first/index'
import Second from './second/index'
import Third from './third/index'
import Forth from './forth/index'
import Fifth from './fifth/index'
import Six from './six/index'
import Seven from './seven/index'
import Eight from './eight/index'
import Nine from './nine/index'
import Ten from './ten/index'
import Eleven from './eleven/index'
import Twelve from './twelve/index'
import './index.scss'


class Container extends Component {
    constructor(...args){
        super(...args);
        this.state = {
            page : 0,
        }
        this.goNextPage = this.goNextPage.bind(this);
        this.goCancel = this.goCancel.bind(this);
    }
    goNextPage (){
        let  page  = this.state.page
        page++
        this.setState({ page:page })
        // let  page  = this.state.page
        // this.setState({ page:page++})
    }
    goCancel (){
        let  page  = this.state.page
        page--
        this.setState({ page:page})
    }
    getContent(){
        if (this.state.page==0){
            return <Predraw goNextPage={ this.goNextPage } goCancel={ this.goCancel }/>
        }
        if (this.state.page==1){
            return <First goNextPage={ this.goNextPage } goCancel={ this.goCancel }/>
        }
        if (this.state.page==2){
            return <Second goNextPage={ this.goNextPage } goCancel={ this.goCancel }/>
        }
        if (this.state.page==3){
            return <Third goNextPage={ this.goNextPage } goCancel={ this.goCancel }/>
        }
        if (this.state.page==4){
            return <Forth goNextPage={ this.goNextPage } goCancel={ this.goCancel }/>
        }
        if (this.state.page==5){
            return <Fifth goNextPage={ this.goNextPage } goCancel={ this.goCancel }/>
        }
        if (this.state.page==6){
            return <Six goNextPage={ this.goNextPage } goCancel={ this.goCancel }/>
        }
        if (this.state.page==7){
            return <Seven goNextPage={ this.goNextPage } goCancel={ this.goCancel }/>
        }
        if (this.state.page==8){
            return <Eight goNextPage={ this.goNextPage } goCancel={ this.goCancel }/>
        }
        if (this.state.page==9){
            return <Nine  goNextPage={ this.goNextPage } goCancel={ this.goCancel }/>
        }
        if (this.state.page==10){
            return <Ten  goNextPage={ this.goNextPage } goCancel={ this.goCancel }/>
        }
        if (this.state.page==11){
            return <Eleven  goNextPage={ this.goNextPage } goCancel={ this.goCancel }/>
        }
        if (this.state.page==12){
            return <Twelve  goNextPage={ this.goNextPage } goCancel={ this.goCancel }/>
        }


    }

    render(){
        return (
            this.getContent()
        )
    }
}

export default Container;
