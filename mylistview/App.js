/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import {createAppContainer,createStackNavigator } from 'react-navigation';
import Mylisttest from './demo/mylisttest'


type Props = {};


class MyHomeScreen extends Component{
  render(){
    return(
      <Button 
        title = "Go to Listview"
        color = "gray"
        onPress = {()=>this.props.navigation.navigate('MyList')}
      />
    );
  }
}

class MyListScreen extends Component{
  render(){
    return(
      <Mylisttest />
    );
  }
}
const MyRoute = createStackNavigator(
  {
    MyHome: MyHomeScreen,
    MyList: MyListScreen,
  },
  {
    initialRouteName: 'MyHome',
  },
);

const AppContainer = createAppContainer(MyRoute);
export default class App extends Component<Props> {
  render(){
    return (
      <AppContainer />
    );
  }
}
