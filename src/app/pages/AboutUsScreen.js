import React, { PureComponent } from "react";
import { Text, View, StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Header from "../components/AppHeader";
import Localization from "../localization/localization";

import { connect } from "react-redux";
import { Colors } from "../styles";
import localization from "../localization/localization";

class AboutUsScreen extends PureComponent {
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
        <Header name={Localization.aboutUs} />
        <View style={styles.container} />
        <View style={styles.boxWrapper}>
          <Text style={styles.boxWrapperTitle}>{Localization.aboutUs}</Text>
          <Text style={styles.about}>{localization.lorem}</Text>
        </View>
        <View style={styles.boxWrapper2}>
          <View style={styles.boxWrapper2Item}>
            <AntDesign name="mobile1" color={Colors.yellow} size={20} />
            <Text style={styles.textInfo}>0125897864</Text>
          </View>
          <View style={styles.boxWrapper2Item}>
            <MaterialIcons name="email" color={Colors.yellow} size={20} />
            <Text style={styles.textInfo}> Trust@gmail.com</Text>
          </View>
          <View style={styles.boxWrapper2Item}>
            <MaterialCommunityIcons
              name="web"
              color={Colors.yellow}
              size={20}
            />
            <Text style={styles.textInfo}>Trust.com</Text>
          </View>
        </View>
      </View>
    );
  }
}

const mapState = state => {
  return {
    ...state.rtl
  };
};

export default connect(mapState)(AboutUsScreen);
