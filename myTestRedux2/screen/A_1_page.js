import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';

export default class A_1_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> A_1_page </Text>
        <TouchableOpacity onPress={()=>{this.props.increaseCounter()}}>
            <View>
                <Text>clicked to A_2_page</Text>
            </View>
        </TouchableOpacity>
        <Text>AAA{this.props.counter}AAA</Text>
      </View>
    );
  }
}
