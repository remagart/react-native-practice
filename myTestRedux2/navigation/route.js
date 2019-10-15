import {createBottomTabNavigator,createStackNavigator} from "react-navigation";
// import A_1_page from "../screen/A_1_page";
import B_1_page from "../screen/B_1_page";
import A_2_page from "../screen/A_2_page";
import A_1_page from "../redux/container/A_1_page/container";

const A_Navigator = createStackNavigator({
    A_1_page:{
        screen: A_1_page,
        navigationOptions: {
            header: null
        }
    },
    A_2_page:{
        screen: A_2_page,
        navigationOptions: {
            header: null
        }
    }
});

const B_Navigator = createStackNavigator({
    B_1_page:{
        screen: B_1_page,
        navigationOptions: {
            header: null
        }
    },
});

export default createBottomTabNavigator({
    Main_A: A_Navigator,
    Main_B: B_Navigator,
},{
    initialRouteName: "Main_B"
});
