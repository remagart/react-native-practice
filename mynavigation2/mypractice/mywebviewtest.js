import React, { Component } from 'react'
import { Text, View,WebView,StyleSheet } from 'react-native'

export default class mywebviewtest extends Component {
    state = {
        uri: 'https://www.tibame.com',
        scalePageToFit: true
    };

  render() {
    return (
      <View style = {styles.container}>
        <WebView 
            automaticallyAdjustContentInsets={false}
            source={{uri:this.state.uri}}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            decelerationRate="normal"
            startInLoadingState={true}
            scalesPageToFit={this.state.scalePageToFit}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
});