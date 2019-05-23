import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,Alert,ProgressBarAndroid} from 'react-native';
import CodePush from "react-native-code-push";

// prod
// const deployKey = "bgCyxUhmgoEvjdJsG1xD0M2k0tsP23366673-b448-461f-a007-5e75244bcb41";
// stage
const deployKey = "NIWhXwwQjZQaRU-FYuUixGZFcHTp23366673-b448-461f-a007-5e75244bcb41";

export default class myupgrade extends Component{

    constructor(props){
        super(props);
        this.state = {
            showProgress: false,
            inProgress: 0,
        }
    }

    componentDidMount(){
        this.checkforUpdate();
    }

    shouldComponentUpdate(nextProps,nextState){
        if(this.state.inProgress == "1.0"){
            // this.props.mycallback("zzz");
            console.log("if 1.0");
            console.log(this.state.inProgress);
        }
        console.log("else");
        console.log(this.state.inProgress);
        return true;
       
    }

    checkforUpdate = () => {
        CodePush
            .checkForUpdate(deployKey)
            .then((update)=>{
                console.log(deployKey);
                if(!update){
                    // Alert.alert("提示","已經最新版本",[
                    //     {
                    //         text: "OK",onPress:()=>{}
                    //     }
                    // ]);
                    console.log("Already up-to-date");
                }
                else{
                    this.myfunc();
                }
            });

    }

    myfunc = () => {
        console.log("updatetetete");
        CodePush.sync({
            deploymentKey: deployKey,
            // updateDialog: {
            //     appendReleaseDescription: true,
            //     descriptionPrefix:'\n\n更新内容：\n',
            //     title:'更新',
            //     mandatoryUpdateMessage:'這是更新',
            //     mandatoryContinueButtonLabel:'更新',
            // },
            mandatoryInstallMode:CodePush.InstallMode.IMMEDIATE,
        },(status)=>{
            switch(status){
                case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
                    this.setState({showProgress: true});
                    break;
                case CodePush.SyncStatus.INSTALLING_UPDATE:
                    this.setState({showProgress: true});
                    break;
                case CodePush.SyncStatus.UPDATE_INSTALLED:
                    this.setState({showProgress: false});
                    break;
                default:
            }
        },(receivedBytes_Obj)=>{
            this.setState({inProgress: (receivedBytes_Obj.receivedBytes / receivedBytes_Obj.totalBytes).toFixed(2)})
            console.log(`receivedBytes:`);
            console.log(receivedBytes_Obj.receivedBytes);
            console.log(`totalBytes: ${receivedBytes_Obj.totalBytes}`);
        });
    }
    render(){
        console.log(this.state.inProgress);
        console.log(typeof this.state.inProgress);
        let test = parseFloat((this.state.inProgress));
        return(
            <View>
                <Text>hihi</Text>
                {
                    (this.state.showProgress) ?
                    <ProgressBarAndroid
                        // styleAttr='Horizontal'
                        indeterminate = {false}
                        color= "red"
                        progress = {test}
                    />
                    : null
                }
                
            </View>
        );
    }

};