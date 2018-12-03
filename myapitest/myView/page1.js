import React, { Component } from 'react';
import { Text, View,StyleSheet } from 'react-native';
import moment from 'moment';

export default class page1 extends Component {

  mytime = require('moment');

  constructor(props){
    super(props);

  }

  render() {
    return (
      <View style = {mystyle.mycontainer}>
        <Text> 現在是 {this.mytime().format('YYYY-MM-DD HH:mm:ss')} </Text>
        <Text>
            今天星期 {this.mytime().format('D')}
        </Text>
      </View>
    )
  }
}

const mystyle = StyleSheet.create({
  mycontainer:{
    flex:1,
    alignItems:'center',
  },
});