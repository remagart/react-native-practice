/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';


type Props = {};
export default class App extends Component<Props> {
  constructor(props){
        super(props);
        this.state = {
            name: "React"
        };
        console.log("=====Mounting=====");
        console.log("this is construct");
    }

    componentWillMount(){
        console.log("this is componentWillMount");
    }

  render() {
      console.log("this is render");
    return (
      <View>
        <Button 
          title = "press me"
          color = "red"
          onPress = {this.handleChange}
        /> 

      </View>
    )
  }

  componentDidMount(){
      console.log("this is componentDidMount");
  }

  componentWillReceiveProps(nextProps){
      console.log("=====Props Updating=====");
      console.log("this is componentWillReceiveProps");
      this.setState({
          name: "myyyyyyReact"
      });
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log("=====State and Props Updating=====");  
    console.log("this is shouldComponentUpdate");
      return true;
  }

  componentWillUpdate(nextProps,nextState){
      console.log("this is componentWillUpdate");
  }

  componentDidUpdate(preProps,preState){
    console.log("this is componentDidUpdate");
  }

  componentWillUnmount(){
    console.log("=====UnMounting=====");
    console.log("this is componentWillUnmount");
  }

  handleChange = () =>{
    this.setState(preState => ({
      name: "myReact"
    }))
  }
  
}


