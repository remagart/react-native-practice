import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ScrollableTabView,{ScrollableTabBar} from "react-native-scrollable-tab-view";
import SubPage from "./SubPage";


export default class MyTabView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flex:1}}>
                    <ScrollableTabView renderTabBar={()=> <ScrollableTabBar /> } >
                        <SubPage tabLabel={"AA"} />
                        <SubPage tabLabel={"BB"} />
                        <SubPage tabLabel={"CC"} />
                        <SubPage tabLabel={"DD"} />
                        <SubPage tabLabel={"EE"} />
                        <SubPage tabLabel={"FF"} />
                        <SubPage tabLabel={"GG"} />
                    </ScrollableTabView>
                </View>
            </View>
            
        );
    }
}
