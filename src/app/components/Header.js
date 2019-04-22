import React from "react";

import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  I18nManager
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { withNavigation } from "react-navigation";
import { NavigationActions } from "react-navigation";

import Menu from "../../Imag/Artboard1/Menu.png";
import Back from "../../Imag/Artboard1/Back.png";

class Header extends React.Component {
  render() {
    const { showBack } = this.props;
    var drawer;
    if (this.props.drawer) {
      drawer = () => {
        this.props.navigation.toggleDrawer();
      };
    } else {
      drawer = () => console.log("just drawer in home");
    }

    return (
      <View style={styles.header}>
        {/* <TouchableOpacity  onPress={()=>{this.props.navigation.goBack()}}> */}

        <TouchableOpacity
          onPress={() =>
            this.props.navigation.dispatch(NavigationActions.back())
          }
          disabled={showBack === 0}
        >
          <Image
            source={showBack === 0 ? null : Back}
            style={[
              styles.image4_5,
              {
                transform: [{ rotateZ: I18nManager.isRTL ? "180deg" : "0deg" }]
              }
            ]}
          />
        </TouchableOpacity>

        <View style={styles.rowCenter}>
          <Text style={styles.textHeader}> {this.props.title} </Text>
          <TouchableOpacity onPress={drawer}>
            <Image source={Menu} style={styles.image6_5} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default withNavigation(Header);

const styles = StyleSheet.create({
  header: {
    height: hp("7%"),
    backgroundColor: "#A07532",
    justifyContent: "space-between",
    alignItems: "center",
    padding: wp("5%"),
    flexDirection: "row",
    paddingTop: wp("7%")
  },
  image4_5: {
    width: wp("4.5%"),
    height: wp("4.5%"),
    resizeMode: "contain"
  },
  rowCenter: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  textHeader: {
    color: "white",
    fontSize: wp("4.5%"),
    marginHorizontal: wp("3%"),
    fontWeight: "bold",
    height: "100%"
  },
  image6_5: {
    width: wp("6.5%"),
    height: wp("6.5%"),
    resizeMode: "contain"
  }
});
