/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ListView} from 'react-native';


type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged : (r1,r2) => r1!==r2
    });

    this.state = {
      dataSource: ds.cloneWithRows(['row1',
                                    'row2',
                                    'row3',
                                    'row1',
                                    'row2',
                                    'row3',
                                    'row1',
                                    'row2',
                                    'row3',
                                    'row1',
                                    'row2',
                                    'row3',
                                    'row1',
                                    'row2',
                                    'row3']),
    }

    // this.dataSource = new ListView.DataSource({
    //   rowHasChanged:(r1,r2) => r1!==r2,
    //   sectionHeaderHasChanged:(s1,s2)=>s1!==s2,
    //   getRowData:(data,sID,rID)=>{
    //       console.log(data,sID,rID);
    //       return data[sID][rID];
    //   },
    //   getSectionHeaderData:(data,sID)=>{
    //     return "我的分區"+sID;
    //   },
    // });
    // this.dataSource = this.dataSource.cloneWithRows([
    //   "資料A","資料B",
    //   "資料C","資料D",
    //   "資料E","資料F",
    // ]);
  }

    render(){
      return(
        <ListView 
          dataSource={this.state.dataSource}
          renderRow={(rowdata)=> <Text style = {styles.myrow}>{rowdata}</Text>}
        />
      );
    };

  // render() {
  //   return (
  //     <ListView 
  //       dataSource={this.dataSource}
  //       renderRow={(rowData)=>{
  //         return (
  //         <Text
  //           style = {styles.myrow}
  //         >{rowData}</Text>
  //         );
  //       }}
  //       renderSectionHeader={(headerData,sID)=>{
  //         return(
  //           <Text
  //             style = {styles.mysec}
  //             onPress = {()=>{
  //               let rows = this.dataSource.getRowCount();
  //               let secs = this.dataSource.getRowAndSectionCount();
  //               console.log(rows,secs);
  //               }
  //             }
  //           >{headerData}</Text>
  //         );
  //       }}
  //     />
  //   ) 
  // };
}

const styles = StyleSheet.create({
  myrow:{
    lineHeight:50,
    marginTop:10,
    backgroundColor:"gray",
    textAlign: "center",
  },
  mysec:{
    lineHeight:30,
    // marginTop:30,
    backgroundColor:"green",
    textAlign:"center",
  },
});
