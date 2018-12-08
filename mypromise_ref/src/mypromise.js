import React, { Component } from 'react';
import { Text, View,Alert } from 'react-native';
import {Button} from 'react-native-elements';

export default class mypromise extends Component {
  constructor(props){
    super(props);
  }
  mytest(someone){
      let a = parseInt(Math.random()*2);
      let result;
      result = new Promise((resolve,reject) => {
        if(a == 0){
          resolve(`${someone} 成功了!`);
        }
        else{
          reject(`${someone} 失敗了!!`);
        }
      })
      return result;
  }

  mytest2(){
    this.mytest("apple")
    .then((data)=>{
      Alert.alert(data);
    })
    .catch((err)=>{
      Alert.alert(err);
    });
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <Button
          title = "press me"
          onPress = {this.mytest2.bind(this)}
        />
    
      </View>
    )
  }
}
