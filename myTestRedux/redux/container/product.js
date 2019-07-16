import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import TestComponent2 from "../../testComponent2"

import {connect} from "react-redux"
import {fetchProductList} from "../action/"



const mapStateToProps = state => {
  return {
    counter: state.mycounter.counter,
    productLists: state.product.lists
  };
}



export default (ProductContainer = connect(
    mapStateToProps,
    {fetchProductList}
)(TestComponent2));
