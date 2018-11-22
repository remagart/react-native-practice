import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import PageA from './pageA';
import PageB from './pageB';

const myRoute = createStackNavigator(
    {
        PAGE1: PageA,
        PAGE2: PageB,
    },
    {
        initialRouteName: 'PAGE1',
    },
);

export default  Myappcontainer = createAppContainer(myRoute);


