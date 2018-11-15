/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import {createStackNavigator} from 'react-navigation';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

type Props = {};
export default class App extends Component<Props> {
  console.log("ccc");
  render() {
    return <RootStack />;
  }
}

class HomeScreen extends Component{
  console.log("aaa");
  render(){
    return(
        <View>
          <Text>Welcome to Home</Text>
          <Button 
            title = "go to detail"
            onPress = {
              () => this.props.navigation.navigate('Detail')}
          />
        </View>
    );
  }
}

class DetailScreen extends Component{
  console.log("bbb");
  render(){
    return(
      <View>
        <Text>this is detail</Text>
        <Button 
            title = "go to detail"
            onPress = {() => this.props.navigation.navigate('Detail')}
          />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailScreen,
  },
  {
    initialRouteName:'Home',
  },
)
