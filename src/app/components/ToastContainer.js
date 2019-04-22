import React, { PureComponent, Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
class TOComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillReceiveProps(NP) {
    this.props = NP;
    console.log("===========uuuuuuuuuuu=========================");
    console.log(NP);
    console.log("====================================");
  }
  render() {
    console.log("propa", this.props);
    return (
      <View>
        <Text style={{ color: "red" }}> {this.props.duration} </Text>
      </View>
    );
  }
}

const mapState = state => {
  return {
    ...state.toast
  };
};

export default connect(
  mapState,
  null
)(TOComponent);
