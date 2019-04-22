import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";

var { height, width } = Dimensions.get("window");

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: this.props.show
    };
  }
  componentWillReceiveProps = nxt => {
    this.setState({ show: nxt.show });
  };
  _handelPress = item => {
    this.props.pickedItem(item);
    this.setState({ show: false });
  };

  _renderItem = ({ item, index }) => (
    <TouchableOpacity
      key={index}
      style={styles.textContainer}
      onPress={() => this._handelPress(item[this.props.rendederVal])}
    >
      <Text style={styles.text}>{item[this.props.rendederVal]}</Text>
    </TouchableOpacity>
  );
  render() {
    const { show, data } = this.props;
    if (!data || data.length < 1) {
      return null;
    }
    return (
      <View style={{ position: "relative" }}>
        {this.state.show && (
          <View style={styles.container}>
            <FlatList data={data} renderItem={this._renderItem} />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: "10%",
    left: "10%",
    top: height / 3,
    // minHeight: height / 10,
    zIndex: 199,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    paddingTop: 5,
    paddingBottom: 20
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  text: {
    textAlign: "center",
    color: "gray",
    marginVertical: 5
  }
});
