import React, { Component } from 'react'
import { Text, View,ListView,Image,StyleSheet,SafeAreaView,Dimensions } from 'react-native'

const my_screen_width = Dimensions.get('window').width;
const my_screen_height = Dimensions.get('window').height;
const my_screen2_width = Dimensions.get('screen').width;
const my_screen2_height = Dimensions.get('screen').height;

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
        console.log(my_screen_width);
        console.log(my_screen_height);
        console.log(my_screen2_width);
        console.log(my_screen2_height);
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
            <View style={styles.container}>
                <View style={styles.myrow}>
                    <Image style = {styles.myimgstyle}
                        source={{uri: rowData.representImage}}
                    />
                    <View style={styles.mytextview}>
                        {/* <Text>{rowData.title}</Text>
                        <Text>年份: {rowData.year}</Text>
                        <Text>評分: {rowData.rating.max}</Text> */}
                        <Text>{rowData.name}</Text>
                        <Text numberOfLines={10}>地址: {rowData.address}</Text>
                        <Text>Size: {rowData.size}</Text>
                    </View>
                </View>
                <Text>描述: {rowData.intro}</Text>
                {/* return中最外面要有View包著 */}
                <View style={styles.myseperate}/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:3,
        backgroundColor:'#ead083',
    },
    myimgstyle:{
        width: 100,
        height: 100,
        margin: 3,
    },
    myrow:{
        flexDirection: 'row',
        padding: 10,
        margin: 10,
    },
    myseperate:{
        height:5,
        backgroundColor:'#EEEEEE',
    },
    mytextview:{
        width: my_screen_width-150,
    },

});
