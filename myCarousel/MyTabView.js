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
            <View style={{flex:1}}
                onLayout={(event)=>{
                    this.props.getViewHeight(event.nativeEvent.layout.height)
                }}
            >
                <ScrollableTabView 
                    style={{flex:1}}
                    // style={{height: height}} 
                    renderTabBar={()=> <ScrollableTabBar /> } >
                    <View tabLabel={"AA"} style={{height: this.state.a}}>
                        <SubPage  getViewHeight={this.getViewHeight}/>
                    </View>
                    <SubPage tabLabel={"BB"} />
                    <SubPage tabLabel={"CC"} />
                    <SubPage tabLabel={"DD"} />
                    <SubPage tabLabel={"EE"} />
                    <SubPage tabLabel={"FF"} />
                    <SubPage tabLabel={"GG"} />
                </ScrollableTabView>
                
            </View>
            
        );
    }
}
