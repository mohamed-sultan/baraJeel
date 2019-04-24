import { createStackNavigator } from "react-navigation";

import ProfileScreen from "../pages/profile";
import ChangeLanguageScreen from "../pages/ChooseLanguage";
import GeneralInfoScreen from "../pages/generalInfoScreen";
import ChangePasswordScreen from "../pages/changePassword";

export default createStackNavigator(
  {
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: {
        header: null
      }
    },
    ChangeLanguageScreen: {
      screen: ChangeLanguageScreen,
      navigationOptions: {
        header: null
      }
    },
    GeneralInfoScreen: {
      screen: GeneralInfoScreen,
      navigationOptions: {
        header: null
      }
    },
    ChangePasswordScreen: {
      screen: ChangePasswordScreen,
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
