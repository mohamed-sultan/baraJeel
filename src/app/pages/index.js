import React, { Component } from "react";
import { Text, View } from "react-native";

import Header from "../components/AppHeader";
import Tabs from "../navigators/MatierialTop";
import Localization from "../localization/localization";

import { connect } from "react-redux";

class index extends Component {
  render() {
    return (
      <View>
        <Header name={Localization.myOrders} />
        <Tabs />
      </View>
    );
  }
}

const mapState = state => {
  return {
    ...state.rtl
  };
};

export default connect(mapState)(index);
