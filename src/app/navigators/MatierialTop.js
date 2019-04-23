import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { createMaterialTopTabNavigator } from "react-navigation";

import Localization from "../localization/localization";

import { Colors } from "../styles";

import { connect } from "react-redux";

import OrderDone from "../pages/ordersDone";
import OrdersPending from "../pages/ordersPending";
import OrdersNew from "../pages/ordersNew";

class MatierialTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Tab: createMaterialTopTabNavigator(
        {
          OrdersNew: {
            screen: OrdersNew,
            navigationOptions: () => ({
              title: Localization.newRequest
            })
          },

          OrdersPending: {
            screen: OrdersPending,
            navigationOptions: () => ({
              title: Localization.RequestPending
            })
          },
          OrderDone: {
            screen: OrderDone,
            navigationOptions: () => ({
              title: Localization.RequestDone
            })
          }
        },

        {
          order: props.rtl
            ? ["OrdersNew", "OrdersPending", "OrderDone"]
            : ["OrdersNew", "OrdersPending", "OrderDone"].reverse(),
          initialRouteName: "OrdersNew",
          tabBarPosition: "top",
          swipeEnabled: true,
          animationEnabled: true,
          tabBarOptions: {
            activeTintColor: "gray",
            inactiveTintColor: "black",
            style: {
              backgroundColor: "white"
            },
            labelStyle: {
              textAlign: "center",
              fontSize: 18,
              fontWeight: "600"
            },
            indicatorStyle: {
              borderBottomColor: Colors.yellow,
              borderBottomWidth: 3
            }
          }
        }
      )
    };
  }
  componentWillReceiveProps() {
    this.setState({
      Tab: createMaterialTopTabNavigator(
        {
          OrdersNew: {
            screen: OrdersNew,
            navigationOptions: () => ({
              title: Localization.newRequest
            })
          },

          OrdersPending: {
            screen: OrdersPending,
            navigationOptions: () => ({
              title: Localization.RequestPending
            })
          },
          OrderDone: {
            screen: OrderDone,
            navigationOptions: () => ({
              title: Localization.RequestDone
            })
          }
        },

        {
          order: this.props.rtl
            ? ["OrdersNew", "OrdersPending", "OrderDone"]
            : ["OrdersNew", "OrdersPending", "OrderDone"].reverse(),
          initialRouteName: "OrdersNew",
          tabBarPosition: "top",
          swipeEnabled: true,
          animationEnabled: true,
          tabBarOptions: {
            activeTintColor: "gray",
            inactiveTintColor: "black",
            style: {
              backgroundColor: "white"
            },
            labelStyle: {
              textAlign: "center",
              fontSize: 18,
              fontWeight: "600"
            },
            indicatorStyle: {
              borderBottomColor: Colors.yellow,
              borderBottomWidth: 3
            }
          }
        }
      )
    });
  }
  render() {
    const { Tab } = this.state;
    return (
      <View style={{ height: 100 }}>
        <Tab />
      </View>
    );
  }
}

const mapState = state => {
  return {
    ...state.rtl
  };
};

export default connect(mapState)(MatierialTop);

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
