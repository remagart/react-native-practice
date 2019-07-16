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
import Product from "./redux/container/product"
import store from "./redux/store/index"
import Route from "./route"

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Text>Welcome to React Native!</Text>
        <Provider store={store}>
          <Route />
        </Provider>
      </View>
    );
  }
}

