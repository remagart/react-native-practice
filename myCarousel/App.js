import React, { Component } from 'react';
import { View, Text,ScrollView } from 'react-native';
import Swiper from "./Swiper";
import ScrollableTabView,{ScrollableTabBar} from "react-native-scrollable-tab-view";
import MyTabView from "./MyTabView";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Text style={{fontSize:50}}>This is Top</Text>
        <ScrollView style={{flex:1}}>
          <Text style={{fontSize:30}}>This is scroll</Text>
          <Text style={{fontSize:30}}>This is scroll</Text>

          <MyTabView />
          
        </ScrollView>
      </View>
    );
  }
}
