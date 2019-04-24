import React, { Component } from "react";
import { View, Text } from "react-native";

import Header from "../components/AppHeader";
import localization from "../localization/localization";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Header
          hasback
          name={localization.generalInfo}
          navigation={this.props.navigation}
        />
        <Text> General info </Text>
      </View>
    );
  }
}
