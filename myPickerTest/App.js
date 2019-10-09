import React, { Component } from 'react';
import { View, Text,StyleSheet,Picker,DatePickerIOS,
  Platform,DatePickerAndroid,TimePickerAndroid,Button,Modal,Alert } from 'react-native';
import DatePicker from 'react-native-datepicker'
import DatePickerHelper from "./DatePickerHelper";
import ApiCalendar from "react-native-google-calendar-api";
// const Config = require("./apiGoogleconfig.json"); 


export default class App extends Component {
 
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
  componentDidMount(){
    // ApiCalendar.handleClientLoad();
    // ApiCalendar.handleClientLoad();
  }

  handleItemClick = async  (event) => {

      // let api = new ApiCalendar();
    
      await ApiCalendar.handleAuthClick(event);
      console.log("YCC here");
    
  }

  render(){
    return (
      <View style={styles.container}>
        <Button
          title="press me"
          onPress = {()=>{
            this.DatePickerHelperRef.onPressDate();
          }}
        />
        <DatePickerHelper createRef={ref=>{this.DatePickerHelperRef = ref}}/>


        <Button
            title = {"測試calendar"}
            onPress = {(e)=>{
                this.handleItemClick(e);
            }}
        />


        

      </View>
    )
  }

}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      padding: 50
    }
})

