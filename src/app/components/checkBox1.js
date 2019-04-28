import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default class checkBox1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.selected && <View style={styles.child} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 22,
    width: 22,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: "#70284b",
    justifyContent: "center",
    alignItems: "center"
  },
  child: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#70284b",
    alignSelf: "center"
  }
});
