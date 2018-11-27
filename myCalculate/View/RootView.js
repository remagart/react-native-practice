import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';

export default class RootView extends Component {
  render() {
    return (
      <View style={rootStyle.rootView}>
        <View style={rootStyle.screenView}></View>
        <View style={rootStyle.keyboardView}></View>
      </View>
    )
  }
}

let rootStyle = StyleSheet.create({
    rootView:{
        flex:1
    },
    screenView:{
        flex:1,
        backgroundColor:"bisque",
    },
    keyboardView:{
        flex:2,
        backgroundColor:"ivory",
    },
});
