import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";

import Header from "../components/AppHeader";
import localization from "../localization/localization";
import { Colors } from "../styles";
import { connect } from "react-redux";
import { NavigationEvents } from "react-navigation";

var { height, width } = Dimensions.get("window");

var DATA = [
  { icon: "https://img.icons8.com/color/60px/pen", name: "سباكه" },
  { icon: "https://img.icons8.com/color/60px/pen", name: "سباكه" },
  { icon: "https://img.icons8.com/color/60px/pen", name: "سباكه" },
  { icon: "https://img.icons8.com/color/60px/pen", name: "سباكه" },
  { icon: "https://img.icons8.com/color/60px/pen", name: "سباكه" },
  { icon: "https://img.icons8.com/color/60px/pen", name: "سباكه" },
  { icon: "https://img.icons8.com/color/60px/pen", name: "سباكه" },
  { icon: "https://img.icons8.com/color/60px/pen", name: "سباكه" },
  { icon: "https://img.icons8.com/color/60px/pen", name: "سباكه" },
  { icon: "https://img.icons8.com/color/60px/pen", name: "سباكه" },
  { icon: "https://img.icons8.com/color/60px/pen", name: "سباكه" },
  { icon: "https://img.icons8.com/color/60px/pen", name: "سباكه" },
  { icon: "https://img.icons8.com/color/60px/pen", name: "سباكه" },
  { icon: "https://img.icons8.com/color/60px/pen", name: "سباكه" },
  { icon: "https://img.icons8.com/color/60px/pen", name: "سباكه" },
  { icon: "https://img.icons8.com/color/60px/pen", name: "سباكه" },
  { icon: "https://img.icons8.com/color/60px/pen", name: "سباكه" },
  { icon: "https://img.icons8.com/color/60px/pen", name: "سباكه" },
  { icon: "https://img.icons8.com/color/60px/pen", name: "سباكه" },
  { icon: "https://img.icons8.com/color/60px/pen", name: "سباكه" },
  { icon: "https://img.icons8.com/color/60px/pen", name: "سباكه" },
  { icon: "https://img.icons8.com/color/60px/pen", name: "سباكه" },
  { icon: "https://img.icons8.com/color/60px/pen", name: "سباكه" },
  { icon: "https://img.icons8.com/color/60px/pen", name: "سباكه" },
  { icon: "https://img.icons8.com/color/60px/pen", name: "سباكه" },
  { icon: "https://img.icons8.com/color/60px/pen", name: "سباكه" },
  { icon: "https://img.icons8.com/color/60px/pen", name: "سباكه" },
  { icon: "https://img.icons8.com/color/60px/pen", name: "سباكه" },
  { icon: "https://img.icons8.com/color/60px/pen", name: "سباكه" },
  { icon: "https://img.icons8.com/color/60px/pen", name: "سباكه" },
  { icon: "https://img.icons8.com/color/60px/pen", name: "سباكه" },
  { icon: "https://img.icons8.com/color/60px/pen", name: "سباكه" },
  { icon: "https://img.icons8.com/color/60px/pen", name: "سباكه" },
  { icon: "https://img.icons8.com/color/60px/pen", name: "سباكه" },
  { icon: "https://img.icons8.com/color/60px/pen", name: "سباكه" },
  { icon: "https://img.icons8.com/color/60px/pen", name: "سباكه" },
  { icon: "https://img.icons8.com/color/60px/pen", name: "سباكه" },
  { icon: "https://img.icons8.com/color/60px/pen", name: "سباكه" },
  { icon: "https://img.icons8.com/color/60px/pen", name: "سباكه" }
];

class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    // props.navigation.navigate("AuthNav");
  }

  _renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={styles.touchable}
        key={index}
        onPress={() =>
          this.props.navigation.navigate("HomeOrderScreen", { ...item })
        }
      >
        <Image source={{ uri: item.icon }} style={styles.icon} />
        <Text style={styles.text}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <Header name={localization.home} />

        <FlatList
          style={{ height: height / 1.5, width: "95%", alignSelf: "center" }}
          data={DATA}
          keyExtractor={(item, index) => index}
          renderItem={this._renderItem}
          numColumns={3}
          showsVerticalScrollIndicator={false}
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
    ...state.logout
  };
};

export default connect(mapState)(componentName);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  touchable: {
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
    justifyContent: "center",
    alignItems: "center",
    height: height / 6,
    width: width / 3.8,
    marginHorizontal: 10
  },
  icon: {
    width: "60%",
    height: "60%"
  },
  text: {
    textAlign: "center",
    color: Colors.yellow
  }
});
