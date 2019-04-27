import React, { PureComponent, Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Dimensions,
  RefreshControl
} from "react-native";

import { connect } from "react-redux";
import localization from "../localization/localization";
import { Colors } from "../styles";
import { FetchNewOrders } from "../actions";

const { height } = Dimensions.get("window");

class New extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    this.props.getMyNewOrders(this.props.token);
  }
  componentWillReceiveProps() {
    console.log("========new prop============================");
    console.log(this.props.newOrders);
    console.log("================new prop====================");
  }
  _renderItem = ({ item, index }) => {
    return (
      <View key={index} style={this.styles.boxWrapper2Item}>
        <View style={this.styles.rowContainer}>
          <Text style={this.styles.labelName}>{`${
            localization.orderNumber
          } : `}</Text>
          <Text style={this.styles.labelValue}>{item.id}</Text>
        </View>
        <View style={this.styles.rowContainer}>
          <Text style={this.styles.labelName}>{`${
            localization.service
          } : `}</Text>
          <Text style={this.styles.labelValue}>{item.department}</Text>
        </View>
        <View style={this.styles.rowContainer}>
          <Text style={this.styles.labelName}>{`${
            localization.orderDate
          } : `}</Text>
          <Text style={this.styles.labelValue}>{item.date}</Text>
        </View>
        <View style={this.styles.rowContainer}>
          <Text style={this.styles.labelName}>{`${
            localization.orderSpeed
          } : `}</Text>
          <Text style={this.styles.labelValue}>{item.type}</Text>
        </View>
        <View style={this.styles.rowContainer}>
          <Text style={this.styles.labelName}>{`${
            localization.address
          } : `}</Text>
          <Text style={this.styles.labelValue}>{item.type}</Text>
        </View>
      </View>
    );
  };
  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f1f1f1"
    },
    boxWrapper2Item: {
      paddingHorizontal: 5,
      width: "90%",
      alignSelf: "center",
      borderRadius: 14,
      backgroundColor: "white",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 9
      },
      shadowOpacity: 0.5,
      shadowRadius: 12.35,
      elevation: 4,
      marginTop: 10,
      paddingVertical: 15
    },

    rowContainer: {
      flexDirection: this.props.rtl ? "row-reverse" : "row",
      paddingHorizontal: 5
    },
    labelName: {
      color: Colors.yellow,
      marginHorizontal: 2,
      fontSize: 16,
      fontWeight: "800"
    },
    labelValue: {
      fontSize: 16,
      fontWeight: "800"
    }
  });
  render() {
    return (
      <View style={this.styles.container}>
        <View style={{ height: height / 1.5, backgroundColor: "#f1f1f1" }}>
          <FlatList
            data={this.props.newOrders}
            keyExtractor={(item, key) => key}
            renderItem={this._renderItem}
            extraData={this.props.newOrders}
            ListFooterComponent={() => (
              <View style={{ height: 30, alignSelf: "stretch" }} />
            )}
            refreshControl={
              <RefreshControl
                refreshing={this.props.newOrdersLoading}
                onRefresh={() => this.props.getMyNewOrders(this.props.token)}
              />
            }
          />
        </View>
      </View>
    );
  }
}

const mapState = state => {
  return {
    ...state.rtl,
    ...state.auth,
    ...state.orders
  };
};
const mapDispatch = dispatch => {
  return {
    getMyNewOrders: token => FetchNewOrders(token, dispatch)
  };
};

export default connect(
  mapState,
  mapDispatch
)(New);
