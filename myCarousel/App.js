import React, { Component } from 'react';
import { View, Text,ScrollView,Dimensions } from 'react-native';
import Swiper from "./Swiper";
import ScrollableTabView,{ScrollableTabBar} from "react-native-scrollable-tab-view";
import MyTabView from "./MyTabView";


const {width,height} = Dimensions.get("window")

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hh: 500,
    };
  }

  getViewHeight = (h) => {
    this.setState({
      hh: h,
    })
  }

  render() {
    console.log("hhh",this.state.hh);
    return (
      <View style={{flex:1}}>
        <Text style={{fontSize:50}}>This is Top</Text>
          <ScrollView 
              style={{flex:1,backgroundColor:"yellow"}} 
              contentContainerStyle = {{height:this.state.hh,width:width}}
          >
            <Text style={{fontSize:30}}>This is scroll</Text>
            <Text style={{fontSize:30}}>This is scroll</Text>

            <MyTabView getViewHeight={this.getViewHeight}/>
            
            {/* <View style={{backgroundColor:"red",width:200,height:height}}></View> */}

            {/* <Text style={{fontSize:30}}>This is scroll</Text>
            <Text style={{fontSize:30}}>This is scroll</Text>
            <Text style={{fontSize:30}}>This is scroll</Text>
            <Text style={{fontSize:30}}>This is scroll</Text>
            <Text style={{fontSize:30}}>This is scroll</Text>
            <Text style={{fontSize:30}}>This is scroll</Text>
            <Text style={{fontSize:30}}>This is scroll</Text>
            <Text style={{fontSize:30}}>This is scroll</Text>
            <Text style={{fontSize:30}}>This is scroll</Text>
            <Text style={{fontSize:30}}>This is scroll</Text>
            <Text style={{fontSize:30}}>This is scroll</Text> */}
            
            <Text style={{fontSize:30}}>This is scroll3333</Text>
            <Text style={{fontSize:30}}>This is scroll3333</Text>
            <Text style={{fontSize:30}}>This is scroll3333</Text>

          </ScrollView>
        
        <Text style={{fontSize:30}}>This is Bottom</Text>
        <Text style={{fontSize:30}}>This is Bottom</Text>
        <Text style={{fontSize:30}}>This is Bottom</Text>
        <Text style={{fontSize:30}}>This is Bottom</Text>
      </View>
    );
  }
}
