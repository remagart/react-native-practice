import React, { Component } from 'react';
import { View, Text,Dimensions } from 'react-native';
import Swiper from "./Swiper";

export default class SubPage extends Component {
    constructor(props) {
        super(props);
        this.recordHeight = 0;
        this.isFinish = false;
        this.state = {
        };
    }
    componentDidMount(){
        this.isFinish = true;
    }

    renderCarouselArea = () => {
        return (
            <View style={{width:300,height:200,backgroundColor:"#FFF",justifyContent:"center",alignItems:"center"}}>
                <View style={{width:300,height:100}}>
                    <Swiper />
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={{flex:1,backgroundColor: 'red'}}
                onLayout={(event)=>{
                    let {width,height} = event.nativeEvent.layout;
                    console.log("YCC width",width);
                    console.log("YCC height",height);
                    this.props.getViewHeight(height)
                }}>
                <Text style={{fontSize:20}}> subPage1111 </Text>
                <Text style={{fontSize:20}}> subPage1111 </Text>
                <Text style={{fontSize:20}}> subPage1111 </Text>
                {this.renderCarouselArea()}
                <Text style={{fontSize:20}}> subPage1111 </Text>
                <Text style={{fontSize:20}}> subPage1111 </Text>
                <Text style={{fontSize:20}}> subPage1111 </Text>
                <Text style={{fontSize:20}}> subPage555 </Text>
                <Text style={{fontSize:20}}> subPage555 </Text>
                <Text style={{fontSize:20}}> subPage555 </Text>
                <Text style={{fontSize:20}}> subPage555 </Text>
                <Text style={{fontSize:20}}> subPage555 </Text>
                <Text>===</Text>
            </View>
        );
    }
}
