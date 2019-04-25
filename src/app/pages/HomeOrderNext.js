import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image
} from "react-native";
import { connect } from "react-redux";

import Localization from "../localization/localization";
import Header from "../components/AppHeader";
import { Colors } from "../styles";
import CHeckBox from "../components/checkBox";
import DateTimePicker from "react-native-modal-datetime-picker";

import CalenderImage from "../../img/calenderImage.png";

const { width, height } = Dimensions.get("window");

class HomeOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: "",
      sppedChecked: false,
      ordinaryCheck: false,
      eveningChecked: false,
      morningCheckde: false,
      isDateTimePickerVisible: false,
      Date: Localization.chooseYourAppoinment
    };
  }

  _handlePress = () => {
    this.props.navigation.navigate("HomeExplainScreen", {
      name: this.props.navigation.state.params.name
    });
  };
  handleDatePicked = date => {
    let Date = String(date)
      .split(" ")
      .filter((t, i) => i !== 0 && i < 3)
      .join(" ");
    console.log("A Date has been picked: ", Date);

    this.setState({ isDateTimePickerVisible: false, Date });
  };
  render() {
    const { rtl } = this.props;
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingVertical: 30,
        width: "90%",
        alignSelf: "center",
        backgroundColor: "#f1f1f1"
      },
      yourLocation: {
        color: Colors.yellow,
        fontSize: 18,
        fontWeight: "600",
        textAlign: rtl ? "right" : "left",
        marginVertical: 10
      },
      mapBox: {
        width: "100%",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#7d6971",
        height: 200,
        marginVertical: 5
      },
      input: {
        width: "100%",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#70284b",
        height: 40,
        marginVertical: 5,
        backgroundColor: "#ffffff",
        paddingVertical: 10,
        paddingHorizontal: 10,
        fontSize: 20,
        fontWeight: "500",
        color: "#70284b"
      },
      next: {
        borderRadius: 15,
        backgroundColor: Colors.yellow,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: 130,
        height: 40,
        marginHorizontal: 20,
        alignSelf: this.props.rtl ? "flex-start" : "flex-end"
      },
      textNext: {
        color: "white",
        fontSize: 14,
        fontWeight: "300"
      },
      chexkBoxROw: {
        flexDirection: this.props.rtl ? "row" : "row-reverse",
        marginVertical: 10,
        paddingHorizontal: 10,
        // justifyContent: !this.props.rtl ? "flex-start" : "flex-end",
        // alignItems: "center",
        justifyContent: this.props.rtl ? "flex-start" : "flex-end"
      },
      chexkBoxROwText: {
        paddingHorizontal: 5,
        fontWeight: "600",
        fontSize: 16,
        color: "#70284b",
        textAlign: this.props.rtl ? "right" : "left"
      },
      chexkBoxROwButton: {},
      chooseAppoinment: {
        borderRadius: 14,
        flexDirection: this.props.rtl ? "row" : "row-reverse",
        borderWidth: 1,
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        marginVertical: 5,
        marginLeft: 10,
        backgroundColor: "#f1f1f1"
      }
    });
    const { name = "" } = this.props.navigation.state.params;

    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#f1f1f1" }}>
        <KeyboardAvoidingView behavior="position">
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this.handleDatePicked}
            onCancel={() => this.setState({ isDateTimePickerVisible: false })}
          />
          <Header
            name={`${Localization.order} ${name}`}
            hasback
            navigation={this.props.navigation}
          />

          <View style={styles.container}>
            <Text style={styles.yourLocation}>
              {Localization.selectYourRequestSpeed}
            </Text>

            <View style={styles.chexkBoxROw}>
              <Text style={styles.chexkBoxROwText}>
                {Localization.speedWithin4Housrs}{" "}
              </Text>
              <TouchableOpacity
                style={styles.chexkBoxROwButton}
                onPress={() =>
                  this.setState({
                    sppedChecked: !this.state.sppedChecked,
                    ordinaryCheck: false
                  })
                }
              >
                <CHeckBox selected={this.state.sppedChecked} />
              </TouchableOpacity>
            </View>
            <View style={styles.chexkBoxROw}>
              <Text style={styles.chexkBoxROwText}>
                {Localization.ordinaryWithIn7hHours}{" "}
              </Text>
              <TouchableOpacity
                style={styles.chexkBoxROwButton}
                onPress={() =>
                  this.setState({
                    ordinaryCheck: !this.state.ordinaryCheck,
                    sppedChecked: false
                  })
                }
              >
                <CHeckBox selected={this.state.ordinaryCheck} />
              </TouchableOpacity>
            </View>

            <Text style={styles.yourLocation}>
              {Localization.chooseYourAppoinment}
            </Text>
            <TouchableOpacity
              style={styles.chooseAppoinment}
              onPress={() =>
                this.setState({
                  isDateTimePickerVisible: !this.state.isDateTimePickerVisible
                })
              }
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text
                  style={{
                    color: "black",
                    textAlign: "center",
                    fontWeight: "400",
                    fontSize: 18
                  }}
                >
                  {this.state.Date}
                </Text>
              </View>
              <View
                style={{
                  height: "100%",
                  width: 50,
                  borderLeftWidth: this.props.rtl ? 1 : 0,
                  borderRightWidth: this.props.rtl ? 0 : 1,
                  borderColor: "black",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Image
                  source={CalenderImage}
                  style={{ width: 30, height: 30 }}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.chexkBoxROw}>
              <Text style={styles.chexkBoxROwText}>
                {Localization.morningFrom8to12}
              </Text>
              <TouchableOpacity
                style={styles.chexkBoxROwButton}
                onPress={() =>
                  this.setState({
                    morningCheckde: !this.state.morningCheckde,
                    eveningChecked: false
                  })
                }
              >
                <CHeckBox selected={this.state.morningCheckde} />
              </TouchableOpacity>
            </View>
            <View style={styles.chexkBoxROw}>
              <Text style={styles.chexkBoxROwText}>
                {Localization.ordinaryWithIn7hHours}{" "}
              </Text>
              <TouchableOpacity
                style={styles.chexkBoxROwButton}
                onPress={() =>
                  this.setState({
                    eveningChecked: !this.state.eveningChecked,
                    morningCheckde: false
                  })
                }
              >
                <CHeckBox selected={this.state.eveningChecked} />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.next} onPress={this._handlePress}>
            <Text style={styles.textNext}>{Localization.next}</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const mapState = state => {
  return {
    ...state.rtl
  };
};

export default connect(mapState)(HomeOrder);
