import React, { PureComponent } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { connect } from "react-redux";

import Ion from "react-native-vector-icons/Ionicons";

import { Colors } from "../styles";
class AppHeader extends PureComponent {
  render() {
    const { name, hasback, rtl } = this.props;
    const arrowStyle = rtl ? { right: 20 } : { left: 20 };
    return (
      <View style={styles.container}>
        {hasback && (
          <TouchableOpacity onPress={() => alert("awesome")}>
            <Ion
              name={rtl ? "md-arrow-forward" : "md-arrow-back"}
              color="white"
              size={30}
              style={[
                {
                  position: "absolute",
                  top: hp("4%")
                },
                arrowStyle
              ]}
            />
          </TouchableOpacity>
        )}

        <Text style={styles.mainHeader}>{name}</Text>
      </View>
    );
  }
}

const mapState = state => {
  return {
    ...state.rtl
  };
};

export default connect(mapState)(AppHeader);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.mainDark,
    height: hp("10%")
  },
  mainHeader: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: hp("3.5%")
  }
});
