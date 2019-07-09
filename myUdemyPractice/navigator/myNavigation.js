import {createAppContainer,createStackNavigator} from "react-navigation";
import MySectionList from "./../src/mySectionList/mySectionList";
import Myentry from "./../src/myentry";
import MyRNpickerSelect from "./../src/myRNpickerSelect/myRNpickerSelect";

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
        },
        MYRNPICKERSELECT: {
            screen: MyRNpickerSelect,
            navigationOptions:()=>({
                title: "RNPickerSelect"
            })
        }
    },{
        // initialRouteName: "MYENTRY",
        initialRouteName: "MYSECTIONLIST",
    },
);

export default Myappcontainer = createAppContainer(myRoute);