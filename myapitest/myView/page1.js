import React, { Component } from 'react';
import { Text, View,StyleSheet } from 'react-native';
import moment from 'moment';

export default class page1 extends Component {

  mytime = require('moment');

  constructor(props){
    super(props);

  }

  getTimelineFormatString(year, month) {
    return moment({y: year, M: month - 1}).locale('zh-tw').format('MMM, YYYY');
  }

  getCompCourseFormatString(millisecond) {
    return moment(millisecond).locale('zh-tw').format('YYYY/MM/DD HH:mm');
  }

  render() {
    return (
      <View style = {mystyle.mycontainer}>
        <Text> 現在是 {this.mytime().format('YYYY-MM-DD HH:mm:ss')} </Text>
        <Text>
            今天星期 {this.mytime().format('D')}
        </Text>
        <Text>
            全部是 {this.mytime().format()}
        </Text>
        <Text>
           測試傳入年月 {this.getTimelineFormatString(2018,4)}
        </Text>
        <Text>
           測試傳入millisecond {this.getCompCourseFormatString(99999999999)}
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