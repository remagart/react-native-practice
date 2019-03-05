import {createAppContainer,createStackNavigator} from "react-navigation";
import MySectionList from "./../src/mySectionList/mySectionList";
import Myentry from "./../src/myentry";

const myRoute = createStackNavigator(
    {
        MYENTRY: {
            screen: Myentry,
            navigationOptions:()=>({
                title: "目錄"
            })
        },
        MYSECTIONLIST: {
            screen: MySectionList,
            navigationOptions:()=>({
                title: "SectionList"
            })
        }
    },{
        initialRouteName: "MYENTRY",
        
    },
);

export default Myappcontainer = createAppContainer(myRoute);