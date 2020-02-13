/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,Dimensions,Image} from 'react-native';
import AutoHeightImage from "react-native-auto-height-image";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const SCREENWIDTH = Dimensions.get("screen").width;

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props);
    this.state={
      imgWidth: 300,
      imgSrc: "",
    }
  }

  async componentDidMount(){
    let url3 = "https://cdn-dev.tibame.net/course/1535/quiz/28fee51b-3287-46d3-af90-b9efd046522a_螢幕快照2019-12-12上午11.51.48.png";
    let response = await fetch(url3,{
      method: "GET",
      headers: { referer: 'https://tibame.net' + 'https://tibame.com'}
    })
    console.log("UCCC",response);

    let responseJSON = await response.headers;
    console.log("UCeeeCC",responseJSON);
  }

  render() {
    let url = "https://cdn-dev.tibame.net/course/1535/quiz/34201848-56a4-4643-92c9-0525fc28bb6f_螢幕快照2019-12-10下午2.47.34.png";
    let url2 = "https://cdn-dev.tibame.net/course/1535/quiz/85afe4fb-946d-43a5-af54-6cea5c69c549_螢幕快照2019-12-10下午5.18.58.png";
    let url3 = "https://cdn-dev.tibame.net/course/1535/quiz/28fee51b-3287-46d3-af90-b9efd046522a_螢幕快照2019-12-12上午11.51.48.png";
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
          <AutoHeightImage
            width={SCREENWIDTH*0.6}
            source={{uri: url,headers: { referer: 'https://tibame.net' + 'https://tibame.com'}}}
            style={{width:"100%",height:"100%",resizeMode:"contain"}}
          />

          <Image
            source={{uri: url3,headers: { referer: 'https://tibame.net' + 'https://tibame.com'}}}
            style={{width:200,height:200}}
          />

          {/* <View style={{flex:1}}
                onLayout={(e)=>{
                    this.setState({
                      imgWidth: e.nativeEvent.layout.width
                    })
                }}
          >
            <AutoHeightImage
              width={SCREENWIDTH*0.6}
              source={{uri: url2,headers: { referer: 'https://tibame.net' + 'https://tibame.com'}}}
              // fallbackSource={image}
            />
          </View> */}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
