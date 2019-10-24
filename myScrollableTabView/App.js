import React, { Component } from 'react'
import { Text, View,StyleSheet,ScrollView } from 'react-native';
import ScrollableTab,{ScrollableTabBar} from "react-native-scrollable-tab-view";
import SubTab from "./subTab";

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      hhh: 1000,
    }

  }

  callbackHeight = (h) => {
    this.setState({hhh: h});
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView >
          <View style={{flex:1}}>
            <ScrollableTab renderTabBar={()=><ScrollableTabBar />}>
                <SubTab tabLabel="456" callbackHeight={this.callbackHeight}/>
                <SubTab tabLabel="789" callbackHeight={this.callbackHeight}/>
                <SubTab tabLabel="1010" callbackHeight={this.callbackHeight}/>
                <SubTab tabLabel="1211" callbackHeight={this.callbackHeight}/>
            </ScrollableTab>
          </View>
          <Text>zzz</Text>
        </ScrollView>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
