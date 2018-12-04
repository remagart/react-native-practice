import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import RootView from '../myView/rootView';
import Page1 from '../myView/page1';
import Page2 from '../myView/page2';
import Page3 from '../myView/Page3';

const myRoute = createStackNavigator(
  {
    HOMEPAGE: RootView,
    PAGE1: Page1,
    PAGE2: Page2,
    PAGE3: Page3,
  },{
    initialRouteName: 'HOMEPAGE',
  },
);

export default Myappcontainer = createAppContainer(myRoute);
