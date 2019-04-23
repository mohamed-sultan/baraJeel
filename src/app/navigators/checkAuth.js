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
    // const userToken =
    //   this.props.user !== null &&
    //   this.props.user.userToken &&
    //   this.props.user.userToken.length > 5;

    // this.props.navigation.navigate(userToken ? "HomeNav" : "AuthNav");
    Localization.setLanguage(this.props.rtl ? "ar" : "en");
    this.props.navigation.navigate("HomeNav");
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
