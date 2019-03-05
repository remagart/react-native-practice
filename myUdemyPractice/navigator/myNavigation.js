import {createAppContainer,createNavigator} from "react-navigation";
import MySectionList from "./../src/mySectionList";
import App from "./../App";
const myRoute = createNavigator(
    {
        MYSECTIONLIST: MySectionList,
    },{
        initialRouteName: "HOME",
    },
);

export default Myappcontainer = createAppContainer(myRoute);