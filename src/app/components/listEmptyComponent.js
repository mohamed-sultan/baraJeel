import React, { PureComponent } from "react";
import { Text, View, StyleSheet } from "react-native";

import Localization from "../localization/localization";

import { Colors } from "../styles";

export default class AboutUsScreen extends PureComponent {
  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#f1f1f1"
      },
      boxWrapper: {
        backgroundColor: "#ffffff",
        paddingVertical: 30,
        marginVertical: 30,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        borderRadius: 14,
        alignSelf: "center",

        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 9
        },
        shadowOpacity: 0.5,
        shadowRadius: 12.35,

        elevation: 19
      },
      boxWrapper2: {
        backgroundColor: "#ffffff",
        paddingVertical: 30,
        paddingHorizontal: 20,
        width: "90%",
        alignSelf: "center",
        borderRadius: 14,
        alignSelf: "center",

        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 9
        },
        shadowOpacity: 0.5,
        shadowRadius: 12.35,

        elevation: 1
      },
      boxWrapper2Item: {
        flexDirection: this.props.rtl ? "row-reverse" : "row",
        marginTop: 15
      },
      boxWrapperTitle: {
        color: Colors.yellow,
        marginVertical: 5,
        fontWeight: "600",
        fontSize: 18,
        textAlign: this.props.rtl ? "right" : "left"
      },
      about: {
        fontSize: 15,
        fontWeight: "300",
        textAlign: this.props.rtl ? "right" : "left"
      },
      textInfo: {
        fontSize: 15,
        fontWeight: "bold",
        marginHorizontal: 10
      }
    });
    return (
      <View>
        <View style={styles.container} />

        <View style={styles.boxWrapper2}>
          <Text style={{ textAlign: "center", color: "gray", fontSize: 20 }}>
            {Localization.noDataToSHow}
          </Text>
        </View>
      </View>
    );
  }
}
