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

const counterReducer = (state = {counter:50}) =>{
  return state;
};
const store = createStore(counterReducer);

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
}

const CounterContainer = connect(mapStateToProps)(TestComponent);

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

