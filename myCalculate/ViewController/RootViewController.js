import React, { Component } from 'react';
import RootView from './../View/RootView';

export default class RootViewController extends Component{
    render(){
        return(
            // ref可以讓父子組件溝通
            <RootView controller={this} ref="rootView"/>
        );
    }
    //按下"交換"所執行的程式
    change=()=>{
        if(this.refs.rootView.isDollarToNT){
            //若現在是"從美金..."按下"交換"就會跑這個if
            console.log("this.refs.rootView.isDollarToNT是" + this.refs.rootView.isDollarToNT);
            this.refs.rootView.myexchange(false);
        }
        else{
            this.refs.rootView.myexchange(true);
        }
    }
}
