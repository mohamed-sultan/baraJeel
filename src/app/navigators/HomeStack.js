import { createStackNavigator } from "react-navigation";

import HomeMainScreen from "../pages/HomeMain";
import HomeOrderScreen from "../pages/HomeOrder";
import HomeOrderNextScreen from "../pages/HomeOrderNext";
import HomeExplainScreen from "../pages/HomeExplian";

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
    },
    HomeExplainScreen: {
      screen: HomeExplainScreen,
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
