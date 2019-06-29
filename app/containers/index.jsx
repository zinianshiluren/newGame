import React,{Component} from "react";
import Home from './home/index'
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
            page : -1,
            count : 0,
        }
        document.title = '营救计划'
        this.goNextPage = this.goNextPage.bind(this);
        this.goCancel = this.goCancel.bind(this);
        this.setCount = this.setCount.bind(this);
        this.getCount = this.getCount.bind(this)
    }
    setCount(e){
        let  count  = this.state.count
        count = count + e
        this.setState({ count : count })
    }
    getCount(){
        return this.state.count
    }
    goNextPage (){
        let  page  = this.state.page
        page++
        this.setState({ page:page })
    }
    goCancel (){
        let  page  = this.state.page
        page--
        this.setState({ page:page})
    }
    getContent(){
        console.log(this.state.count)
        if (this.state.page==-1) {
            return <Home goNextPage={ this.goNextPage } setCount={ this.setCount } getCount={ this.getContent } goCancel={ this.goCancel }/>
        }
        if (this.state.page==0){
            return <Predraw goNextPage={ this.goNextPage } setCount={ this.setCount } getCount={ this.getContent } goCancel={ this.goCancel }/>
        }
        if (this.state.page==1){
            return <First goNextPage={ this.goNextPage } setCount={ this.setCount } getCount={ this.getContent } goCancel={ this.goCancel }/>
        }
        if (this.state.page==2){
            return <Second goNextPage={ this.goNextPage } setCount={ this.setCount } getCount={ this.getContent } goCancel={ this.goCancel }/>
        }
        if (this.state.page==3){
            return <Third goNextPage={ this.goNextPage } setCount={ this.setCount } getCount={ this.getContent } goCancel={ this.goCancel }/>
        }
        if (this.state.page==4){
            return <Forth goNextPage={ this.goNextPage } setCount={ this.setCount } getCount={ this.getContent } goCancel={ this.goCancel }/>
        }
        if (this.state.page==5){
            return <Fifth goNextPage={ this.goNextPage } setCount={ this.setCount } getCount={ this.getContent } goCancel={ this.goCancel }/>
        }
        if (this.state.page==6){
            return <Six goNextPage={ this.goNextPage } setCount={ this.setCount } getCount={ this.getContent } goCancel={ this.goCancel }/>
        }
        if (this.state.page==7){
            return <Seven goNextPage={ this.goNextPage } setCount={ this.setCount } goCancel={ this.goCancel }/>
        }
        if (this.state.page==8){
            return <Eight goNextPage={ this.goNextPage } setCount={ this.setCount } getCount={ this.getContent } goCancel={ this.goCancel }/>
        }
        if (this.state.page==9){
            return <Nine  goNextPage={ this.goNextPage } setCount={ this.setCount } getCount={ this.getContent } goCancel={ this.goCancel }/>
        }
        if (this.state.page==10){
            return <Ten  goNextPage={ this.goNextPage } setCount={ this.setCount } getCount={ this.getContent } goCancel={ this.goCancel }/>
        }
        if (this.state.page==11){
            return <Eleven  goNextPage={ this.goNextPage } count={this.state.count} setCount={ this.setCount } getCount={ this.getContent } goCancel={ this.goCancel }/>
        }
        if (this.state.page==12){
            return <Twelve  goNextPage={ this.goNextPage } setCount={ this.setCount } getCount={ this.getContent } goCancel={ this.goCancel }/>
        }

    }

    render(){
        return (
            <div>
                {this.getContent()}
                {/*<audio id="music" src="https://music.163.com/#/song?id=3405868" autoPlay preload="auto" loop="loop">该浏览器不支持audio属性</audio>*/}
                {/*<audio id='audio' src='http://go.163.com/2018/0209/mengniu/audio/bgm.mp3' autoPlay loop>*/}
                    {/*1111*/}
                {/*</audio>*/}
            </div>
        )
    }
}

export default Container;
