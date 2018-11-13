import React, { Component } from 'react'
import { StyleSheet,Text, View } from 'react-native'

export default class mypracticeview extends Component {
  render() {
    return (
    //   <View
    //     style={{flexDirection:'row',
    //            height:30,
    //             marginTop:-200,
    //         }}>
    //     <View style={{backgroundColor:'blue',flex:0.4}}/>
    //     <View style={{backgroundColor:'red',flex:0.6}}/>
    //   </View>
    <View style={mystyle.rootView}>
        <View style = {mystyle.oneview} />
        <View style = {mystyle.twoview} />
    </View>
    );
  }

}
const mystyle = StyleSheet.create({
    rootView: {
        flexDirection:'row',
        height:30,
        marginTop:-200,
    },
    oneview:{
        backgroundColor:'orange',
        flex:0.2,
    },
    twoview:{
        backgroundColor:'yellow',
        flex:0.8,
    },
});
