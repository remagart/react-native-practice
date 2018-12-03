import React, { Component } from 'react';
import { Text, View,StyleSheet,Alert,Dimensions } from 'react-native';
import {Button,Icon,Avatar,Divider,ButtonGroup} from 'react-native-elements';
import Dialog from 'react-native-dialog';

const imgData = {
    cat1:"https://images.gamme.com.tw/news2/2017/49/24/q6CVnZ2YlKSdqw.jpg",
};

const myScreenWidth = Dimensions.get('screen').width;
const myScreenHeight = Dimensions.get('screen').height;

export default class rooView extends Component {

  constructor(props){
      super(props);
      this.state = {
          imguri1: imgData.cat1,
          mydialogVisible: false,
          mydialogVisible2: false,
          myInputtxt:"",
      };
  }
  onHandlePop = () =>{
    this.setState({
        mydialogVisible: true,
    });
  }
  onHandleCanceal = () => {
    this.setState({
        mydialogVisible: false,
    });
  }

  onHandleOK = () => {
    this.setState({
      mydialogVisible: false,
    });

    Alert.alert("you press OK.");
  }

  onHandlePopInput = () =>{
    this.setState({
      mydialogVisible2: true,
    });
  }
  onHandleInputOK = () => {
    Alert.alert(this.state.myInputtxt);
    this.setState({
        mydialogVisible2: false,
        myInputtxt: "",
    });

  }

  render() {
    return (
      <View style = {mystyle.container}>
        <Text> Hello this is rootView </Text>
        
        <View style = {mystyle.mymiddle}>
           <Avatar
              xlarge
              source={{uri:this.state.imguri1}}
              onPress = {()=>{
                 Alert.alert("我可愛嗎?");
              }}
              rounded
              title = "RR"
              activeOpacity={0.3}
          />
        </View>
       
        <Divider style={{ backgroundColor: 'blue',height:5}} />

       <View style={mystyle.myrow}>
            <Button
              title = "magicboy"
              color = "gray"
              buttonStyle = {mystyle.mybtn}
              // fontSize = {20}
              // size = {40}
              fontWeight = "bold"
              backgroundColor = "blue"
              //react-native-element預設是MaterialIcons
              // type (defaults to material, options are material-community, zocial,
              //  font-awesome, octicon, ionicon, foundation, evilicon, simple-line-icon, 
              // feather or entypo)
              // https://oblador.github.io/react-native-vector-icons/
              rightIcon = {{
                name: "aircraft-take-off",
                type: "entypo",
                size: 30
              }}
              borderRadius = {60}
              onPress = {()=>{
                  return this.props.navigation.navigate("PAGE1");
              }}
              
            />
            <Button 
              title = "loading"
              buttonStyle = {mystyle.mybtn}
              // loadingRight
              loading
              onPress = {()=>{
                Alert.alert("this is loading...");
            }}
            />
         </View>
          <View style={mystyle.myrow}>
              <Button 
                title = "dialog"
                color = "green"
                backgroundColor = "orange"
                buttonStyle = {mystyle.mybtn}
                rightIcon = {{
                  name : "md-chatboxes",
                  type : "ionicon",
                  size:30,
                }}
                onPress = {this.onHandlePop}
              />
              <Dialog.Container visible={this.state.mydialogVisible}>
                <Dialog.Title>Test dialog</Dialog.Title>
                  <Dialog.Description>
                    Test react-native-dialog 5.4.0
                  </Dialog.Description>
                  <Dialog.Button 
                      label="Cancel"
                      onPress = {this.onHandleCanceal}
                  />
                  <Dialog.Button
                      label = "確認"
                      onPress = {this.onHandleOK}
                  />
              </Dialog.Container>
              <Button
                  buttonStyle = {mystyle.mybtn}
                  title = "dialog input"
                  backgroundColor = "green"
                  borderRadius = {30}
                  icon = {{
                      name : "wechat",
                      type : "font-awesome",
                      size : 30,
                  }}
                  onPress = {this.onHandlePopInput}
              />
               <Dialog.Container visible={this.state.mydialogVisible2}>
                  <Dialog.Title>
                      輸入點東西吧...
                  </Dialog.Title>
                  <Dialog.Description>
                      請在這裡輸入點東西
                  </Dialog.Description>
                  <Dialog.Input
                      onChangeText = {(tmp)=>{
                        this.setState({
                          myInputtxt: tmp,
                        });
                      }}
                  /> 
                  <Dialog.Button
                      label = "完成"
                      onPress = {this.onHandleInputOK}
                  />
              </Dialog.Container> 



        </View>
        <View style={mystyle.myrow}></View>
        <View style={mystyle.myrow}></View>
        <View style={mystyle.myrow}></View>
      </View>
    )
  }
}

const mystyle = StyleSheet.create({
    container:{
        flex: 1,
    },
    mymiddle:{
      alignItems: 'center',
      margin: 20,
    },
    mybtn:{
      marginTop:10,
      width: (myScreenWidth/2) - 30,
    },
    myrow:{
      flex:1,
      flexDirection:'row',
      // alignItems:"center",
      
    },
});