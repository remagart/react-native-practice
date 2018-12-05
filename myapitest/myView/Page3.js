import React, { Component } from 'react'
import { Text, View,Alert,StyleSheet } from 'react-native'
import MyLanguage from 'react-localization';
import LocalizedStrings from 'react-localization';
import {Button,CheckBox} from 'react-native-elements';

export default class Page3 extends Component {
    mytxt = new LocalizedStrings({
        'zh-tw':{
            how:"淡淡的哀傷",
            lang: "中文",
        },
        'en':{
            how:"this is egg crying",
            lang: "英文",
        },
    });

  constructor(props){
      super(props);
      this.state = {
          //true means English
          //false means Mandarin
          isEnglish: true,
          mycolor: "red",
      }
  }

  render() {
    //this.mytxt.setLanguage('zh-tw');
    return (
      <View style = {mystyle.container}>
        <View style = {mystyle.myheader}>
            <CheckBox
                title = {this.mytxt.lang}
                containerStyle = {mystyle.myboxStyle}
                textStyle = {mystyle.mytextStyle}
                checked = {this.state.isEnglish}
                checkedColor = {this.state.mycolor}
                onPress = {()=>{
                    if(this.state.isEnglish === true){
                        this.mytxt.setLanguage('zh-tw');
                    }
                    else{
                        this.mytxt.setLanguage('en');
                    }
                    this.setState({
                        isEnglish: !this.state.isEnglish,
                     });
                }}
            />
        </View>
        <View style = {mystyle.mybody}>
            <Text style = {mystyle.mytextStyle}>
                {this.mytxt.how}
            </Text>
        </View>
      </View>
    )
  }
}

const mystyle = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
    },
    myheader:{
        flex: 0.5,
        backgroundColor: "#4286f4",
        alignItems:'center',
        justifyContent:'center',
    },
    mybody:{
        flex: 0.5,
        backgroundColor:"#fdddff", 
        //View中的字往垂直中間對齊
        justifyContent:'center',
        //View中的字往水平中間對齊
        alignItems:'center',
    },
    mytextStyle:{
        fontSize: 24,
        color: "red",
    },
    myboxStyle:{
        backgroundColor:"#4286f4",
        borderColor: "#4286f4",
    }
});

