import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { connect } from "react-redux";

import { Colors } from "../styles";
import { ChangeRtl } from "../actions";
import { white } from "ansi-colors";
import Ionicons from "react-native-vector-icons/Ionicons";

var { height, width } = Dimensions.get("window");

class ChooseLanguage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasBack:
        props.navigation.state.params && props.navigation.state.params.hasBack
          ? true
          : false
    };
  }
  _handlePress = lan => {
    this.props.ChangeRtl(lan);
  };

  render() {
    let iconStyle = this.props.rtl
      ? { position: "absolute", top: 20, right: 20, zIndex: 100 }
      : { position: "absolute", top: 20, left: 20, zIndex: 100 };
    return (
      <React.Fragment>
        {this.state.hasBack && (
          <TouchableOpacity
            style={iconStyle}
            onPress={() => this.props.navigation.goBack()}
          >
            <Ionicons
              color="white"
              name={!this.props.rtl ? "md-arrow-back" : "md-arrow-forward"}
              size={25}
            />
          </TouchableOpacity>
        )}
        <View style={styles.container}>
          <Text style={styles.textHeader}>CHOOSE LANGUAGE</Text>
          <View style={styles.buttomWrapper}>
            <TouchableOpacity
              style={styles.buttom}
              onPress={() => this._handlePress(true)}
            >
              <Text style={styles.langText}>عربى</Text>
              <Text style={styles.langSymbol}>ِِِAR</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttom}
              onPress={() => this._handlePress(false)}
            >
              <Text style={styles.langText}>English</Text>
              <Text style={styles.langSymbol}>EN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </React.Fragment>
    );
  }
}

const mapState = state => {
  return {
    ...state.rtl
  };
};

export default connect(
  mapState,
  { ChangeRtl }
)(ChooseLanguage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainDark,
    paddingVertical: height / 10
  },
  buttomWrapper: {
    flexDirection: "row",
    marginTop: height / 10,
    justifyContent: "center",
    height: "30%"
  },
  buttom: {
    width: "35%",
    height: "100%",
    borderWidth: 2,
    borderColor: "#FFFFFF",
    borderRadius: 10,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  textHeader: {
    color: "white",
    fontSize: 28,
    textAlign: "center",
    fontWeight: "400"
  },
  langText: {
    color: "white",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "left",
    paddingHorizontal: 10
  },
  langSymbol: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center"
  }
});
