import React, { Component } from 'react'
import { Text, View,ListView,Image } from 'react-native'

export default class mylisttest extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1,r2) => r1 !== r2
            }),
        }
    }
    componentDidMount(){
        this.myfetchData();
    }

    myfetchData(){
        //fetch().then().then().done();
        fetch("https://api.douban.com/v2/movie/in_theaters")
        .then((response)=>response.json())
        .then((responsedata)=>{
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(responsedata.subjects),
            });
        })
        .done();
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
                <Image 
                    source={{uri: rowData.images.large}}
                />
                <View>
                    <Text>{rowData.title}</Text>
                    <Text>年份: {rowData.year}</Text>
                    <Text>評分: {rowData.rating.max}</Text>
                </View>
            </View>
        );
    }

}
