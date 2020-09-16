import React, { Component } from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';
import Pdf from "react-native-pdf";

const SCREEN_W = Dimensions.get("screen").width;
const SCREEN_H = Dimensions.get("screen").height;

const App = () => {

  return (
    <View style={styles.container}>
      <Pdf 
        source={{uri: "http://tkc.tw/bike/1-1.pdf"}}
        style={styles.pdf}
        scale={1}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#FFDDCC",
  },
  pdf: {
    width: SCREEN_W,
    height: SCREEN_H,
  }
})


export default App;
