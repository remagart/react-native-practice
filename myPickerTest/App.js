import React, { Component } from 'react';
import { View, Text,StyleSheet,Picker,DatePickerIOS,Platform,DatePickerAndroid,TimePickerAndroid,Button,Modal } from 'react-native';
import DatePicker from 'react-native-datepicker'
import DatePickerHelper from "./DatePickerHelper";


export default class App extends Component {
 
  constructor(props){
    super(props)
    this.state = {
      date:"2016-05-15",
    chosenDate: new Date(),
    modalVisible: false,
  }
  }

  setDate = (newDate) => {
    this.setState({
      chosenDate: newDate,
      isPress: false,
    });
  }

  

  timepicker = async () => {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        // Use `new Date()` for current date.
        // May 25 2020. Month 0 is January.
        date: new Date(2020, 4, 25),
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        // Selected year, month (0-11), day
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  }

  myandroid = () => {
    return(
      <View>
        <Button
          title = {"按我"}
          onPress = {()=>{
              this.timepicker();
          }}
        />
      </View>
    );
  }

  myIOS = () => {
    return(
      <View>
        <DatePickerIOS
          date={this.state.chosenDate}
          onDateChange={this.setDate}
          locale={"zh-tw"}
        />
      </View>
    );
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


        <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
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


{/* <DatePickerHelper createRef={ref=>{this.DatePickerHelperRef = ref}}/> */}