import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import upgrade from "./src/upgrade";

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
  }

  componentDidMount(){
    upgrade.myfunc();
  }

  onClickedButton = () => {
    this.setState({
      version: this.state.version + 1,
    });
  }

  render() {
    let packages = require("./package.json");
    return (
      <View style={styles.container}>
        <Text>This is practice of CodePush</Text>
        <Text>version: {this.state.version}</Text>
        <Button title="press me" onPress= {this.onClickedButton} />
        
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
