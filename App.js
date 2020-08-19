import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from "./src/Components/Login/Login";
import Home from "./src/Components/Home/Home";


const navigator = createStackNavigator(
    {
        Login: Login,
        Home: Home

    },
    {
        initialRouteName: "Login",
        defaultNavigationOptions: {
            title: "myAPP"
        }
    }
);

export default createAppContainer(navigator);