import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Video} from 'expo';
import {MaterialIcons,Octions} from '@expo/vector-icons';

export default class App extends React.Component {
  state = {
    mute: false,
    shouldPlay: true,
  }
  handlePlayAndPause = () =>{
    this.setState((prevState)=>({
      shouldPlay: !prevState.shouldPlay,
    }));
  }
  handleVolume = () =>{
    this.setState(prevState => ({
      mute: !prevState.mute,
    }));
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Video
        source={{uri:"http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}}
        rate={1.0}
        volume={1.0}
        isMuted={this.state.mute}
        resizeMode="cover"
        shouldPlay={this.state.shouldPlay}
        isLooping
        style={{ width:300, height: 300 }}
        />
        <View style={styles.controlBar}>
          <MaterialIcons 
            name = {this.state.mute ? "volume-mute" : "volume-up"}
            size = {45}
            color = "white"
            onPress = {this.handleVolume}
          />
          <MaterialIcons 
            name = {this.state.shouldPlay ? "pause" : "play-arrow"}
            size = {45}
            color = "white"
            onPress = {this.handlePlayAndPause}
          />
        </View>
      </View>
 
    );
    
    

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
controlBar:{
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: 60,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0,0,0,0.5)',
},

});

