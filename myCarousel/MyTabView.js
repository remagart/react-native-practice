import React, { Component } from 'react';
import { View, Text,Dimensions } from 'react-native';
import ScrollableTabView,{ScrollableTabBar} from "react-native-scrollable-tab-view";
import SubPage from "./SubPage";

// const {height,width} = Dimensions.get("window");

export default class MyTabView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a: 500,
        };
    }

    getViewHeight = (h) => {
        this.setState({a:h})

    }

    render() {
        return (
            <View style={{flex:1,backgroundColor: "#DDFFDD"}}>
                <ScrollableTabView 
                    // style={{flex:1,height:this.state.a}}
                    contentProps = {{style:{height:this.state.a}}}
                    renderTabBar={()=> <ScrollableTabBar /> } >
                    
                    <SubPage tabLabel={"AA"} getViewHeight={this.getViewHeight}/>
                    
                    <SubPage tabLabel={"BB"} getViewHeight={this.getViewHeight}/>
                    <SubPage tabLabel={"CC"} getViewHeight={this.getViewHeight}/>
                    <SubPage tabLabel={"DD"} getViewHeight={this.getViewHeight}/>
                    <SubPage tabLabel={"EE"} getViewHeight={this.getViewHeight}/>
                    <SubPage tabLabel={"FF"} getViewHeight={this.getViewHeight}/>
                    <SubPage tabLabel={"GG"} getViewHeight={this.getViewHeight}/>
                </ScrollableTabView>
            </View>
        );
    }
}
