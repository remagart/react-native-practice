import React, { Component } from 'react';
import { Text, View,StyleSheet } from 'react-native';
import {Button,Icon} from 'react-native-elements';

export default class rooView extends Component {
  render() {
    return (
      <View style = {mystyle.container}>
        <Text> Hello this is rootView </Text>
        <Button
          title = "magicboy"
          color = "gray"
          fontSize = {20}
          size = {40}
          fontWeight = "bold"
          backgroundColor = "blue"
          //react-native-element預設是MaterialIcons
          // type (defaults to material, options are material-community, zocial,
          //  font-awesome, octicon, ionicon, foundation, evilicon, simple-line-icon, 
          // feather or entypo)
          // https://oblador.github.io/react-native-vector-icons/
          icon = {{
            name: "aircraft-take-off",
            type: "entypo",
            size: 30
          }}
          borderRadius = {60}
          
        />

        <Button 
          title = "this is loading"
          loading
        />

        
        
      </View>
    )
  }
}

const mystyle = StyleSheet.create({
    container:{
        flex: 1,
    },
});