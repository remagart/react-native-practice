import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import Upgrade from "./src/upgrade";
import CodePush from "react-native-code-push";

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props);
    this.state = {
      version: 0,
    }
  }

  componentWillMount(){
    this.setState({
      version: 2,
    });
    // CodePush.disallowRestart();
  }

  componentDidMount(){
    CodePush.notifyAppReady();
    // let up = new Upgrade();
    // up.checkforUpdate();
  }

  componentWillUnmount(){
    // CodePush.allowRestart();
  }

  onClickedButton = () => {
    this.setState({
      version: this.state.version + 1,
    });
  }

  callback = () => {
    console.log("callback");
  }

  render() {
    let packages = require("./package.json");
    return (
      <View style={styles.container}>
        <Text>This is practice of CodePush</Text>
        <Text>version: {this.state.version}</Text>
        <Button title="Please press me!!!" onPress= {this.onClickedButton} />
        <Text>this is new one</Text>
        <Text>this is new two</Text>
        <Text>this is new three</Text>
        <Text>this is new four!!!!!!!!</Text>
        <Text>this is new seven</Text>
        <Text>this is new eight</Text>

        <Upgrade mycallback={this.callback} />

        <Text>packagename: {packages.name}</Text>
        <Text>packagejson: {packages.version}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
