import React, { Component } from 'react';
import { Text, View,Button,Alert } from 'react-native';

export default class Demo extends Component {
  render() {
    return (
      <View>
        <Text style={mystyle}> Hello, this is demo! </Text>
        <Text>I'm Richerd</Text>
        <Button 
          title = "Demo"
          color = "#42f4ce"
          onPress = {function(){Alert.alert("this is demo in other file")}}
        />
      </View>
    );
  }
};
var mystyle = {
  color : "blue",
  fontSize: 24,
  fontStyle: 'italic',
  fontWeight: "bold",
  textDecorationLine:"underline",
  textShadowOffset:{
    width:5,
    height:5
  },
  textShadowColor: "red",
  
};
