import React, { PureComponent, Component } from "react";
import { View, Text } from "react-native";
import Toast, { DURATION } from "react-native-easy-toast";
import { connect } from "react-redux";

import { Colors } from "../styles";
import { DoToast } from "../../../App";

class TOComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ms: ""
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return { ms: String(Date.now) };
  }

  componentDidUpdate(prevProps) {
    if (this.props.ms.length >> 1) {
      this.refs.toast.show(this.props.ms, 1000, () => DoToast(""));
    }
  }
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <Toast
        ref="toast"
        style={{
          backgroundColor: "black",
          width: "80%",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: -80,
          borderRadius: 14
        }}
        position="bottom"
        opacity={0.9}
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
