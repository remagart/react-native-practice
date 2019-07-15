import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import TestComponent from "../../testComponent"

import {connect} from "react-redux"
import {increaseCounter} from "../action/"



const mapStateToProps = state => {
  return {
    counter: state.mycounter.counter
  };
}



export default (CounterContainer = connect(
    mapStateToProps,
    {increaseCounter}
)(TestComponent));
