import { createStackNavigator } from "react-navigation";

import HomeMainScreen from "../pages/HomeMain";
import HomeOrderScreen from "../pages/HomeOrder";
import HomeOrderNextScreen from "../pages/HomeOrderNext";

export default createStackNavigator(
  {
    HomeMainScreen: {
      screen: HomeMainScreen,
      navigationOptions: {
        header: null
      }
    },
    HomeOrderScreen: {
      screen: HomeOrderScreen,
      navigationOptions: {
        header: null
      }
    },
    HomeOrderNextScreen: {
      screen: HomeOrderNextScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    navigationOption: {
      header: null
    }
  }
);
