import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
// import CustomButton from '.components/CustomButton';

export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favSport: "",
            items2: [
                {
                    label: 'Football',
                    value: 'football',
                },
                {
                    label: 'Baseball',
                    value: 'baseball',
                },
                {
                    label: 'Hockey',
                    value: 'hockey',
                },
            ],
        };
    }

    render() {
        return (
        <View style = {mystyles.container}>
            <Text> RNSELECT </Text>
            <RNPickerSelect
                items = {this.state.items2}
                onValueChange = {(value)=>{
                    this.setState({
                        favSport:value,
                    });
                }}
                //value = {this.state.favSport}
                style={{ ...pickerSelectStyles }}
            >
                {/* <CustomButton text="Select your favorite color" /> */}
            </RNPickerSelect>
        </View>
        );
    }
}

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    },
    inputAndroid: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    },
});

const mystyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
})

