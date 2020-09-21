import React, { useRef } from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';
import Pdf from "react-native-pdf";

const SCREEN_W = Dimensions.get("screen").width;
const SCREEN_H = Dimensions.get("screen").height;

const App = () => {
  const pdfRef = useRef(null);



  return (
    <View style={styles.container}>
      <Pdf 
        ref = {ref=>pdfRef.current=ref}
        source={{uri: "http://etd.lib.byu.edu/PDFCreation/WorkingwithBookmarks.pdf"}}
        style={styles.pdf}
        onLoadProgress={(aa)=>{
          console.log(`onLoadProgress  ${aa}`);
        }}
        onLoadComplete={(numberOfPages,filePath, Dimension, TableOfContent)=>{
          console.log("numberOfPages: "+ numberOfPages);
          console.log("filePath: "+ filePath);
          console.log("Width & Height: "+ JSON.stringify(Dimension));
          console.log("Table of Content: ",TableOfContent);
        }}
        onPageChanged={(page,numberOfPages)=>{
            console.log(`current page: ${page}`);
        }}
        onError={(error)=>{
            console.log(error);
        }}
        onPressLink={(uri)=>{
            console.log(`Link presse: ${uri}`)
        }}
        onPageSingleTap={(bb)=>{
            console.log(`onPageSingleTap: ${bb}`)
        }}
        onScaleChanged={(cc)=>{
            console.log(`onScaleChanged: ${cc}`)
        }}
        // enableAntialiasing={false}
        enableAnnotationRendering={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: SCREEN_W,
    height: SCREEN_H,
  }
})


export default App;
