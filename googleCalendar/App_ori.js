import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'
import {WebView} from "react-native-webview";

const GOOGLE_API_KEY = "AIzaSyC83Y4TZD5CgGVm317h2Hil1CX1zcxuxVM";
const CLIENT_ID = "165389556201-iit5jt4nouu80sm2qd177eeqptgenfpm.apps.googleusercontent.com";
// const CLIENT_ID = "165389556201-5lnuqo00gf8jhcf19l40j2ggg4ssbpn9.apps.googleusercontent.com";
const CALENDAR_ID = "jfmamjjasond418@gmail.com"

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      code: "",
    }
  }

  componentDidMount(){
    
  }

  getEvents = async (translatedCode) => {
    let url = "https://www.googleapis.com/calendar/v3/calendars/";
    let param = CALENDAR_ID;
    let key = GOOGLE_API_KEY;
    let response = await fetch(`${url}${param}/events`,{
      method: "GET",
      headers:{
        apiKey: key,
        // clientId: CALENDAR_ID
        access_token: translatedCode,
      }
    });
    let responseJSON = await response.json();

    console.log("YCC responseJSON",responseJSON);
  }
  

  handleItemClick = () => {
    this.getEvents(this.state.code);
    console.log("hihih");
  }

  _onNavigationStateChange = (webViewState) => {
    if (webViewState.url.includes('?code=')) {
      console.log("YCCCCC here",webViewState);

      let code = webViewState.url.substring(webViewState.url.indexOf('=')+1, webViewState.url.indexOf('&scope=')); // TODO: better way to parse substring ?
      let translatedCode = code.replace('%2F', '/');
      console.log("translatedCode",translatedCode);
      this.setState({
        code: translatedCode,
      });
    }
    


  }

  render() {
    let url = `https://accounts.google.com/o/oauth2/auth`;
    let scope = "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/userinfo.email";
    let client_id = CLIENT_ID;
    // let redirect_uri = "https://dev.tibame.net/signup/google/";
    // let redirect_uri = "http://localhost:8081";
    let redirect_uri = "http://localhost:8081";
    // let response_type = "code&prompt=select_account+consent";
    let response_type = "code";

    url = `${url}?scope=${scope}&client_id=${client_id}&response_type=${response_type}&redirect_uri=${redirect_uri}`;
    
    return (
      <View style = {{flex:1,}}>
        <Text> textInComponent </Text>
        <Button
            title = {"測試calendar"}
            onPress = {(e)=>{
                this.handleItemClick(e);
            }}
        />
        <WebView
          source={{uri: url}}
          javaScriptEnabled = {true}
          domStorageEnabled = {true}
          startInLoadingState = {true}
          onNavigationStateChange = {this._onNavigationStateChange}
          // Fix 403 error: disallowed_useragent start (https://github.com/Microsoft/BotBuilder/issues/3659#issue-267964957)
          userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:61.0) Gecko/20100101 Firefox/61.0"
          // Fix 403 error: disallowed_useragent end
        />
        <Text> 123</Text>
      </View>
    )
  }
}


