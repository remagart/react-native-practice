import React, { Component } from 'react';
import { Text, View,StyleSheet } from 'react-native';
import {Button} from 'react-native-elements';

export default class myhome extends Component {
  render() {
    return (
      <View style = {mystyles.cotainer}>
        <Text> This is home </Text>
        <Button
            title = "Go to promise"
            color = "black"
            backgroundColor = "#FFEC48"
            onPress = {()=>{
                this.props.navigation.navigate("MYPROMISE");
            }}
        />
        <Button
            title = "Go to fetch"
            color = "black"
            backgroundColor = "#429ACE"
            containerViewStyle = {mystyles.btnstyle}
            onPress = {()=>{
                this.props.navigation.navigate("MYFETCH");
            }}
        />
        <Button
            title = "Go to sync and await"
            color = "black"
            backgroundColor = "#98F144"
            onPress = {()=>{
                this.props.navigation.navigate("MYSYNC_AWAIT");
            }}
        />
      </View>
    )
  }
}

const mystyles = StyleSheet.create({
  cotainer:{
      flex:1,
  },
  btnstyle:{
      margin: 10,
  },
})

