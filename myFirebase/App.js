import React, { useEffect  } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import dynamicLinks from "@react-native-firebase/dynamic-links";

export default  App = () => {

  useEffect(() => {
    dynamicLinks()
      .getInitialLink()
      .then(link => {
        console.log(111,link,222);
        // if (link.url === 'https://invertase.io/offer') {
        //   // ...set initial route as offers screen
        // }
      });
  }, []);
  
  return (
    <View style={styles.container}>
      <Text> textInComponent </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
})
