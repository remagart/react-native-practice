import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Route from "./navigation/route";

import {Provider} from "react-redux";
import redux_store from "./redux/store/redux_store"

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Provider store={redux_store}>
          <Route />
        </Provider>
      </View>
    );
  }
}
