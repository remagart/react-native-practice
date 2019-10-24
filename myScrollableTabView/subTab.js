import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class subTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
                <View style={{flex:1,backgroundColor:"red"}} onLayout={(event)=>{
                    let {x,y,width,height} = event.nativeEvent.layout;
                    this.props.callbackHeight(height);
                    console.log("gg",height);
                }}>
                    <Text>aaa</Text>
                    <Text>123123123</Text>
                    <Text>123123123</Text>
                    <Text>aaa</Text>
                    <Text>123123123</Text>
                    <Text>123123123</Text>
                    <Text>aaa</Text>
                    <Text>123123123</Text>
                    <Text>123123123</Text>
                    <Text>aaa</Text>
                    <Text>123123123</Text>
                    <Text>123123123</Text>
                    <Text>aaa</Text>
                    <Text>123123123</Text>
                    <Text>123123123</Text>
                    <Text>aaa</Text>
                    <Text>123123123</Text>
                    <Text>123123123</Text>
                    <Text>aaa</Text>
                    <Text>123123123</Text>
                    <Text>123123123</Text>
                    <Text>aaa</Text>
                    <Text>123123123</Text>
                    <Text>123123123</Text>
                    <Text>aaa</Text>
                    <Text>123123123</Text>
                    <Text>123123123</Text>
                    <Text>aaa</Text>
                    <Text>123123123</Text>
                    <Text>123123123</Text>
                    <Text>aaa</Text>
                    <Text>123123123</Text>
                    <Text>123123123</Text>
                    <Text>aaa</Text>
                    <Text>123123123</Text>
                    <Text>123123123</Text>
                    <Text>aaa</Text>
                    <Text>123123123</Text>
                    <Text>123123123xxx</Text>
                </View>
            
        );
    }
}
