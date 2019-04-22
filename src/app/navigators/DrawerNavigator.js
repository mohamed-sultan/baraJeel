import React from "react";
import { createBottomTabNavigator } from "react-navigation";

import Main from "../pages/index";

export default (RootNavigator = createBottomTabNavigator({
  Home: {
    screen: Main,
    navigationOption: {
      title: "Main",
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
