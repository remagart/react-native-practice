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
import MyImageTest from './mypractice/myimagetest';
import Mywebviewtest from './mypractice/mywebviewtest';

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
  static navigationOptions = {
      title: 'myHome!!',
  };
  render(){
    return(
      
      <View>
        <Text style = {styles.welcome}>this is Home</Text>
        <Button 
          title = "Go to detail"
          onPress = {() => {this.props.navigation.navigate('Detail',{
            itemId: 123,
            otherParam: 'anything of all',
          });
        }}
        />
        <MyImageTest />
      </View>
    );
  }
}

class DetailScreen extends Component{
  static navigationOptions = {
    title: 'mydetail!!',
};
  render(){
    const {navigation} = this.props;
    //還可以這樣用!!
    //const otherParam = this.props.navigation.getParam('otherParam','some value');
    //const itemId = this.props.navigation.getParam('itemId','default value');
    const otherParam = navigation.getParam('otherParam','some value');
    const itemId = navigation.getParam('itemId','default value');
    return(
      <View>
        <Text style={styles.welcome}>this is detail</Text>
        <Text>this is otherParam {JSON.stringify(otherParam)}</Text>
        <Text>this is itemid {JSON.stringify(itemId)}</Text>
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
          onPress = {()=>{
            this.props.navigation.push('Detail',{
              itemId: itemId+1,
            })
          }}
        />
        <Button 
          title = "Go back"
          color = "gray"
          onPress = {()=>this.props.navigation.goBack()}
        />
        <Button
          title = "Go to web"
          color = "green"
          onPress = {()=>this.props.navigation.navigate('Web')}
        />
      </View>
    );
  }
}

class WebScreen extends Component{
  render(){
    return(
      <Mywebviewtest />
    );
  }
}

const MyRoute = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailScreen,
    Web: WebScreen,
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
