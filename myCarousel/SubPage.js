import React, { Component } from 'react';
import { View, Text,Dimensions } from 'react-native';
import Swiper from "./Swiper";

const {width} = Dimensions.get("window")

export default class SubPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderCarouselArea = () => {
        return (
            <View style={{width:width,height:200,backgroundColor:"#FFF",justifyContent:"center",alignItems:"center"}}>
                <View style={{width:300,height:100}}>
                    <Swiper />
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={{flex:1,backgroundColor: '#71D7FF'}}>
                <Text style={{fontSize:20}}> subPage1111 </Text>
                <Text style={{fontSize:20}}> subPage1111 </Text>
                <Text style={{fontSize:20}}> subPage1111 </Text>
                {this.renderCarouselArea()}
                <Text style={{fontSize:20}}> subPage1111 </Text>
                <Text style={{fontSize:20}}> subPage1111 </Text>
                <Text style={{fontSize:20}}> subPage1111 </Text>
                
            </View>
        );
    }
}
