import React from "react";
import { ActivityIndicator, AsyncStorage, StatusBar, View } from "react-native";

import { connect } from "react-redux";

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
    ...state.auth
  };
};

export default connect(
  mapState,
  null
)(AuthLoadingScreen);
