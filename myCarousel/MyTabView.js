import React, { Component } from 'react';
import { View, Text,Dimensions } from 'react-native';
import ScrollableTabView,{ScrollableTabBar} from "react-native-scrollable-tab-view";
import SubPage from "./SubPage";

const {height,width} = Dimensions.get("window");

export default class MyTabView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{flex:1}}>
                <ScrollableTabView 
                    style={{flex:1}}
                    // style={{height: height}} 
                    renderTabBar={()=> <ScrollableTabBar /> } >
                    <SubPage tabLabel={"AA"} getViewHeight={this.props.getViewHeight}/>
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
