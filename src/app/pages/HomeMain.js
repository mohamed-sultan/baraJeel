import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  RefreshControl,
  Button
} from "react-native";

import Header from "../components/AppHeader";
import localization from "../localization/localization";
import { Colors } from "../styles";
import { connect } from "react-redux";
import { NavigationEvents } from "react-navigation";
import { FetchDepartments } from "../actions/showDepartments";
import { Toast } from "../actions";
var { height, width } = Dimensions.get("window");

import { DoToast } from "../../../App";
import EmptyComponent from "../components/listEmptyComponent";
import Localization from "../localization/localization";

class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.getDepartments(this.props.isConnected);
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
        <Image source={{ uri: item.photos[0].thumb }} style={styles.icon} />
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
          data={this.props.departments}
          keyExtractor={(item, index) => index}
          renderItem={this._renderItem}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => (
            <View style={{ height: 30, alignSelf: "stretch" }} />
          )}
          refreshControl={
            <RefreshControl
              refreshing={this.props.loading}
              onRefresh={() =>
                this.props.getDepartments(this.props.isConnected)
              }
            />
          }
          ListEmptyComponent={() => (
            <View
              style={{
                height: height / 1.5,
                marginTop: "60%"
              }}
            >
              <EmptyComponent />
            </View>
          )}
        />
      </View>
    );
  }
}
const mapState = state => {
  return {
    ...state.departments,
    ...state.netInfo
  };
};
const mapDispatch = dispatch => {
  return {
    getDepartments: isConnected => {
      if (!isConnected) {
        DoToast(Localization.noInternetzconnection);
        return;
      }
      FetchDepartments(dispatch);
    },
    doToast: ms => Toast(ms, dispatch)
  };
};

export default connect(
  mapState,
  mapDispatch
)(componentName);

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
