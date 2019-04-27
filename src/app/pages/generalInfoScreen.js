import React, { PureComponent } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";

import Header from "../components/AppHeader";
import Localization from "../localization/localization";

import { connect } from "react-redux";
import { Colors } from "../styles";
import localization from "../localization/localization";

const { height } = Dimensions.get("window");

class AboutUsScreen extends PureComponent {
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
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#f1f1f1",
        marginVertical: "6%"
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
        marginVertical: "5%",
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

        elevation: 19
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
        <Header
          hasback
          name={Localization.generalInfo}
          navigation={this.props.navigation}
        />
        <View style={styles.container} />

        <View style={styles.boxWrapper2}>
          <View style={styles.boxWrapper2Item}>
            <AntDesign name="mobile1" color={Colors.yellow} size={20} />
            <Text style={styles.textInfo}>{this.props.user.mobile}</Text>
          </View>
          <View style={styles.boxWrapper2Item}>
            <MaterialIcons name="email" color={Colors.yellow} size={20} />
            <Text style={styles.textInfo}> {this.props.email}</Text>
          </View>
          <View style={styles.boxWrapper2Item}>
            <Octicons name="person" color={Colors.yellow} size={20} />
            <Text style={styles.textInfo}>{this.props.user.name}</Text>
          </View>
        </View>
        <View style={{ width: "30%", alignSelf: "center" }}>
          <Text
            style={{
              textAlign: "center",
              color: Colors.yellow,
              fontWeight: "800",
              fontSize: 25,
              borderBottomWidth: 3,
              marginBottom: 10,
              borderColor: Colors.yellow
            }}
          >
            {Localization.myOrders}
          </Text>
        </View>
        <View style={this.styles.boxWrapper2Item}>
          <View style={this.styles.rowContainer}>
            <Text style={this.styles.labelName}>{`${
              localization.RequestDone
            }: `}</Text>
            <Text style={this.styles.labelValue}>
              {this.props.doneOrders.length}
            </Text>
          </View>
          <View style={this.styles.rowContainer}>
            <Text style={this.styles.labelName}>{`${
              localization.RequestPending
            }: `}</Text>
            <Text style={this.styles.labelValue}>
              {this.props.inProgressOrders.length}
            </Text>
          </View>
          <View style={this.styles.rowContainer}>
            <Text style={this.styles.labelName}>{`${
              localization.newRequest
            }: `}</Text>
            <Text style={this.styles.labelValue}>
              {this.props.newOrders.length}
            </Text>
          </View>
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

export default connect(mapState)(AboutUsScreen);
