import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import WebView from "react-native-webview";
import {CheckStorage} from "./CheckPermission";

const App = () => {
  useEffect(() => {
    CheckStorage();
  
  }, []);

  return(
    <View style={{flex: 1}}>
      <WebView 
        source={{uri: "https://www.google.com"}}
      />
    </View>
  )
}

export default App;
