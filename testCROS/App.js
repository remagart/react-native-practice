import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Linking,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get("screen").width;

const NO_CORS_PIC = 'https://d20o1j16tcpds8.cloudfront.net/img/img-logo-tibame.png';
const CORS_PIC = 'https://cdn-dev.tibame.net/app-test-cors/img/img-logo-tibame.png';

const NO_CORS_VIDEO = 'https://d20o1j16tcpds8.cloudfront.net/video/tibame_intro.mp4';
const CORS_VIDEO = 'https://cdn-dev.tibame.net/app-test-cors/app-test-cors/video/tibame_intro.mp4';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NoCORS_width: 0,
      NoCORS_height: 0,
      CORS_width: 0,
      CORS_height: 0,
    };
  }

  componentDidMount() {
    console.log('did mount');

    this.getImageSize();
  }

  getImageSize = () => {
    Image.getSize(NO_CORS_PIC, (w, h) => {
      this.setState({ NoCORS_width: w, NoCORS_height: h });
    });

    Image.getSize(
      CORS_PIC,
      (w, h) => {
        this.setState({ CORS_width: w, CORS_height: h });
      },(err)=>{
        console.log("err:",err);
      });
  }

  renderBtn = () => {
    return(
      <TouchableOpacity onPress={()=>{this.getImageSize()}}>
        <View style={styles.btn}>
          <Text>Click to get image size</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.block}>
            <Text>NoCORS pic: {NO_CORS_PIC}</Text>
            <View style={{ height: 8 }} />
            <Text>width is {this.state.NoCORS_width}</Text>
            <Text>height is {this.state.NoCORS_height}</Text>
          </View>

          <View style={[styles.block,{backgroundColor: "#AADDEE"}]}>
            <Text>CORS pic: {CORS_PIC}</Text>
            <View style={{ height: 8 }} />
            <Text>width is {this.state.CORS_width}</Text>
            <Text>height is {this.state.CORS_height}</Text>
          </View>

          {this.renderBtn()}

          <View style={styles.block}>
            <TouchableOpacity onPress={()=>{
              Linking.openURL(NO_CORS_VIDEO);
            }}>
              <View>
                <Text>NO_CORS_VIDEO</Text>
                <View style={{alignItems: "center"}}>
                  <Text>click here to play</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={[styles.block,{backgroundColor: "#AADDEE"}]}>
            <TouchableOpacity onPress={()=>{
              Linking.openURL(CORS_VIDEO);
            }}>
              <View>
                <Text>CORS_VIDEO</Text>
                <View style={{alignItems: "center"}}>
                  <Text>click here to play</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEDDFF',
    padding: 16,
    alignItems: 'center',
  },
  block: {
    width: SCREEN_WIDTH - 32,
    marginVertical: 8,
    backgroundColor: '#EEDDAA',
    padding: 8,
  },
  btn:{
    width: SCREEN_WIDTH - 32,
    height: 25,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "transparent",
    borderRadius: 13,
    borderWidth: 1,
    marginBottom: 30,
  }
});
