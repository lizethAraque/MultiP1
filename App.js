import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from "./src/Components/Login/Login";


const navigator = createStackNavigator(
    {
     Login: Login

    },
    {
      initialRouteName: "Login",
      defaultNavigationOptions: {
        title: "Lizeth_App"
      }
    }
);

export default createAppContainer(navigator);