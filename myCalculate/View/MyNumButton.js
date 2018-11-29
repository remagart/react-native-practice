import React, { Component } from 'react'
import { Text, View,TouchableHighlight,StyleSheet,Image } from 'react-native'

export default class MyNumButton extends Component {
  render() {
    if(this.props.model === "mytxt"){
      return(
        <TouchableHighlight
          style = {[this.props.style,mynumstyles.container]}
          onPress = {()=>{
              
          }}  
        >
          <Text style={mynumstyles.text}>
            {this.props.title}
          </Text>
        </TouchableHighlight>
      );
    }
    else{
        return(
            <TouchableHighlight 
              style = {[this.props.style,mynumstyles.container]}
              onPress = {()=>{

              }}
          >
            <View style={mynumstyles.myimgeView}>
                <Image 
                    style = {mynumstyles.myimgstyle}
                    resizeMode='cover'
                    source = {require("../src/del.png")}
                />
            </View>
          </TouchableHighlight>
        );
    }
  }
}

const mynumstyles = StyleSheet.create({
  container:{
    flexDirection:'row',
  },
  text:{
    textAlign: 'center',
    alignSelf:'center',
    flex: 1,
    fontSize: 20,
  },
  myimgView:{
    flexDirection:'row',
    flex:1,
    justifyContent:'center',
     alignItems: 'center',
  },
  //不知道為何無法置中
  myimgstyle:{
     alignSelf:'center',
     justifyContent: 'center',
     alignItems: 'center',
     
     
  }
});