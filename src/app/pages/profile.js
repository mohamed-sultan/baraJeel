import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Header from "../components/AppHeader";

import { Colors } from "../styles";
import Localization from "../localization/localization";

class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _handleGeneralInfoPressed = () => {
    this.props.navigation.navigate("GeneralInfoScreen", { hasBack: true });
  };
  _handlChangePasswordPressed = () => {
    this.props.navigation.navigate("ChangePasswordScreen", { hasBack: true });
  };
  _handleChangeLanguagePress = () => {
    this.props.navigation.navigate("ChangeLanguageScreen", { hasBack: true });
  };
  _handleLogOutPress = () => {
    alert("log out pressed");
  };

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#f1f1f1"
      },
      rowStyles: {
        borderBottomWidth: 1,
        borderColor: "#e2e2e2",
        padding: 10,
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 20,
        flexDirection: this.props.rtl ? "row" : "row-reverse",
        backgroundColor: "white",
        paddingVertical: 15
      },
      logOutContainer: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        paddingVertical: 15
      },
      logoutText: {
        color: Colors.yellow,
        fontSize: 20,
        textAlign: "center",
        fontWeight: "400"
      },
      info: {
        color: Colors.yellow,
        fontSize: 16,
        fontWeight: "900"
      },
      firstSection: {
        marginVertical: 40,
        marginBottom: 10
      },
      rowContainer: {
        backgroundColor: "white"
      }
    });
    return (
      <View style={styles.container}>
        <Header name={Localization.profile} />
        <View style={styles.firstSection}>
          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={styles.rowStyles}
              onPress={this._handlChangePasswordPressed}
            >
              <FontAwesome5
                name={this.props.rtl ? "arrow-left" : "arrow-right"}
                color={Colors.yellow}
                size={16}
                color={Colors.yellow}
              />
              <Text style={styles.info}>{Localization.changePassword}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.rowStyles}
              onPress={this._handleChangeLanguagePress}
            >
              <FontAwesome5
                name={this.props.rtl ? "arrow-left" : "arrow-right"}
                color={Colors.yellow}
                size={16}
                color={Colors.yellow}
              />
              <Text style={styles.info}>{Localization.changeLanguage}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.rowStyles, { borderBottomWidth: 0 }]}
              onPress={this._handleGeneralInfoPressed}
            >
              <FontAwesome5
                name={this.props.rtl ? "arrow-left" : "arrow-right"}
                color={Colors.yellow}
                size={16}
                color={Colors.yellow}
              />
              <Text style={styles.info}>{Localization.generalInfo}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.logOutContainer}
          onPress={this._handleLogOutPress}
        >
          <Text style={styles.logoutText}>{Localization.logOut}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapState = state => {
  return {
    ...state.rtl
  };
};

export default connect(mapState)(componentName);
