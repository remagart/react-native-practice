import {createStackNavigator,createAppContainer} from 'react-navigation';
import {fromTop} from 'react-navigation-transitions';
import Myfetch from './myfetch';
import Mypromise from './mypromise';
import Mysync_await from './mysync_await';
import Myhome from './myhome';

const myRoute = createStackNavigator(
    {
        HOME: Myhome,
        MYFETCH : Myfetch,
        MYPROMISE: Mypromise,
        MYSYNC_AWAIT: Mysync_await,
    },
    {
        initialRouteName: 'HOME',
        transitionConfig: ()=>{ return fromTop()},
    },
);


export default myappcontainer = createAppContainer(myRoute);
