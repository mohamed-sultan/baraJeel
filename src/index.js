import React, { Component } from "react";
import { StatusBar } from "react-native";

import localization from "./app/localization/localization";

import RootNavigator, { middleware } from "./app/navigators/RootNavigator";
import { connect } from "react-redux";
import { LogOutAction } from "./app/actions";

import NetInfo from "./app/components/netinfo";
import SplashScreen from "react-native-splash-screen";

import ToastContainer from "./app/components/ToastContainer";

import store from "./app/store";
import { Colors } from "./app/styles";

export const DoToast = ms => store.dispatch({ type: "dotoast", ms });

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false
    };
  }

  componentWillReceiveProps(nxt) {
    this.navigator.store.dispatch({
      type: "Navigation/NAVIGATE",
      routeName: "AuthNav",
      params: null
    });
    this.props.LogOutAction(false);
  }
  componentWillMount() {
    this.handle_localization();
  }
  handle_localization = () => {
    let lan = store.getState().rtl.rtl;
    lan ? localization.setLanguage("ar") : localization.setLanguage("en");

    this.setState({ ready: true });
  };
  render() {
    if (!this.state.ready) return null;
    return (
      <React.Fragment>
        <StatusBar backgroundColor={Colors.mainDark} barStyle="light-content" />
        <RootNavigator ref={comp => (this.navigator = comp)} />
        <ToastContainer />
        <NetInfo />
      </React.Fragment>
    );
  }
}

const mapState = state => {
  return {
    ...state.logout
  };
};
export default connect(
  mapState,
  { LogOutAction }
)(Main);
