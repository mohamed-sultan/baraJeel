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

var { height, width } = Dimensions.get("window");

class ChooseLanguage extends Component {
  _handlePress = lan => {
    ChangeRtl(lan);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textHeader}>CHOOSE LANGUAGE</Text>
        <View style={styles.buttomWrapper}>
          <TouchableOpacity style={styles.buttom} onPress={this._handlePress}>
            <Text style={styles.langText}>عربى</Text>
            <Text style={styles.langSymbol}>ِِِAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttom} onPress={this._handlePress}>
            <Text style={styles.langText}>English</Text>
            <Text style={styles.langSymbol}>EN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect(
  null,
  { ChangeRtl }
)(ChooseLanguage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main,
    paddingVertical: height / 10
  },
  buttomWrapper: {
    flexDirection: "row",
    marginTop: height / 10,
    justifyContent: "center",
    height: "25%"
  },
  buttom: {
    width: "35%",
    height: "100%",
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 10,
    marginHorizontal: 10
  },
  textHeader: {
    color: "white",
    fontSize: 20,
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
