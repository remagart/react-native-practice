/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text,StyleSheet,SafeAreaView } from 'react-native';
import appleAuth,{
  AppleButton,
  AppleAuthRequestOperation,
  AppleAuthRequestScope,
  AppleAuthCredentialState,
} from "@invertase/react-native-apple-authentication";
import ToastComponent from "./component/ToastComponent";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  componentWillUnmount(){
    appleAuth.onCredentialRevoked(async () => {
      console.warn('If this function executes, User Credentials have been Revoked');
    });
    ToastComponent.showToast("component will unmount",ToastComponent.STATUS_TOAST.SUCCESS);
  }

  onAppleButtonPress = async () => {
    ToastComponent.showToast("click",ToastComponent.STATUS_TOAST.DEFAULT);
    // performs login request
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: AppleAuthRequestOperation.LOGIN,
      requestedScopes: [AppleAuthRequestScope.EMAIL, AppleAuthRequestScope.FULL_NAME],
    });

    // get current authentication state for user
    const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);

    console.log("AppleAuthCredentialState",AppleAuthCredentialState);
    console.log("appleAuthRequestResponse",appleAuthRequestResponse);

    // use credentialState response to ensure the user is authenticated
    if (credentialState === AppleAuthCredentialState.AUTHORIZED) {
      // user is authenticated
      console.log("credentialState",credentialState);
    }
    else{
      console.log("credentialState err",credentialState);
    }
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

