import React, { useEffect,useState } from 'react';
import { View, Text,StyleSheet,FlatList } from 'react-native';
import {AppInstalledChecker} from "react-native-check-app-install";

const App = () => {

  const [initialised, setinitialised] = useState(false);
  const [appList, setappList] = useState([]);

  useEffect(() => {

    const aa = async () => {
      await check();
    }
    
    aa();
  }, []);

  const check = async () => {
    let appCheckResults = [],checkCounter = 0;
    
    await AppInstalledChecker.getAppList().forEach((d,idx)=>{
      checkCounter++;
      AppInstalledChecker.isAppInstalled(d).then((isInstalled)=>{
        checkCounter--;
        appCheckResults.push({name: d, isInstalled: isInstalled, idx: idx});
        setinitialised(true);
        setappList(appCheckResults)
      })
    })

  }

  const renderItem = (item) => {
    console.log("xxx",item);
    return (
      <View style={styles.singleView}>
        <Text>{item.name}</Text>
        <Text>{(item.isInstalled)? '✔️': ""}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {(initialised)?
        <View style={styles.container}>
          <Text>123</Text>
          <FlatList 
            keyExtractor={(i,idx)=>String(idx)}
            data={appList}
            renderItem={({item})=>{
              return renderItem(item);
            }}
          />
        </View>
        :null}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  singleView: {
    width: "100%",
    height: 50,
    alignItems : "center",
    justifyContent: "space-between",
    paddingHorizontal: 32,
    backgroundColor: "#FFDDCC",
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    flexDirection: "row",
  }
})

export default App;