/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation';


class page1 extends Component{
  render(){
    return (
      <View>
        <Text>aaaa</Text>
      </View>
    );
  }
}

class page2 extends Component{
  render(){
    return (
      <View>
        <Text>bbbb</Text>
      </View>
    );
  }
}

const MyRoute = createStackNavigator(
  {
    PAGE1 : page1,
    PAGE2 : page2,
  },{
    initialRouteName : 'PAGE1',
  }
);

const MyAppContainer = createAppContainer(MyRoute);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <MyAppContainer />
    );
  }
}

