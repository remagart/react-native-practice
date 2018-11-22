import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'

export default class pageB extends Component {
  render() {
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
