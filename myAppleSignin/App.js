/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text,StyleSheet,SafeAreaView } from 'react-native';
import {AppleButton} from "@invertase/react-native-apple-authentication";
import ToastComponent from "./component/ToastComponent";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onAppleButtonPress = () => {
    ToastComponent.showToast("click",ToastComponent.STATUS_TOAST.DEFAULT);
  }

  render() {
    return (
      <SafeAreaView style = {styles.container}>
        <AppleButton
        buttonStyle={AppleButton.Style.BLACK}
        buttonType={AppleButton.Type.SIGN_IN}
        style={{
          width: 160,
          height: 45,
        }}
        onPress={() => this.onAppleButtonPress()}
      />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#FFDDCC",
    justifyContent: "center",
    alignItems: "center",

  }
})

