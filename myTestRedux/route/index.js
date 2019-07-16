import {createBottomTabNavigator} from "react-navigation"
import Counter from "./../redux/container/counter"
import Product from "../redux/container/product"

export default createBottomTabNavigator({
    Counter,
    Product
});