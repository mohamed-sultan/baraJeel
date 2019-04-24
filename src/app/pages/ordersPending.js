import React, { PureComponent, Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Dimensions
} from "react-native";

import { connect } from "react-redux";
import localization from "../localization/localization";
import { Colors } from "../styles";

const { height } = Dimensions.get("window");
var DATA = [
  {
    orderNumber: "13233",
    service: "تنظيق",
    orderDate: "13-5-2019 صباحا",
    orderSpeed: "عادى",
    address: "شارع مرتضى العاملى عمان"
  },
  {
    orderNumber: "13233",
    service: "تنظيق",
    orderDate: "13-5-2019 صباحا",
    orderSpeed: "عادى",
    address: "شارع مرتضى العاملى عمان"
  },
  {
    orderNumber: "13233",
    service: "تنظيق",
    orderDate: "13-5-2019 صباحا",
    orderSpeed: "عادى",
    address: "شارع مرتضى العاملى عمان"
  },
  {
    orderNumber: "13233",
    service: "تنظيق",
    orderDate: "13-5-2019 صباحا",
    orderSpeed: "عادى",
    address: "شارع مرتضى العاملى عمان"
  },
  {
    orderNumber: "13233",
    service: "تنظيق",
    orderDate: "13-5-2019 صباحا",
    orderSpeed: "عادى",
    address: "شارع مرتضى العاملى عمان"
  },
  {
    orderNumber: "13233",
    service: "تنظيق",
    orderDate: "13-5-2019 صباحا",
    orderSpeed: "عادى",
    address: "شارع مرتضى العاملى عمان"
  },
  {
    orderNumber: "13233",
    service: "تنظيق",
    orderDate: "13-5-2019 صباحا",
    orderSpeed: "عادى",
    address: "شارع مرتضى العاملى عمان"
  },
  {
    orderNumber: "13233",
    service: "تنظيق",
    orderDate: "13-5-2019 صباحا",
    orderSpeed: "عادى",
    address: "شارع مرتضى العاملى عمان"
  },
  {
    orderNumber: "13233",
    service: "تنظيق",
    orderDate: "13-5-2019 صباحا",
    orderSpeed: "عادى",
    address: "شارع مرتضى العاملى عمان"
  },
  {
    orderNumber: "13233",
    service: "تنظيق",
    orderDate: "13-5-2019 صباحا",
    orderSpeed: "عادى",
    address: "شارع مرتضى العاملى عمان"
  },
  {
    orderNumber: "13233",
    service: "تنظيق",
    orderDate: "13-5-2019 صباحا",
    orderSpeed: "عادى",
    address: "شارع مرتضى العاملى عمان"
  },
  {
    orderNumber: "13233",
    service: "تنظيق",
    orderDate: "13-5-2019 صباحا",
    orderSpeed: "عادى",
    address: "شارع مرتضى العاملى عمان"
  },
  {
    orderNumber: "13233",
    service: "تنظيق",
    orderDate: "13-5-2019 صباحا",
    orderSpeed: "عادى",
    address: "شارع مرتضى العاملى عمان"
  },
  {
    orderNumber: "13233",
    service: "تنظيق",
    orderDate: "13-5-2019 صباحا",
    orderSpeed: "عادى",
    address: "شارع مرتضى العاملى عمان"
  },
  {
    orderNumber: "13233",
    service: "تنظيق",
    orderDate: "13-5-2019 صباحا",
    orderSpeed: "عادى",
    address: "شارع مرتضى العاملى عمان"
  },
  {
    orderNumber: "13233",
    service: "تنظيق",
    orderDate: "13-5-2019 صباحا",
    orderSpeed: "عادى",
    address: "شارع مرتضى العاملى عمان"
  },
  {
    orderNumber: "13233",
    service: "تنظيق",
    orderDate: "13-5-2019 صباحا",
    orderSpeed: "عادى",
    address: "شارع مرتضى العاملى عمان"
  },
  {
    orderNumber: "13233",
    service: "تنظيق",
    orderDate: "13-5-2019 صباحا",
    orderSpeed: "عادى",
    address: "شارع مرتضى العاملى عمان"
  },
  {
    orderNumber: "13233",
    service: "تنظيق",
    orderDate: "13-5-2019 صباحا",
    orderSpeed: "عادى",
    address: "شارع مرتضى العاملى عمان"
  },
  {
    orderNumber: "13233",
    service: "تنظيق",
    orderDate: "13-5-2019 صباحا",
    orderSpeed: "عادى",
    address: "شارع مرتضى العاملى عمان"
  }
];

class New extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _renderItem = ({ item, index }) => {
    return (
      <View key={index} style={this.styles.boxWrapper2Item}>
        <View style={this.styles.rowContainer}>
          <Text style={this.styles.labelName}>{`${
            localization.orderNumber
          } : `}</Text>
          <Text style={this.styles.labelValue}>{item.orderNumber}</Text>
        </View>
        <View style={this.styles.rowContainer}>
          <Text style={this.styles.labelName}>{`${
            localization.service
          } : `}</Text>
          <Text style={this.styles.labelValue}>{item.service}</Text>
        </View>
        <View style={this.styles.rowContainer}>
          <Text style={this.styles.labelName}>{`${
            localization.orderDate
          } : `}</Text>
          <Text style={this.styles.labelValue}>{item.orderDate}</Text>
        </View>
        <View style={this.styles.rowContainer}>
          <Text style={this.styles.labelName}>{`${
            localization.orderSpeed
          } : `}</Text>
          <Text style={this.styles.labelValue}>{item.orderSpeed}</Text>
        </View>
        <View style={this.styles.rowContainer}>
          <Text style={this.styles.labelName}>{`${
            localization.address
          } : `}</Text>
          <Text style={this.styles.labelValue}>{item.address}</Text>
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
        <FlatList
          style={{ height: height / 1.5, backgroundColor: "#f1f1f1" }}
          data={DATA}
          keyExtractor={(item, key) => key}
          renderItem={this._renderItem}
          ListFooterComponent={() => (
            <View style={{ height: 30, alignSelf: "stretch" }} />
          )}
        />
      </View>
    );
  }
}

const mapState = state => {
  return {
    ...state.rtl
  };
};

export default connect(mapState)(New);