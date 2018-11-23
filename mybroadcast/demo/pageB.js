import React, { Component } from 'react'
import { Text, View,Button,DeviceEventEmitter} from 'react-native'

export default class pageB extends Component {

    componentDidMount(){
        console.log("this is pageB");
        DeviceEventEmitter.addListener("Hello",function(){
            console.log("Can you see me??");
        });
    }
    componentWillUnmount(){
        console.log("pageB unmount");
        DeviceEventEmitter.removeListener("hihi");
    }

  render() {
    DeviceEventEmitter.addListener("hihi",function(){
        console.log("hiCan you see me??");
    });
    return (
      <View>
        <Text> this is pageB </Text>
        <Button
            title = "Go to PageA"
            onPress = {()=>this.props.navigation.navigate("PAGE1")}
        />
      </View>
    )
  }
}
