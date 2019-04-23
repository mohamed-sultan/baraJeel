import React from "react";
import { createBottomTabNavigator } from "react-navigation";

import Main from "../pages/index";
import ChooseLanguage from "../pages/ChooseLanguage";

export default (RootNavigator = createBottomTabNavigator({
  Home: {
    screen: ChooseLanguage,
    navigationOption: {
      title: "ChooseLanguage",
      header: null
    }
  },
  Main: {
    screen: Main,
    navigationOption: {
      title: "Main",
      header: null
    }
  }
}));
