import React, { Component } from "react";
import { Text, View } from "react-native";

import { connect } from "react-redux";

class index extends Component {
  render() {
    return (
      <View>
        <Text> {this.props.rtl ? "rtl" : "ltr"} </Text>
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
