import React, { Component } from "react";
import { BackHandler, Alert, StatusBar } from "react-native";
import { Provider } from "react-redux";

import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";

import reducers from "./src/app/reducers";
import localization from "./src/app/localization/localization";

import RootNavigator, { middleware } from "./src/app/navigators/RootNavigator";

import NetInfo from "./src/app/components/netinfo";
import SplashScreen from "react-native-splash-screen";

import ToastContainer from "./src/app/components/ToastContainer";

import store from "./src/app/store";
import { Colors } from "./src/app/styles";

import Audio from "./audio";

export const DoToast = ms => store.dispatch({ type: "dotoast", ms });

import Main from "./src";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: false
    };

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

  render() {
    const persistor = persistStore(store);
    if (this.state.test) {
      return <Audio />;
    }
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Main />
        </PersistGate>
      </Provider>
    );
  }
}
