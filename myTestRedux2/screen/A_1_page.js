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
                <Text>add A_2_page</Text>
            </View>
        </TouchableOpacity>
        <Text>==={this.props.counter}===</Text>
        <TouchableOpacity onPress={()=>{this.props.decreaseCounter()}}>
            <View>
                <Text>minus A_2_page</Text>
            </View>
        </TouchableOpacity>
      </View>
    );
  }
}
