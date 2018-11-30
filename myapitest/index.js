/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import React,{Component} from 'react';
import RootController from './myController/rootController';

export default class MyApiTest extends Component{
    render(){
        return <RootController />;
    };
}

AppRegistry.registerComponent(appName, () => MyApiTest);
