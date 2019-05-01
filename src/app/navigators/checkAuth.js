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
    const user = this.props.user !== null;
    const { remeberMe } = this.props;

    if (this.props.lanfDidShow) {
      this.props.navigation.navigate(
        !remeberMe ? "AuthNav" : user ? "HomeNav" : "AuthNav"
      );
      return;
    } else {
      this.props.navigation.navigate("LanguageStartPage");
    }
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
    ...state.rtl,
    ...state.startupLanguage
  };
};

export default connect(
  mapState,
  null
)(AuthLoadingScreen);
