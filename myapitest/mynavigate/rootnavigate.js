import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import RootView from '../myView/rootView';
import Page1 from '../myView/page1';

const myRoute = createStackNavigator(
  {
    HOMEPAGE: RootView,
    PAGE1: Page1,
  },{
    initialRouteName: 'HOMEPAGE',
  },
);

export default Myappcontainer = createAppContainer(myRoute);
