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
  Image,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";
import ImagePicker from "react-native-image-crop-picker";

import Localization from "../localization/localization";
import Header from "../components/AppHeader";
import { Colors } from "../styles";
import DateTimePicker from "react-native-modal-datetime-picker";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import CalenderImage from "../../img/calenderImage.png";

import { DoToast } from "../../../App";

import { CreateNewOrder } from "../actions";
import AudioModal from "../../../audio";

const { width, height } = Dimensions.get("window");

class HomeOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: "",
      image: "",
      showModal: false,
      base64: "",
      showConfirmation: false,
      confirmed: false
    };
  }

  _handlePress = () => {
    // if (this.state.image === "") {
    //   DoToast(`${Localization.please} ${Localization.attacImage}`);
    //   return;
    // }
    // if (this.state.base64 === "") {
    //   DoToast(`${Localization.please} ${Localization.recordYourNotes}`);
    //   return;
    // }
    // if (this.state.val === "") {
    //   DoToast(`${Localization.please} ${Localization.writeNotes}`);
    //   return;
    // }
    if (!this.state.confirmed) {
      this.setState({ showConfirmation: true });
      return;
    }
    console.log("====================================");
    console.log(this.props.navigation.state.params);
    console.log("====================================");
    //this.props.navigation.popToTop();
    let d = this.props.navigation.state.params;
    delete d.name;
    this.props.createNewOrderNow(
      this.props.isConnected,
      this.props.token,
      {
        ...d,
        image: this.state.image,
        note: this.state.val,
        voice: this.state.base64
      },
      this.props.navigation
    );
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
        fontSize: 20,
        fontWeight: "800",
        textAlign: rtl ? "right" : "left",
        marginVertical: 20
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
        width: "90%",
        alignSelf: "center",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#70284b",
        height: 100,
        marginVertical: 5,
        backgroundColor: "#ffffff",
        paddingVertical: 10,
        paddingHorizontal: 5,
        textAlign: "auto",

        fontSize: 14,
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
        alignSelf: this.props.rtl ? "flex-start" : "flex-end",
        marginVertical: 40
      },
      textNext: {
        color: "white",
        fontSize: 16,
        fontWeight: "800"
      },
      chexkBoxROw: {
        flexDirection: this.props.rtl ? "row" : "row-reverse",
        marginVertical: 10,
        paddingHorizontal: 10,
        justifyContent: !this.props.rtl ? "flex-start" : "flex-end",
        alignItems: "center"
      },
      chexkBoxROwText: {
        paddingHorizontal: 5,
        fontWeight: "600",
        fontSize: 16,
        color: "#70284b",
        textAlign: this.props.rtl ? "right" : "left"
      },
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
      },
      rowExplain: {
        flexDirection: !this.props.rtl ? "row" : "row-reverse",
        alignItems: "center",

        height: height / 10
      },
      rowExplainText: {
        flex: 3,
        borderRadius: 14,
        justifyContent: "center",
        borderWidth: 1,
        marginHorizontal: 5,
        height: "90%",
        padding: 10,
        borderColor: "#70284b"
      },
      rowExplainTouchable: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 14,
        marginHorizontal: 5,
        height: "90%",
        borderColor: "#70284b"
      }
    });
    const { name = "" } = this.props.navigation.state.params;

    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#f1f1f1" }}>
        <KeyboardAvoidingView behavior="position">
          <Header
            name={`${Localization.order} ${name}`}
            hasback
            navigation={this.props.navigation}
          />
          {this.state.showConfirmation && (
            <View
              style={{
                position: "absolute",
                top: height / 3,
                right: "10%",
                left: "10%",
                height: height / 4,
                backgroundColor: "#ffffff",
                borderRadius: 14,
                zIndex: 1000,
                paddingVertical: 10
              }}
            >
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "bold",
                    color: Colors.yellow
                  }}
                >{`${Localization.order} ${name}`}</Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 12,
                    fontWeight: "bold",
                    marginVertical: 10,
                    fontWeight: "800"
                  }}
                >{`${Localization.areYouSureOfProccessingTheRequest} ?`}</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: this.props.rtl ? "row-reverse" : "row",
                  alignItems: "center",
                  justifyContent: "space-around"
                  //  paddingHorizontal: 30
                }}
              >
                <TouchableOpacity
                  style={{
                    width: 90,
                    height: 50,
                    backgroundColor: Colors.yellow,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 11
                  }}
                  onPress={() => {
                    this.setState({ confirmed: true, showConfirmation: false });
                    setTimeout(() => this._handlePress(), 1000);
                  }}
                >
                  <Text style={{ color: "white", textAlign: "center" }}>
                    {Localization.confirm}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: 90,
                    height: 50,
                    borderColor: Colors.yellow,
                    borderWidth: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 11
                  }}
                  onPress={() => this.setState({ showConfirmation: false })}
                >
                  <Text style={{ color: Colors.yellow, textAlign: "center" }}>
                    {Localization.close}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          <View style={styles.container}>
            <Text style={styles.yourLocation}>
              {Localization.explainYourProblem}
            </Text>
            <View style={styles.rowExplain}>
              <View style={styles.rowExplainText}>
                <Text
                  style={{
                    color: "#70284b",
                    fontSize: 22,
                    fontWeight: "800",
                    paddingVertical: 10
                  }}
                >
                  {Localization.attacImage}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  ImagePicker.openPicker({
                    width: 300,
                    height: 400,
                    cropping: true,
                    includeBase64: true
                  })
                    .then(image => {
                      console.log(
                        "=================success==image pick================="
                      );
                      console.log(image.data);
                      console.log(
                        "=================success=image pic=================="
                      );
                      this.setState({ image: image.data });
                    })
                    .catch(e => {
                      console.log(
                        "=================error==image pic================="
                      );
                      console.log(e);
                      console.log(
                        "=================error==image pic================="
                      );
                    })
                }
                style={styles.rowExplainTouchable}
              >
                <FontAwesome
                  size={40}
                  style={{ color: Colors.yellow }}
                  name="file-photo-o"
                />
              </TouchableOpacity>
            </View>

            <View style={styles.rowExplain}>
              <View style={styles.rowExplainText}>
                {this.state.showModal ? (
                  <AudioModal
                    getimageBase={base64 => {
                      this.setState({ base64 });
                    }}
                    showModal={this.state.showModal}
                  />
                ) : (
                  <Text
                    style={{
                      color: "#70284b",
                      fontSize: 22,
                      fontWeight: "800",
                      paddingVertical: 10
                    }}
                  >
                    {Localization.recordYourNotes}
                  </Text>
                )}
              </View>
              <TouchableOpacity
                onPress={() =>
                  this.setState({ showModal: !this.state.showModal })
                }
                style={styles.rowExplainTouchable}
              >
                <FontAwesome
                  name="microphone"
                  color={Colors.yellow}
                  size={40}
                />
              </TouchableOpacity>
            </View>
          </View>

          <TextInput
            placeholder={Localization.writeNotes}
            value={this.state.val}
            onChangeText={val => this.setState({ val })}
            style={styles.input}
            placeholderTextColor="#70284b"
          />
          <TouchableOpacity style={styles.next} onPress={this._handlePress}>
            {this.props.createOrderLoading ? (
              <ActivityIndicator size="large" color="white" />
            ) : (
              <Text style={styles.textNext}>{Localization.next}</Text>
            )}
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const mapState = state => {
  return {
    ...state.rtl,
    ...state.orders,
    ...state.auth,
    ...state.netInfo
  };
};

const mapDispatch = dispatch => {
  return {
    createNewOrderNow: (isConnected, token, data, navigation) => {
      if (!isConnected) {
        DoToast(Localization.noInternetzconnection);
        return;
      }
      CreateNewOrder(token, data, navigation, dispatch);
    }
  };
};

export default connect(
  mapState,
  mapDispatch
)(HomeOrder);
