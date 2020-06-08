/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect,useState } from 'react';
import { View, Text,StyleSheet,SafeAreaView,TouchableOpacity,Platform } from 'react-native';
import appleAuth,{
  AppleButton,
  AppleAuthRequestOperation,
  AppleAuthRequestScope,
  AppleAuthCredentialState,
} from "@invertase/react-native-apple-authentication";
import ToastComponent from "./component/ToastComponent";
import {WebView} from "react-native-webview";
const LOCAL_HTML = require("./component/SignInWeb.html");
import CookieManager from "react-native-cookies";

const PARMS = "client_id=net.tibame.dev&redirect_uri=https://www.tibame.com/&scope=name email&response_type=id_token code&response_mode=form_post";
const WEB_URL = `https://appleid.apple.com/auth/authorize?${PARMS}`;

export default function App(){
  const [isShow,setisShow] = useState(false);

  useEffect(() => {
    // onCredentialRevoked returns a function that will remove the event listener. useEffect will call this function when the component unmounts
    
    if(Platform.OS == "ios"){
      return appleAuth.onCredentialRevoked(async () => {
        console.warn('If this function executes, User Credentials have been Revoked');
      });
    }
  }, []); // passing in an empty array as the second argument ensures this is only ran once when component mounts initially.

  _onNavigationStateChange = (webViewState) => {
    console.log("webViewState",webViewState);
  }

  onClickedBtn = () => {
    setisShow(!isShow);
  }

  onClickedBtn2 = () => {
    CookieManager.get('https://www.tibame.com')
    .then((res) => {
      console.log('CookieManager.get =>', res); // => 'user_session=abcdefg; path=/;'
    });
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

  renderBtn2 = () => {
    return (
      <TouchableOpacity onPress={onClickedBtn}>
        <View style={styles.btn}>
          <Text>Sign in Web Apple</Text>
        </View>
      </TouchableOpacity>
    )
  }

  renderBtn3 = () => {
    return (
      <TouchableOpacity onPress={onClickedBtn2}>
        <View style={styles.btn}>
          <Text>Cookie</Text>
        </View>
      </TouchableOpacity>
    )
  }

  renderWeb = () => {

    if(isShow == false){
      return null;
    }

    return (
      <View style={{backgroundColor: "#DDFFCC",width: 300,height: 300}}>
        <WebView
          source={{uri: "https://www.tibame.com/"}}
          onNavigationStateChange={_onNavigationStateChange}
          javaScriptEnabled = {true}
          domStorageEnabled = {true}
          startInLoadingState = {true}
          useWebKit={true}
        />
      </View>
    )
  }

  return (
    <SafeAreaView style = {styles.container}>
      {Platform.OS == "ios" && renderBtn1()}
      {renderBtn2()}
      {renderBtn3()}
      {renderWeb()}
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

