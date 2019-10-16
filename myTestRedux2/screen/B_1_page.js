import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';

export default class B_1_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log("YCCC ",this.props);
    let test = this.props.lists;
    if(test[0]){
      console.log(test[0].location);
    }
    return (
      <View>
        <Text> B_1_page </Text>
        <TouchableOpacity onPress = {()=>{this.props.fetchList()}}>
          <View>
            <Text>
              按我
            </Text>
          </View>
        </TouchableOpacity>
        {
          (test[0] != null && test[0] != undefined)?
            <Text>{test[0].location}</Text>
          :
          null
        }
        
      </View>
    );
  }
}
