import React, { Component } from 'react'
import { Text, View,Button,DeviceEventEmitter } from 'react-native'

const apple = "hihi";

export default class pageA extends Component {
    componentDidMount(){
        console.log("this is pageA");
        DeviceEventEmitter.emit("Hello",apple);
    }
  render() {
    return (
      <View>
        <Text> this is PageA </Text>
        <Button
            title = "Go to PageB"
            onPress = {()=>this.props.navigation.navigate("PAGE2")}
        />
      </View>
    )
  }
}
