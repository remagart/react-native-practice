/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableHighlight,Dimensions} from 'react-native';
import styled from "styled-components/native";
import {BoxShadow,BorderShadow} from 'react-native-shadow';
import Svg,{ Rect,Defs,LinearGradient,Stop,RadialGradient,Path } from 'react-native-svg'

const SCREENWIDTH = Dimensions.get("screen").width;

const StyledView = styled.View`
  flex:1;
  align-items:center;
  justify-content:center;
  background-color: #FFF;
`;

const StyledText = styled.Text`
  color: #AAFFDD;
  font-size: 30px;
  font-weight: bold;
`;

const StyledBlockView = styled.View`
  border-style: solid;
  border-width: 5px;
  border-color: #AAFFDD;
  height: 200px;
  width: 50%;
  &::before {
    content: '';
    margin: 0 10px;
  }
`;

const shadowOpt = {
  width:SCREENWIDTH,
  // height:100,
  color:"#000",
  border:6,
  // radius:2,
  opacity:0.3,
  // x:0,
  // y:3,
  // style:{marginVertical:5}
  side: "bottom",
  inset: false
}

const linear = (key) => {
  return [
    <Stop offset="0" stopColor={"#000"} stopOpacity={0.3} key={key+'Linear0'} />,
    <Stop offset="1" stopColor={"#000"} stopOpacity="0" key={key+'Linear1'} />
  ]
}


export default class App extends Component {
  constructor(props){
    super(props);

  }

  renderSVG = (border) => {
    return(
      <Svg height={border} width={SCREENWIDTH+border} style={{position:"absolute"}}>
        <Defs>
          <LinearGradient id="bottom" x1="0%" x2="0%" y1="0%" y2="100%">{linear('BorderBottom')}</LinearGradient>
          <LinearGradient id="bottom-inset" x1="0%" x2="0%" y1="100%" y2="0%">{linear('BorderBottomInset')}</LinearGradient>
        </Defs>
        <Rect x={0} y={0} width={SCREENWIDTH} height={border} fill={`url(#bottom)`} />
      </Svg>
    );
  } 

  render(){
    return (
      <StyledView>
        <StyledText>abc</StyledText>
        {/* <StyledBlockView>

        </StyledBlockView> */}
        
        {/* <BorderShadow setting={shadowOpt}> */}
          <View style={{
            // position:"relative",
            width: SCREENWIDTH,
            height: 100,
            backgroundColor: "#DDFFDD",
            borderRadius:3,
            // marginVertical:5,
            // overflow:"hidden"
            }}>
          </View>
          <View style={{width:SCREENWIDTH,height:5,zIndex: 1000}}>
            {this.renderSVG(5)}
          </View>
          <View style={{height:20}} />
          
          <View style={{width: 100,height:100,backgroundColor:"#DDFFAA"}}>

          </View>
        {/* </BorderShadow> */}
      </StyledView>
    )
  }
}
