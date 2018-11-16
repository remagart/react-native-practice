import React, { Component } from 'react'
import { Text, View,StyleSheet,Image } from 'react-native'

export default class myimagetest extends Component {
  render() {
    return (
      <View>
        <Image source={require('./icon.png')}/>
        <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR18NojE7FZxyzeAHvoE5zqlBKxNyp9jak_G_h-DYM7uT4F_Vq3'}}/>
        {/* <Text>HIHI</Text> */}
      </View>
    )
  }
}
