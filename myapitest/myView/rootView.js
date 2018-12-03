import React, { Component } from 'react';
import { Text, View,StyleSheet,Alert,Dimensions } from 'react-native';
import {Button,Icon,Avatar,Divider,ButtonGroup} from 'react-native-elements';

const imgData = {
    cat1:"https://images.gamme.com.tw/news2/2017/49/24/q6CVnZ2YlKSdqw.jpg",
};

const myScreenWidth = Dimensions.get('screen').width;
const myScreenHeight = Dimensions.get('screen').height;

export default class rooView extends Component {

  constructor(props){
      super(props);
      this.state = {
          imguri1: imgData.cat1,
      };
  }

  render() {
    return (
      <View style = {mystyle.container}>
        <Text> Hello this is rootView </Text>
        
        <View style = {mystyle.mymiddle}>
           <Avatar
              xlarge
              source={{uri:this.state.imguri1}}
              onPress = {()=>{
                 Alert.alert("我可愛嗎?");
              }}
              rounded
              title = "RR"
              activeOpacity={0.3}
          />
        </View>
       
        <Divider style={{ backgroundColor: 'blue',height:5}} />

       <View style={mystyle.myrow}>
            <Button
              title = "magicboy"
              color = "gray"
              buttonStyle = {mystyle.mybtn}
              // fontSize = {20}
              // size = {40}
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
              onPress = {()=>{
                  return this.props.navigation.navigate("PAGE1");
              }}
              
            />
            <Button 
              title = "loading"
              buttonStyle = {mystyle.mybtn}
              // loadingRight
              loading
              onPress = {()=>{
                Alert.alert("this is loading...");
            }}
            />
         </View>
          <View style={mystyle.myrow}>
              <Button 
                title = "dialog"
                color = "green"
                backgroundColor = "orange"
                buttonStyle = {mystyle.mybtn}
                rightIcon = {{
                  name : "md-chatboxes",
                  type : "ionicon",
                  size:30,
                }}
              />
        </View>
        <View style={mystyle.myrow}></View>
        <View style={mystyle.myrow}></View>
        <View style={mystyle.myrow}></View>
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
      marginTop:10,
      width: (myScreenWidth/2) - 50,
    },
    myrow:{
      flex:1,
      flexDirection:'row',
      // alignItems:"center",
      
    },
});