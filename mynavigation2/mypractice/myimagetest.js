import React, { Component } from 'react'
import { Text, View,StyleSheet,Image } from 'react-native'

export default class myimagetest extends Component {
  render() {
    return (
      <View>
        <Text style = {styles.mytxtstyle}>這是 local img</Text>
        <Image style={styles.mystyle} source={require('./icon.png')}/>
        <Text style = {styles.mytxtstyle}>This is https img</Text>
        <Image style={styles.mystyle} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR18NojE7FZxyzeAHvoE5zqlBKxNyp9jak_G_h-DYM7uT4F_Vq3'}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    mystyle:{
        width: 200,
        height: 200,
        marginLeft: "auto",
        marginRight: "auto",
    },
    mytxtstyle:{
        fontSize:20,
        color:"blue",
        fontWeight:"bold",
        fontStyle:"italic",
    },
});