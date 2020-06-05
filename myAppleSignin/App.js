/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { View, Text,StyleSheet,SafeAreaView,TouchableOpacity } from 'react-native';
import appleAuth,{
  AppleButton,
  AppleAuthRequestOperation,
  AppleAuthRequestScope,
  AppleAuthCredentialState,
} from "@invertase/react-native-apple-authentication";
import ToastComponent from "./component/ToastComponent";

export default function App(){

  useEffect(() => {
    // onCredentialRevoked returns a function that will remove the event listener. useEffect will call this function when the component unmounts
    return appleAuth.onCredentialRevoked(async () => {
      console.warn('If this function executes, User Credentials have been Revoked');
    });
  }, []); // passing in an empty array as the second argument ensures this is only ran once when component mounts initially.

  onAppleButtonPress = async () => {
    ToastComponent.showToast("click",ToastComponent.STATUS_TOAST.DEFAULT);
    // performs login request
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: AppleAuthRequestOperation.LOGIN,
      requestedScopes: [AppleAuthRequestScope.EMAIL, AppleAuthRequestScope.FULL_NAME],
    });

    // get current authentication state for user
    const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);

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

  renderBtn1 = () => {
    return (
      <AppleButton
        buttonStyle={AppleButton.Style.BLACK}
        buttonType={AppleButton.Type.SIGN_IN}
        style={styles.btn}
        onPress={onAppleButtonPress}
      />
    )
  }

  return (
    <SafeAreaView style = {styles.container}>
      {renderBtn1()}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#FFDDCC",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    width: 160,
    height: 45,
    marginTop: 24,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  }
})

