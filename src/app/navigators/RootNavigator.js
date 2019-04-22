// root with two pages
// first page is register page
// second page is Drawer Navigator

import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";
import { connect } from "react-redux";

import AuthNav from "./AuthNavigator";
import HomeNav from "./DrawerNavigator";
import CheckAuth from "./checkAuth";

export const RootNavigator = createSwitchNavigator(
  {
    CheckAuth,
    AuthNav: {
      screen: AuthNav,
      navigationOption: {
        title: "Auth",
        header: null
      }
    },
    HomeNav: {
      screen: HomeNav,
      navigationOption: {
        title: "Home"
      }
    }
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

export const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);

export const RootNav = reduxifyNavigator(RootNavigator, "root");

const mapStateToProps = state => ({
  state: state.nav
});

const RootNavWithRedux = connect(mapStateToProps)(RootNav);

export default RootNavWithRedux;
