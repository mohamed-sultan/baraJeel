import React, { PureComponent, Component } from "react";
import { View, Text } from "react-native";
import Toast, { DURATION } from "react-native-easy-toast";
import { connect } from "react-redux";

import { Colors } from "../styles";

class TOComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillReceiveProps(NP) {
    console.log("==============prop==from toast====================");
    console.log("prop from tost", this.props);
    console.log("============prop========================");
    if (this.props.ms.length > 1) {
      this.refs.toast.show(this.props.ms, 1000);
    }
  }

  render() {
    return (
      <Toast
        ref="toast"
        style={{
          backgroundColor: Colors.mainDark,
          width: "80%",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: 0,
          borderRadius: 14
        }}
        position="bottom"
        fadeInDuration={750}
        fadeOutDuration={1000}
        opacity={0.8}
        textStyle={{ color: "white" }}
      />
    );
  }
}

const mapState = state => {
  return {
    ...state.toast,
    total: state
  };
};

export default connect(
  mapState,
  null
)(TOComponent);
