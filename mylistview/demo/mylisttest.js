import React, { Component } from 'react'
import { Text, View,ListView,Image,StyleSheet } from 'react-native'

export default class mylisttest extends Component {
    constructor(props){
        super(props);
        console.log("zzzz");
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1,r2) => r1 !== r2
            }),
        }
    }
    componentDidMount(){
        
        console.log("hiddddd");
        this.myfetchData();
    }

    myfetchData(){
        //fetch().then().then().done();
        //fetch("https://api.douban.com/v2/movie/in_theaters")
        console.log("hihihi");
        fetch("https://cloud.culture.tw/frontsite/trans/emapOpenDataAction.do?method=exportEmapJson&typeId=F")
        .then((response)=>{
            //不能call json兩次
            //console.log(response.json());
             return response.json();
        })
        .then((responsedata)=>{
            //console.log(==分隔線==);
            console.log(responsedata);
            this.setState({
                //dataSource: this.state.dataSource.cloneWithRows(responsedata.subjects),
                dataSource: this.state.dataSource.cloneWithRows(responsedata),
            });
        })
        .catch((err)=>{console.log("aaaa");});
    }

    render() {
        return (
        <View>
            <ListView
                dataSource = {this.state.dataSource}
                renderRow = {this.myrenderrow}
            />
        </View>
        )
    }

    myrenderrow(rowData,sectionID,rowID){
        return(
            <View>
                <Image style = {styles.myimgstyle}
                    source={{uri: rowData.representImage}}
                />
                <View>
                    {/* <Text>{rowData.title}</Text>
                    <Text>年份: {rowData.year}</Text>
                    <Text>評分: {rowData.rating.max}</Text> */}
                    <Text>{rowData.name}</Text>
                    <Text>地址: {rowData.address}</Text>
                    <Text>Size: {rowData.size}</Text>
                    <Text>描述: {rowData.intro}</Text>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    myimgstyle:{
        width: 100,
        height: 100,
    },
});
