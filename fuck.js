import React, { Component } from "react";
import { Text, View } from "react-native";

import SPLASH from "react-native-splash-screen";
export default class fuck extends Component {
  componentDidMount() {
    SPLASH.hide();
  }
  render() {
    return (
      <View
        style={{ height: 1000, justifyContent: "center", alignItems: "center" }}
      >
        <Text>رمضان كريم</Text>
      </View>
    );
  }
}
