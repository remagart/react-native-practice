/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {Provider} from "react-redux"
import Counter from "./redux/container/counter"
import store from "./redux/store/index"

export default class App extends Component {
  render() {
    return (
      <View>
        <Text>Welcome to React Native!</Text>
        <Provider store={store}>
          <Counter />
        </Provider>
      </View>
    );
  }
}

