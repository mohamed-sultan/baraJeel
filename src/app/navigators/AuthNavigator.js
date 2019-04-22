import { createStackNavigator } from "react-navigation";

import SelectLnguaeScreen from "../pages/ChooseLanguage";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";

export default (AuthNavigator = createStackNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOption: {
        title: "SignIn"
      }
    },
    Register: {
      screen: Register,
      navigationOption: {
        title: "Register",
        header: null
      }
    },
    SelectLnguaeScreen: {
      screen: SelectLnguaeScreen,
      navigationOption: {
        title: "SelectLnguaeScreen",
        header: null
      }
    }
  },
  {
    navigationOptions: {
      header: null
    }
  }
));
