import React, { Component } from 'react';
import { View, Text,Button } from 'react-native';

export default class testComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> testComponent </Text>
        <Text> {this.props.counter}</Text>
        <Button title="counter++" onPress = {this.props.increaseCounter}/>
      </View>
    );
  }
}
