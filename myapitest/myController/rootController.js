import React, { Component } from 'react';
import { Text, View,StatusBar,StyleSheet } from 'react-native';
import RootNavigate from './../mynavigate/rootnavigate';

export default class rootController extends Component {
  render() {
    return (
      <View style={mystyles.container}>
        <StatusBar
            backgroundColor = "red"
            barStyle = "light-content"
        />
        <RootNavigate  />
      </View>
    )
  }
}

const mystyles = StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor: "red",
  },
});
