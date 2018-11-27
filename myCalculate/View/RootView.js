import React, { Component } from 'react';
import { Text, View, StyleSheet,Dimensions} from 'react-native';

export default class RootView extends Component {
  
    constructor(props){
        super(props);
        this.state = {
            topText: "從美金",
            bottomText: "到台幣",
            dollar: "$100",
            NTdollar: "NT$3000",
            myscreenStyle: rootStyle,
        };
    }

    render() {
        return (
        <View style={this.state.myscreenStyle.rootView}
              onLayout={this._onlayout}>
            <View style={this.state.myscreenStyle.screenView}>
                <Text style={this.state.myscreenStyle.titleText}>{this.state.topText}</Text>
                <Text style={this.state.myscreenStyle.numText}>{this.state.dollar}</Text>
                <Text style={this.state.myscreenStyle.titleText}>{this.state.bottomText}</Text>
                <Text style={this.state.myscreenStyle.numText}>{this.state.NTdollar}</Text>
            </View>
            <View style={this.state.myscreenStyle.keyboardView}></View>
        </View>
        );
    }

    _onlayout=()=>{
        let {width,height} = Dimensions.get('window');
        if(width > height){
            this.setState({
                myscreenStyle: rootStyle2,
            });
        }
        else{
            this.setState({
                myscreenStyle: rootStyle,
            });
        }
    }
}

let rootStyle = StyleSheet.create({
    rootView:{
        flex:1
    },
    screenView:{
        flex:1,
        backgroundColor:"bisque",
    },
    keyboardView:{
        flex:2,
        backgroundColor:"slateblue",
    },
    titleText:{
        textAlign:'right',
        fontSize:20,
        marginTop:20,
        marginRight:20,
    },
    numText:{
        textAlign:'right',
        fontSize:20,
        marginRight:20,
    },
});

let rootStyle2 = StyleSheet.create({
    rootView:{
        flex:1
    },
    screenView:{
        flex:1,
        backgroundColor:"honeydew",
    },
    keyboardView:{
        flex:2,
        backgroundColor:"khaki",
    },
    titleText:{
        textAlign:'right',
        fontSize:14,
        marginTop:5,
        marginRight:20,
    },
    numText:{
        textAlign:'right',
        fontSize:14,
        marginRight:20,
    },
});
