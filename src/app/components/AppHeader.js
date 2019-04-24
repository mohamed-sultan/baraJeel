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
    const { name, hasback, rtl, navigation } = this.props;
    const arrowStyle = rtl ? { right: 15 } : { left: 15 };
    return (
      <View style={styles.container}>
        {hasback && (
          <TouchableOpacity
            style={[
              {
                position: "absolute",
                justifyContent: "center",
                alignItems: "center",
                top: hp("5%"),
                zIndex: 1000
              },

              arrowStyle
            ]}
            onPress={() => navigation.goBack()}
          >
            <Ion
              name={rtl ? "md-arrow-forward" : "md-arrow-back"}
              color="white"
              size={25}
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
