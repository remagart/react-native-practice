import React, { Component } from 'react';
import { Text, View,StyleSheet } from 'react-native';
import {Button,Icon,Avatar} from 'react-native-elements';

export default class rooView extends Component {
  render() {
    return (
      <View style = {mystyle.container}>
        <Text> Hello this is rootView </Text>
        <View style = {mystyle.mymiddle}>
           <Avatar
              large
              title = "RR"
              rounded
          />
        </View>
       
        <View style = {mystyle.mybtn}>
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
              rightIcon = {{
                name: "aircraft-take-off",
                type: "entypo",
                size: 30
              }}
              
              borderRadius = {60}
              
            />
        </View>
        <View style={mystyle.mybtn}>
            <Button 
              title = "this is loading"
              loadingRight
              loading
            />
        </View>
        
      </View>
    )
  }
}

const mystyle = StyleSheet.create({
    container:{
        flex: 1,
    },
    mymiddle:{
      alignItems: 'center',
      margin: 20,
    },
    mybtn:{
      margin:10,
    }
});