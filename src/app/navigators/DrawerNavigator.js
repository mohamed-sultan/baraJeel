import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Foundation from "react-native-vector-icons/Foundation";

import Localization from "../localization/localization";

import Main from "../pages/index";
import ChooseLanguage from "../pages/ChooseLanguage";

import { Colors } from "../styles";
import { connect } from "react-redux";

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DRAWER: createBottomTabNavigator(
        {
          Home: {
            screen: ChooseLanguage,
            navigationOptions: () => ({
              tabBarIcon: ({ focused, tintColor }) => (
                <View style={styles.parentIcon}>
                  <Entypo name="home" color={tintColor} size={30} />
                  <Text style={styles.iconText}>
                    {focused ? Localization.home : ""}
                  </Text>
                </View>
              )
            })
          },
          Main: {
            screen: Main,
            navigationOptions: () => ({
              tabBarIcon: ({ focused, tintColor }) => (
                <View style={styles.parentIcon}>
                  <FontAwesome name="user" color={tintColor} size={30} />
                  <Text style={styles.iconText}>
                    {focused ? Localization.profile : ""}
                  </Text>
                </View>
              )
            })
          },
          H: {
            screen: ChooseLanguage,
            navigationOptions: () => ({
              tabBarIcon: ({ focused, tintColor }) => (
                <View style={styles.parentIcon}>
                  <FontAwesome name="file-text" color={tintColor} size={30} />
                  <Text style={styles.iconText}>
                    {focused ? Localization.myOrders : ""}
                  </Text>
                </View>
              )
            })
          },
          M: {
            screen: Main,
            navigationOptions: () => ({
              tabBarIcon: ({ focused, tintColor }) => (
                <View style={styles.parentIcon}>
                  <Foundation name="info" color={tintColor} size={30} />
                  <Text style={styles.iconText}>
                    {focused ? Localization.aboutUs : ""}
                  </Text>
                </View>
              )
            })
          }
        },
        {
          order: props.rtl
            ? ["Home", "Main", "H", "M"]
            : ["Home", "Main", "H", "M"].reverse(),
          tabBarOptions: {
            activeTintColor: "white",
            inactiveTintColor: "gray",
            style: {
              backgroundColor: Colors.main,
              height: 80
              // paddingVertical: 35
            },
            labelStyle: {
              padding: 0,
              color: "green",
              paddingBottom: 10,
              fontSize: 15
            },
            showLabel: false
          }
        }
      )
    };
  }

  componentWillReceiveProps(nxt) {
    console.log("=============new props=======================");
    console.log(nxt);
    console.log("===============new props=====================");
    this.setState({
      DRAWER: createBottomTabNavigator(
        {
          Home: {
            screen: ChooseLanguage,
            navigationOptions: () => ({
              tabBarIcon: ({ focused, tintColor }) => (
                <View style={styles.parentIcon}>
                  <Entypo name="home" color={tintColor} size={30} />
                  <Text style={styles.iconText}>
                    {focused ? Localization.home : ""}
                  </Text>
                </View>
              )
            })
          },
          Main: {
            screen: Main,
            navigationOptions: () => ({
              tabBarIcon: ({ focused, tintColor }) => (
                <View style={styles.parentIcon}>
                  <FontAwesome name="user" color={tintColor} size={30} />
                  <Text style={styles.iconText}>
                    {focused ? Localization.profile : ""}
                  </Text>
                </View>
              )
            })
          },
          H: {
            screen: ChooseLanguage,
            navigationOptions: () => ({
              tabBarIcon: ({ focused, tintColor }) => (
                <View style={styles.parentIcon}>
                  <FontAwesome name="file-text" color={tintColor} size={30} />
                  <Text style={styles.iconText}>
                    {focused ? Localization.myOrders : ""}
                  </Text>
                </View>
              )
            })
          },
          M: {
            screen: Main,
            navigationOptions: () => ({
              tabBarIcon: ({ focused, tintColor }) => (
                <View style={styles.parentIcon}>
                  <Foundation name="info" color={tintColor} size={30} />
                  <Text style={styles.iconText}>
                    {focused ? Localization.aboutUs : ""}
                  </Text>
                </View>
              )
            })
          }
        },
        {
          initialRouteName: "Home",
          order: this.props.rtl
            ? ["Home", "Main", "H", "M"]
            : ["Home", "Main", "H", "M"].reverse(),
          tabBarOptions: {
            activeTintColor: "white",
            inactiveTintColor: "gray",
            style: {
              backgroundColor: Colors.main,
              height: 80
              // paddingVertical: 35
            },
            labelStyle: {
              padding: 0,
              color: "green",
              paddingBottom: 10,
              fontSize: 15
            },
            showLabel: false
          }
        }
      )
    });
  }
  render() {
    return <this.state.DRAWER />;
  }
}

const mapState = state => {
  return {
    ...state.rtl
  };
};
export default connect(mapState)(Root);

const styles = StyleSheet.create({
  parentIcon: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: 100
  },
  iconText: {
    color: "white",
    paddingVertical: 2,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }
});
