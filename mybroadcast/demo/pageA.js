import React, { Component } from 'react'
import { Text, View,Button,DeviceEventEmitter } from 'react-native'

const apple = "hihi";

export default class pageA extends Component {
    componentDidMount(){
        console.log("this is pageA");
        DeviceEventEmitter.emit("Hello",apple);
    }

    shouldComponentUpdate(nextProps,nextState){
      console.log("this is PageA shouleupdate");
      
    }

  render() {
    return (
      <View>
        <Text> this is PageA </Text>
        <Button
            title = "Go to PageB"
            onPress = {()=>{
              return this.props.navigation.navigate("PAGE2");
            }}
        />

        <Button 
          title = "發通知"
          onPress = {()=>{
            DeviceEventEmitter.emit("hihi",apple);
          }}
        />
        
      </View>
    )
  }
}
