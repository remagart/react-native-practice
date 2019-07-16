import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import TestComponent from "../../testComponent"

import {connect} from "react-redux"
import {increaseCounter,decreaseCounter} from "../action/"



const mapStateToProps = state => {
  return {
    counter: state.mycounter.counter,
    counter1: state.mycounter.counter1
  };
}



export default (CounterContainer = connect(
    mapStateToProps,
    {increaseCounter,decreaseCounter}
)(TestComponent));
