import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import MyIcon from 'react-native-vector-icons/FontAwesome';

export default class page2 extends Component {
  render() {
    return (
      <View style = {mystyle.container}>
        <View style = {mystyle.myheader}>
          <View style={mystyle.myviewicon}>
              <MyIcon
                name = "skype"
                color = "blue"
                size = {60}
                backgroundColor = "red"
              />
          </View>
          
          
          <MyIcon
            name = "skyatlas"
            color = "green"
            size = {60}
          />
        </View>     
        <View style = {mystyle.mybody}></View> 
        <View style = {mystyle.mybottom}></View>
      </View>
    )
  }
}

const mystyle = StyleSheet.create({
  container:{
    flex: 1,
  },
  myheader:{
    flex:0.3,
    backgroundColor:"#fffc82",
    flexDirection:'row',
    alignItems:'center',
    justifyContent : 'center',
  },
  mybody:{
    flex:0.4,
    backgroundColor:"green",
    opacity: 0.3,
    borderColor: "blue",
    borderStyle: 'dotted',
    borderWidth:5,
    borderRadius:40,
  },
  mybottom:{
    flex:0.3,
    backgroundColor:"purple",
    opacity: 0.3,
  },
  myviewicon:{
    backgroundColor: "#82fff8",
    borderRadius: 40,
    borderColor: "purple",
    borderWidth: 2,
    padding: 10,
    margin: 10,
    opacity:0.5,
  },
});
