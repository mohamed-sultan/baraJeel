import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";

import { BackHandler, Alert } from "react-native";
import reducers from "./src/app/reducers";
import localization from "./src/app/localization/localization";

import SplashScreen2 from "./app/pages/SplashScreen2";
import SplashScreen5 from "./app/pages/SplashScreen5";
import RootNavigator, { middleware } from "./src/app/navigators/RootNavigator";

import NetInfo from "./src/app/components/netinfo";
import SplashScreen from "react-native-splash-screen";

import ToastContainer from "./src/app/components/ToastContainer";

export const STORE = createStore(reducers, {}, applyMiddleware(middleware));
export const DoToastNow = (ms, color = "gray", duration = 500) =>
  STORE.dispatch({
    type: "dotoast",
    ms,
    color,
    duration
  });
const Main = () => (
  <React.Fragment>
    <RootNavigator />
    <NetInfo />
  </React.Fragment>
);
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }
  componentWillMount() {
    BackHandler.addEventListener("hardwareBackPress", this.backPressed);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backPressed);
  }

  backPressed = () => {
    Alert.alert(
      "Exit App",
      "Do you want to exit?",
      [
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Yes", onPress: () => BackHandler.exitApp() }
      ],
      { cancelable: false }
    );
    return true;
  };
  store = createStore(reducers, {}, applyMiddleware(middleware));

  render() {
    const persistor = persistStore(this.store);
    return (
      <Provider store={this.store}>
        <PersistGate persistor={persistor}>
          <Main />
        </PersistGate>
      </Provider>
    );
  }
}
