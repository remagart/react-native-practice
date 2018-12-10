import React, { Component } from 'react';
import { Text, View,Alert,StyleSheet } from 'react-native';
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

  mytest3(someone,timer){
    let result;
    let isSuccess;
    isSuccess = parseInt(Math.random()*2);
    result = new Promise((resolve,reject)=>{
        if(isSuccess){
            setTimeout(() => {
              resolve(`${someone} 跑 ${timer/1000}`);
            }, timer);
        }
        else{
            reject(`${someone} 跌倒了 `);
        }
    })
    return result;
  }

  // 只會回傳第一件發生的事
  // 例如有人先跌倒，就會傳他跌倒，有人1.5秒完成就回傳他
  // 2.5秒不可能被完成
  mytest4(){
    Promise.race([this.mytest3('cat',1500),this.mytest3('dog',2500)])
    .then((data)=>{
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });

  }

  // 若有人跌倒，則回傳跌倒的而已
  // 若兩人都成功，則回傳兩人成功的陣列
  mytest5(){
    Promise.all([this.mytest3('magic',1500),this.mytest3('conjuring',3000)])
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    });
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <Button
          title = "press me"
          backgroundColor = "#FFEC48"
          color = 'black'
          onPress = {this.mytest2.bind(this)}
        />

        <Button
          title = "race"
          backgroundColor = "#FFEC48"
          color = "black"
          containerViewStyle = {mystyles.mybtnstyle}
          onPress = {this.mytest4.bind(this)}
        />

        <Button
          title = "all"
          backgroundColor = "#FFEC48"
          color = "black"
          containerViewStyle = {mystyles.mybtnstyle}
          onPress = {this.mytest5.bind(this)}
        />
    
      </View>
    )
  }
}

const mystyles = StyleSheet.create({
  mybtnstyle:{
    margin:10,
  }
})

