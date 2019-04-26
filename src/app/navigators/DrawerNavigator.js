import React from "react";
import { View, Text, StyleSheet, Platform, Keyboard } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Foundation from "react-native-vector-icons/Foundation";

import Localization from "../localization/localization";

import Main from "../pages/index";
import ChooseLanguage from "../pages/ChooseLanguage";
import OrdersScreen from "../pages/index";

import AboutUsScreen from "../pages/AboutUsScreen";
import ProfileScreen from "../pages/profile";

import ProfileStack from "./profileStack";
import HomeStack from "./HomeStack";
import { Colors } from "../styles";
import { connect } from "react-redux";

import { LogOutAction } from "../actions";

class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
      DRAWER: createBottomTabNavigator(
        {
          Home: {
            screen: HomeStack,
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
          Profile: {
            screen: ProfileStack,
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
          Orders: {
            screen: OrdersScreen,
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
          About: {
            screen: AboutUsScreen,
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
            ? ["Home", "Profile", "Orders", "About"].reverse()
            : ["Home", "Profile", "Orders", "About"],
          initialRouteName: "Home",
          tabBarOptions: {
            keyboardHidesTabBar: true,
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
  // componentDidMount() {
  //   this.props.LogOutAction(false);
  // }

  componentWillReceiveProps(nxt) {
    console.log("================props from navigation====================");
    console.log(this.props);
    console.log("====================================");
    // if (this.props.logout) {
    //   this.props.navigtion.navigate("AuthNav");
    //   return;
    // }
    // console.log("====================================");
    // console.log(this.props);
    // console.log("====================================");
    // if (this.props.logout === true) {
    //   this.props.navigation.navigate("AuthNav");
    //   return;
    // }
    //  this.props.navigation.navigate("AuthNav");
    this.setState({
      DRAWER: createBottomTabNavigator(
        {
          Home: {
            screen: HomeStack,
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
          Profile: {
            screen: ProfileStack,
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
          Orders: {
            screen: OrdersScreen,
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
          About: {
            screen: AboutUsScreen,
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
          order: this.props.rtl
            ? ["Home", "Profile", "Orders", "About"]
            : ["Home", "Profile", "Orders", "About"].reverse(),
          initialRouteName: "Home",
          tabBarOptions: {
            keyboardHidesTabBar: true,
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
export default connect(
  mapState,
  { LogOutAction }
)(Root);

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
