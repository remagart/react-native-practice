import React, { Component } from 'react';
import { Text, View,StyleSheet,TouchableHighlight } from 'react-native';
import MyPopOver from 'react-native-popover-view';

export default class Page4 extends Component {

  constructor(props){
      super(props);
      this.state = {
        isShow: false,
      }
  }

  onHandlepopopen = () =>{
    this.setState({
      isShow: true,
    });
  }

  onHandlepopclose = () =>{
    this.setState({
      isShow: false,
    });
  }

  render() {
    return (
      <View style = {mystyle.container}>
        <View style = {mystyle.myheader}>
          <TouchableHighlight 
            ref = {(ref)=>{
                this.mytouchable = ref;
            }}
            //ref = {ref => this.mytouchable = ref}
            onPress = {this.onHandlepopopen}
          >
            <Text>hihihi</Text>
          </TouchableHighlight>
          <MyPopOver
             isVisible = {this.state.isShow}
             onClose = {this.onHandlepopclose}
             fromView = {this.mytouchable}
             placement = "bottom"
             showBackground = {false}
             popoverStyle = {mystyle.mypopstyle}
             arrowStyle = {mystyle.myarror}
          >
            <Text>hello MyPopOver</Text>
          </MyPopOver>
        </View>
        <View style = {mystyle.mybody}>

        </View>
      </View>
    )
  }
}

const mystyle = StyleSheet.create({
  container:{
    flex:1,
  },
  myheader:{
    flex: 0.3,
    backgroundColor: "#FFE194",
    alignItems:'center',
    justifyContent:'center',
  },
  mybody:{
    flex: 0.7,
    backgroundColor: "#99E0FF",
    alignItems:'center',
    justifyContent:'center',
  },
  mypopstyle:{
    backgroundColor: "#6B7BDC",
    borderRadius: 60,
    width: 150,
    height: 80,
    paddingLeft: 30,
    margin: 10,
  },
  myarror:{
    width: 10,
    height: 10,
  }

});
