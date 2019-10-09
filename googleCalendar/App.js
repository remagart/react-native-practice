import React, { Component } from 'react';
import { View, Text,Button,Alert } from 'react-native';
import {WebView} from "react-native-webview";

const AUTH_URL = "https://accounts.google.com/o/oauth2/auth";
const TOKEN_URL = "https://accounts.google.com/o/oauth2/token";
const EMAIL_URL = "https://www.googleapis.com/oauth2/v1/userinfo";

const CALENDAR_PREFIX = "https://www.googleapis.com/calendar/v3/calendars/";
const EVENT_URL = "/events";

const GOOGLE_API_KEY = "AIzaSyC83Y4TZD5CgGVm317h2Hil1CX1zcxuxVM";
// const CLIENT_ID = "165389556201-iit5jt4nouu80sm2qd177eeqptgenfpm.apps.googleusercontent.com";
const CLIENT_ID = "165389556201-pscsukd9k1noaap8s7u9vb3vkh1834ar.apps.googleusercontent.com";
const SCOPE = "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/userinfo.email";
const REDIRECT_URL = "http://localhost:8081";

const TEST_DATA = {
    "start": {
        "dateTime": "2019-09-11T12:00:00",
        "timeZone": "Asia/Taipei"
    },
    "end": {
        "dateTime": "2019-09-11T14:00:00",
        "timeZone": "Asia/Taipei"
    },
    "summary": "這是標題",
    "description": "學習計畫上線囉～",
    "location": "TibaMe",
    "status": "confirmed",
    "kind": "calendar#event",
    "reminders": {
        "useDefault": true
    },
    "recurrence": [
        "RRULE:FREQ=WEEKLY;UNTIL=20191003;BYDAY=SU,MO,TH,FR"
    ]
}

export default class App extends Component {
    constructor(props) {
        super(props);
        this.auth_url = "";
        this.access_token = "";
        this.GMAIL = "";

        this.state = {
            isShowAuth: false,
            code: "",
        };
    }

    componentDidMount(){
        this.auth_url = `${AUTH_URL}?scope=${SCOPE}&client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URL}`;
    }

    getAccessToken = async () => {
        try{
            let response = await fetch(TOKEN_URL,{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    grant_type: "authorization_code",
                    code: this.state.code,
                    client_id: CLIENT_ID,
                    redirect_uri: REDIRECT_URL,
                })
            });
            
            if(response.status == 200){
                let responseJSON = await response.json();
                console.log("responseJSON",responseJSON);
                this.access_token = responseJSON.access_token;
            }

        }catch(err){console.log(err);}
    }

    getGoogleMail = async () => {
        let url = `${EMAIL_URL}?access_token=${this.access_token}`
        try{
            let response = await fetch(url,{
                method: "GET",
            });

            if(response.status == 200){
                let responseJSON = await response.json();
                console.log("responseJSON",responseJSON);
                this.GMAIL = responseJSON.email;
            }
            
        }catch(err){console.log(err)}
    }

    getEvent = async () => {
        let url = `${CALENDAR_PREFIX}${this.GMAIL}${EVENT_URL}?access_token=${this.access_token}`;
        try{
            let response = await fetch(url,{
                method: "GET",
            });
            let responseJSON = await response.json();
            console.log("responseJSON",responseJSON);
        }catch(err){console.log(err);}
        
        
    }

    onClickedBtn = () => {
        this.setState({isShowAuth: true});
    }

    _onNavigationStateChange = (webViewState) => {
        console.log("YCC webViewState",webViewState);
        if (webViewState.url.includes('?code=')) {
            let code = webViewState.url.substring(webViewState.url.indexOf('=')+1, webViewState.url.indexOf('&scope=')); // TODO: better way to parse substring ?
            let translatedCode = code.replace('%2F', '/');
            console.log("webViewState",webViewState);
            console.log("translatedCode",translatedCode);
            this.setState({
                code: translatedCode,
                isShowAuth: false,
            },async ()=>{
                // await this.getAccessToken();
                // await this.getGoogleMail();
                // await this.getEvent();
            });
        }
    }

    onClickedAddBtn = async () => {
        let url = `${CALENDAR_PREFIX}${this.GMAIL}${EVENT_URL}?access_token=${this.access_token}`;
        try{
            let response = await fetch(url,{
                method: "POST",
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(TEST_DATA),
            });
            let responseJSON = await response.json();
            console.log("responseJSON",responseJSON);
            Alert.alert("success!!");
        }catch(err){console.log(err)}
    }

    render() {
        console.log("sss",this.auth_url);
        return (
            <View style={{flex:1}}>
                <Text> App test calendar </Text>
                <Button
                    title={"授權calendar"}
                    onPress = {()=>{this.onClickedBtn()}}
                />
                <View style={{height:10}}></View>
                <Button 
                    title={"新增事件"}
                    onPress = {()=>{this.onClickedAddBtn()}}
                />
                {(this.state.isShowAuth)?
                    <WebView
                        source={{uri: this.auth_url}}
                        // source={{uri: "https://www.google.com"}}
                        javaScriptEnabled = {true}
                        domStorageEnabled = {true}
                        startInLoadingState = {true}
                        onNavigationStateChange = {this._onNavigationStateChange}
                        // Fix 403 error: disallowed_useragent start (https://github.com/Microsoft/BotBuilder/issues/3659#issue-267964957)
                        userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:61.0) Gecko/20100101 Firefox/61.0"
                        // Fix 403 error: disallowed_useragent end
                    />
                    :
                    null
                }
                
            </View>
        );
    }
}
