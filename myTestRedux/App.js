/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import TestComponent from "./testComponent"
import {createStore} from "redux"
import {Provider,connect} from "react-redux"

const counterReducer = (state = {counter:50},action) =>{
  switch(action.type){
    case "INCREASE":
      return {counter: state.counter + 1};
    default:
      return state;
  }
};
const store = createStore(counterReducer);

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
}

const mapDispatchToProps = {
  increaseCounter(){
    return {
      type: "INCREASE"
    };
  }
}

const CounterContainer = connect(mapStateToProps,mapDispatchToProps)(TestComponent);

export default class App extends Component {
  render() {
    return (
      <View>
        <Text>Welcome to React Native!</Text>
        <Provider store={store}>
          <CounterContainer />
        </Provider>
      </View>
    );
  }
}

