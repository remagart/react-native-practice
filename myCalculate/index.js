/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React,{Component} from 'react';
import RootViewController from './ViewController/RootViewController';

export default class MyCalculate extends Component{
    constructor(props){
        super(props);
        this.rootController = new RootViewController();
    }
    render(){
        return this.rootController.view();
    }
}

AppRegistry.registerComponent(appName, () => MyCalculate);
