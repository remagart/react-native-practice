import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Swiper from "./Swiper";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
        <View style={{width:200,height:200,backgroundColor: "red",overflow:"hidden"}}>
          <Swiper />
        </View>
      </View>
    );
  }
}
