import React, { Component } from 'react';
import { View, Text,Button,ScrollView } from 'react-native';

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
        <Text> {this.props.counter1}</Text>
        <Button title="counter++" onPress = {this.props.increaseCounter}/>
        <Button title="counter--" onPress = {this.props.decreaseCounter} />
      </View>
    );
  }
}
