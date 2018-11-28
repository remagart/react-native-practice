import React, { Component } from 'react';
import { Text, View, StyleSheet,Dimensions
    ,TouchableHighlight,Image} from 'react-native';

export default class RootView extends Component {
    isDollarToNT = true;

    myexchange = (isDollar)=>{
        if(!isDollar){
            this.setState({
                topText: "從台幣",
                bottomText: "到美金",
                TopDollar: "NT$3000",
                bottomDollar: "$100",
            });
        }
        else{
            this.setState({
                topText: "從美金",
                bottomText: "到台幣",
                TopDollar: "$100",
                bottomDollar: "NT$3000",
            });
        }
        this.isDollarToNT = isDollar;
    }

    constructor(props){
        super(props);
        this.state = {
            topText: "從美金",
            bottomText: "到台幣",
            TopDollar: "$100",
            bottomDollar: "NT$3000",
            myscreenStyle: rootStyle,
        };
    }

    render() {
        return (
        <View style={this.state.myscreenStyle.rootView}
              onLayout={this._onlayout}>
            <View style={this.state.myscreenStyle.screenView}>
                <Text style={this.state.myscreenStyle.titleText}>{this.state.topText}</Text>
                <Text style={this.state.myscreenStyle.numText}>{this.state.TopDollar}</Text>

                <View style={this.state.myscreenStyle.rowView}>
                    <TouchableHighlight
                        underlayColor = "rgb(234,86,37)"
                        onPress = {()=>{
                            // 要去RootViewController找程式
                            // 這就是邏輯分離
                            this.props.controller.change();
                        }}
                    >
                        <Image style={this.state.myscreenStyle.touchView}
                                source={require("../src/exchange.png")}/>
                    </TouchableHighlight>
                    <View style={this.state.myscreenStyle.lineView}></View>

                </View>

                <Text style={this.state.myscreenStyle.titleText}>{this.state.bottomText}</Text>
                <Text style={this.state.myscreenStyle.numText}>{this.state.bottomDollar}</Text>
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
        marginRight:20,
        marginTop:5,
    },
    numText:{
        textAlign:'right',
        fontSize:20,
        marginRight:20,
    },
    rowView:{
        flexDirection:'row',
    },
    touchView:{
        height:30,
        width:30,
        marginLeft:100,
    },
    lineView:{
        flex:1,
        height:1,
        backgroundColor:'black',
        marginTop:15,
    },
});

let rootStyle2 = StyleSheet.create({
    rootView:{
        flex:1,
    },
    screenView:{
        flex:1,
        flexDirection:'row',
        backgroundColor:"honeydew",
        paddingLeft:100,
        paddingRight:100,
    },
    keyboardView:{
        flex:2,
        backgroundColor:"khaki",
    },
    titleText:{
        textAlign:'right',
        fontSize:20,
        marginTop:30,
        marginRight:5,
    },
    numText:{
        textAlign:'right',
        fontSize:20,
        marginRight:20,
        marginTop:30,
    },
    rowView:{
        flexDirection:'row',
    },
    touchView:{
        height:50,
        width:50,
        marginTop:25,
        marginLeft:30,
        marginRight:30,
    },
    lineView:{
        // flex:1,
        // height:1,
        // backgroundColor:'black',
        // marginTop:10,
    },
});
