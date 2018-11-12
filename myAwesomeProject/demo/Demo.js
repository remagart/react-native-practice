import React, { Component } from 'react';
import { Text, View,Button,Alert } from 'react-native';

export default class Demo extends Component {
  render() {
    return (
      <View>
        <Text style={mystyle}
        numberOfLines = {2}
        onLayout = {({nativeEvent: {layout: {x, y, width, height}}})=>{
          //搖動手機打開menu並enable Remote JS Debugging
          //即可在Chrome看到debug的頁面
          //按Ctrl Shift j 打開console即可看console.log()
          console.log("zzzz");
          console.log(x, y, width, height);
        }}
        > Hello, this is demo!Hello, this is demo!Hello, this is demo!Hello, this is demo!Hello, this is demo!Hello, this is demo! </Text>
        <Text
        onPress = {function(){
          Alert.alert("So far so good");
        }}
        >How are you？</Text>
        <Text
          style = {mymargin}
          onLongPress={function(){
            Alert.alert("My name is Richard");
          }}
        >Please press long time to see.</Text>
        <Button 
          title = "Demo"
          color = "#42f4ce"
          onPress = {function(){
            Alert.alert("this is demo in other file");
            console.log("hihih");
          }}
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

var mymargin = {
  top: 100,
}
