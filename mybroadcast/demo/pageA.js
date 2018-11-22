import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'

export default class pageA extends Component {
    
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
