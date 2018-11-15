/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import {createStackNavigator} from 'react-navigation';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>Welcome to React Native!</Text>
      // </View>
      <MyRoute />
    );
  }
}

class HomeScreen extends Component{
  render(){
    return(
      <View>
        <Text style = {styles.welcome}>this is Home</Text>
        <Button 
          title = "Go to detail"
          onPress = {() => this.props.navigation.navigate('Detail')}
        />
      </View>
    );
  }
}

class DetailScreen extends Component{
  render(){
    return(
      <View>
        <Text style={styles.welcome}>this is detail</Text>
        <Button 
          title = "Go to Home"
          onPress = {()=>this.props.navigation.navigate('Home')}
        />
        <Button 
          title = "Go to detail again by navigate"
          color = "orange"
          onPress = {()=>this.props.navigation.navigate('Detail')}
        />
        <Button 
          title = "Go to detail again by push"
          color = "red"
          onPress = {()=>this.props.navigation.push('Detail')}
        />
        <Button 
          title = "Go back"
          color = "gray"
          onPress = {()=>this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const MyRoute = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
