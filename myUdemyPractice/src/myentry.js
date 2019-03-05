import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'

export default class myentry extends Component {
    render() {
        return (
        <View>
            <Text> textInComponent </Text>
            <Button
                title = "SectionList"
                onPress = {()=>{
                    this.props.navigation.navigate("MYSECTIONLIST");
                }}
            />
        </View>
        )
    }
}
