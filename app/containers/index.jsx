import React,{Component} from "react";
import Predraw from './predraw/predraw'
import First from './first/index'

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
        this.setState({ page:1})
    }
    getContent(){
        if (this.state.page==0){
            return <Predraw goNextPage={ this.goNextPage } goCancel={ this.goCancel }/>
        }
        if (this.state.page==1){
            {/*<Predraw goNextPage={this.goNextPage} goCancel={this.goCancel}/>*/}
            return <First/>
        }
    }

    render(){
        return (
            this.getContent()
        )
    }
}

export default Container;