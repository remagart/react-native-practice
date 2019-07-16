import React, { Component } from 'react';
import { View, Text,Button,ScrollView } from 'react-native';

export default class testComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log(this.props);

    let productListJSX = [];
    this.props.productLists.forEach((element,index)=>{
        productListJSX.push(
          <View key = {index}>
            <Text>{element.cityname}</Text>
            <Text> === </Text>
          </View>
        );
    });

    return (
      <View>
        <Text> testComponent </Text>
        <Text> {this.props.counter}</Text>
        <Button title="fetch" onPress = {this.props.fetchProductList} />
        <ScrollView>{productListJSX}</ScrollView>
      </View>
    );
  }
}
