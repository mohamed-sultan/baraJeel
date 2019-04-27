import React from "react";
import { ActivityIndicator, AsyncStorage, StatusBar, View } from "react-native";

import { connect } from "react-redux";
import Localization from "../localization/localization";

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    Localization.setLanguage(this.props.rtl ? "ar" : "en");
    const user = this.props.user !== null;
    console.log("====================================");
    console.log("from switch navigatior", user);
    console.log("====================================");

    this.props.navigation.navigate(user ? "HomeNav" : "AuthNav");
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const mapState = state => {
  return {
    ...state.auth,
    ...state.rtl
  };
};

export default connect(
  mapState,
  null
)(AuthLoadingScreen);
