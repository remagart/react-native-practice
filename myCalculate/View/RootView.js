import React, { Component } from 'react';
import { Text, View, StyleSheet,Dimensions
    ,TouchableHighlight,Image,Button} from 'react-native';
import MyNumButton from './MyNumButton';

export default class RootView extends Component {
    isDollarToNT = true;
    mybuttons;

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
        
        // 要加 this
        this.mykeyboardView();
        console.log(typeof this.mybuttons);
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
            <View style={this.state.myscreenStyle.keyboardView}>
                <View style={this.state.myscreenStyle.rowView}>
                    {this.mybuttons.slice(0,4)}
                </View>
                <View style={this.state.myscreenStyle.rowView}>
                    {this.mybuttons.slice(4,8)}
                </View>
                <View style={this.state.myscreenStyle.rowView}>
                    {this.mybuttons.slice(8,12)}
                </View>
                <View style={this.state.myscreenStyle.rowView}>
                    {this.mybuttons.slice(12,16)}
                </View>
            </View>
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

    mykeyboardView(){
        var titles = ["1","2","3","delete",
                        "4","5","6","0",
                        "7","8","9",".",
                        "C","-","+","="];
        var myarray = new Array();
        for(var i=1;i <= 16;i++){
            let element;
            
            if(i == 4){
                element = (
                <MyNumButton 
                    style = {this.state.myscreenStyle.buttonstyle}
                    title = {titles[i-1]}
                    key = {i}
                    model = "image"
                    mmycontroler = {this.props.controller}
                />);
            }
            else{
                element = (
                    <MyNumButton
                        style = {this.state.myscreenStyle.buttonstyle}
                        title = {titles[i-1]}
                        key = {i}
                        model = "mytxt"
                        mmycontroler = {this.props.controller}
                    />
                );
            }
           myarray.push(element);
        }
        // 要加 this
        this.mybuttons = myarray;
    }

    myinputNum=(temp)=>{
        
        if(this.isDollarToNT){
            var originNum = this.state.TopDollar.slice(1,100);
            this.setState({
                TopDollar:"$" + Number(originNum)+temp,
            });
        }
        else{
            var originNum = this.state.TopDollar.slice(3,100);
            this.setState({
                TopDollar:"NT$" + Number(originNum) + temp,
            });
        }
        console.log(this.state.TopDollar);
        console.log(originNum);
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
        //這個要寫，不然只會顯示1 2 3 del
        flex:1,
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
    buttonstyle:{
        flex:1,
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
        flex:1,
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
