import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'
import ApiCalendar from "react-native-google-calendar-api";

export default class App extends Component {

    componentDidMount(){
        ApiCalendar.handleClientLoad();
    }

    handleClicked = () => {
        ApiCalendar.handleAuthClick();
        console.log("here");
    }

    render() {
        return (
            <View>
                <Text> textInComponent </Text>
                <Button
                    title = {"按我"}
                    onPress = {()=>{this.handleClicked()}}
                />
            </View>
        )
    }
}
