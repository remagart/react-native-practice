import React, { Component } from 'react';
import { Text, View } from 'react-native';
import RootView from './../myView/rootView';

export default class rootController extends Component {
  render() {
    return (
      <RootView
          myrootController = {this}
          ref = "myrootView"
      />
    )
  }
}
