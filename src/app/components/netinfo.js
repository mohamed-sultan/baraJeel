import React from "react";
import { View, Text, StyleSheet, NetInfo } from "react-native";
import { connect } from "react-redux";

import { UpdateConnectionStatus } from "../actions";
import Localization from "../localization/localization";

class MyNetInfo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.skipFirstToast = true;
  }

  componentDidMount() {
    NetInfo.isConnected.fetch().then(isConnected => {
      this.props.UpdateConnectionStatus(isConnected);
    });
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      this._handleConnectionChange
    );
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      "connectionChange",
      this._handleConnectionChange
    );
  }

  _handleConnectionChange = isConnected =>
    this.props.UpdateConnectionStatus(isConnected);

  render() {
    const { netInfo } = this.props;

    if (netInfo.isConnected) return <View />;
    return (
      <View style={styles.connectionStatus}>
        <Text style={styles.connectionText}>
          {Localization.noInternetzconnection}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  connectionStatus: {
    // position: "absolute",
    // bottom: 0,
    width: "100%",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    height: 20
  },
  connectionText: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold"
  }
});

const mapStateToProps = state => {
  return {
    netInfo: state.netInfo
  };
};

export default connect(
  mapStateToProps,
  { UpdateConnectionStatus }
)(MyNetInfo);
