import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  ScrollView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol
} from "react-native-responsive-screen";
import Toast, { DURATION } from "react-native-easy-toast";
import localization from "../localization/localization";
import { connect } from "react-redux";
import { images } from "../../img";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Formik } from "formik";
import * as Yup from "yup";
import { ChangeRtl } from "../actions/Rtl";
import { Colors } from "../styles";

import { Login } from "../actions";
import Localization from "../localization/localization";
import Header from "../components/AppHeader";
import { DoToast } from "../../../App";

import axios from "axios";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remeberMe: false,
      loading: false
    };
  }

  render() {
    let rtl = this.props.rtl;

    return (
      <View style={styles.container}>
        <Header
          hasback
          name={localization.changePassword}
          navigation={this.props.navigation}
        />
        <ScrollView style={styles.container}>
          <Formik
            initialValues={{
              password: null,
              confirmPssword: null
            }}
            validateOnChange
            validateOnBlur
            onSubmit={async values => {
              let t =
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImVhNTZkMmY3ZDViNjM0NjM5NGM1OGMxZDIzZGM2Y2NiYjJjMGNmZDhlMDM2OWZhNWI5MGE3YjQzN2UwYTllMWNmNzNkMzQ3NDNjNmMwYTg5In0.eyJhdWQiOiIzIiwianRpIjoiZWE1NmQyZjdkNWI2MzQ2Mzk0YzU4YzFkMjNkYzZjY2JiMmMwY2ZkOGUwMzY5ZmE1YjkwYTdiNDM3ZTBhOWUxY2Y3M2QzNDc0M2M2YzBhODkiLCJpYXQiOjE1NTY0NzQ2MTcsIm5iZiI6MTU1NjQ3NDYxNywiZXhwIjoxNTg4MDk3MDE3LCJzdWIiOiIxNSIsInNjb3BlcyI6WyIqIl19.mFIt-3r06ykJKqqqTtmdmlZ7_x3gI_c92UyYeQKCRIe_wgmSf4kqffDFhnpz8bxq6qutVQKnnhkjGoqCIEPFGwWKTb65LEVPaMUGVSCr5aUc7c7YfzkkPbQsBiCXzkB5FFEMhuuRV36SM4ua8m2HbJp3CcrUEHLlI9Q-jhUin3h6q7VNeWQxiMkxZ5ubbEmRr_6uAMqAyTe_2CmT3LjbahAVeMdzBastFwCNTZAX30H8OlH3_5_jirCE4K5xi37Nyzp-7vBeSa1JvBh5vY4OEBzydNwcR5urj6zWLqtQ7akRPV0SSfuH2o7Jc7lTK0_uGpoMMBDNsw6yoCjroRCYZdIsEcKEfYCi6q2iWhhPvFvahnrVLWkADL5Mxbu4LeHvdGbyZZ9I2egrQzIr1xGKWu2H24jKgsyxk-rHNIdHOnNfFaKHbMIIX44GX5vq-nXzogBpia4RoCmyr4o1QeqcBl_x0hgP1Lt08oXfDK0Hi-Bl-ucbLy_wj06OHb3I1Csx5Hf43EtLEKxVzmn21ZhJbjoOKHy56YcetLzpfTIF-dHA1ST6K9BsWgRrVEagZc3U1zKoB-46xRD1DJvv_zcsSIZrl1LdjEYv0-SULhEXAw9xAiAvMiDXETUjIdLOms8cxYibE-RbEkBqpYSp1gMK0ySfLqveIv9_h8lC6ckZ-go";
              // axios.defaults.headers.common = {
              //   Authorization: `Bearer ${this.props.token}`
              // };
              const config = {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                  Authorization: `Bearer ${this.props.token}`
                }
              };
              console.log("===============token=====================");
              console.log(this.props.token);
              console.log("====================================");
              let password = values.password;
              if (!this.props.isConnected) {
                DoToast(Localization.noInternetzconnection);
                return;
              }
              this.setState({ loading: true });
              try {
                let r = await axios.patch(
                  "http://trust.shobeek-lobeek.com/api/me/update",
                  { password },
                  config
                );
                console.log(
                  "=========success forger==========================="
                );
                console.log(r);
                console.log("====================================");
                this.setState({ loading: false });
                DoToast(Localization.yourOrderDoneSuccessfully);
                this.props.navigation.goBack();
              } catch (error) {
                this.setState({ loading: false });
                DoToast(Localization.thereIsSomeTHingWron);
                console.log(
                  "====fail password================================"
                );
                console.log(error.message);
                console.log("====================================");
              }
            }}
            validationSchema={Yup.object().shape({
              password: Yup.string()
                .min(6)
                .required(localization.passwordError),
              confirmPssword: Yup.string()
                .min(6)
                .oneOf([Yup.ref("password"), null], "notmatch")
                .required(localization.passwordError)
            })}
            render={({
              values,
              handleSubmit,
              setFieldValue,
              errors,
              touched,
              setFieldTouched,
              isValid,
              isSubmitting,
              handleBlur
            }) => (
              <View style={{ flex: 1, width: "100%", flexDirection: "column" }}>
                <View style={{ height: hp("10%") }} />
                <View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: rtl ? "row-reverse" : "row",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <MaterialCommunityIcons
                      style={{ position: "absolute", left: wp("10%") }}
                      name="lock"
                      size={hp("5%")}
                      color={Colors.yellow}
                    />
                    <TextInput
                      clearTextOnFocus={false}
                      onTouch={setFieldTouched}
                      underlineColorAndroid={
                        touched.password && errors.password
                          ? "red"
                          : Colors.yellow
                      }
                      textAlignVertical="center"
                      placeholderTextColor={Colors.yellow}
                      style={[
                        styles.TextInput,
                        { textAlign: rtl ? "right" : "left" }
                      ]}
                      placeholder={localization.password}
                      returnKeyType="done"
                      secureTextEntry={true}
                      ref={ref => (this._password = ref)}
                      onChangeText={val => setFieldValue("password", val)}
                      autoCapitalize="none"
                      autoCorrect={false}
                    />
                  </View>
                  {touched.password && errors.password && (
                    <Text style={styles.TextError}>
                      {localization.passwordError}
                    </Text>
                  )}
                </View>
                <View>
                  <View
                    style={{
                      flex: 1,
                      marginVertical: 10,
                      flexDirection: rtl ? "row-reverse" : "row",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <MaterialCommunityIcons
                      style={{ position: "absolute", left: wp("10%") }}
                      name="lock"
                      size={hp("5%")}
                      color={Colors.yellow}
                    />
                    <TextInput
                      clearTextOnFocus={false}
                      onTouch={setFieldTouched}
                      underlineColorAndroid={
                        touched.confirmPssword && errors.confirmPssword
                          ? "red"
                          : Colors.yellow
                      }
                      textAlignVertical="center"
                      placeholderTextColor={Colors.yellow}
                      style={[
                        styles.TextInput,
                        { textAlign: rtl ? "right" : "left" }
                      ]}
                      placeholder={localization.confirmPssword}
                      returnKeyType="done"
                      secureTextEntry={true}
                      ref={ref => (this._password = ref)}
                      onChangeText={val => setFieldValue("confirmPssword", val)}
                      autoCapitalize="none"
                      autoCorrect={false}
                    />
                  </View>
                  {touched.confirmPssword &&
                    errors.confirmPssword &&
                    (errors.confirmPssword === "notmatch" ? (
                      <Text style={styles.TextError}>
                        {localization.passwordNotMatch}
                      </Text>
                    ) : (
                      <Text style={styles.TextError}>
                        {localization.passwordError}
                      </Text>
                    ))}
                </View>

                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: hp("7%")
                  }}
                >
                  <TouchableOpacity
                    style={{
                      width: wp("60%"),
                      elevation: 5,
                      height: hp("7%"),
                      backgroundColor: Colors.orange,
                      borderRadius: hp("1%"),
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                    onPress={handleSubmit}
                    activeOpacity={0.5}
                  >
                    {this.state.loading ? (
                      <ActivityIndicator size="large" color="white" />
                    ) : (
                      <Text style={[styles.Text, { color: Colors.white }]}>
                        {localization.changePassword}
                      </Text>
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    ...state.rtl,
    ...state.auth,
    ...state.netInfo
  };
};
const DispatshToProps = dispatch => {
  return {
    RTL: trueOrFalse => dispatch(ChangeRtl(trueOrFalse)),
    loginNow: (email, password, navigation) =>
      Login(email, password, navigation, dispatch),
    changePassword: isConnected => {
      if (!isConnected) {
        DoToast(Localization.noInternetzconnection);
        return;
      }
    }
  };
};
export default connect(
  mapStateToProps,
  DispatshToProps
)(SignIn);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1"
  },
  TextInput: {
    flex: 0.7,
    fontSize: hp("2%"),
    fontWeight: "bold",
    color: Colors.yellow,
    height: wp("15%"),
    paddingVertical: hp("2%"),
    paddingLeft: wp("10%"),
    paddingRight: wp("10%"),
    fontFamily: "Cairo-Bold"
  },
  TextError: {
    width: wp("100%"),
    fontSize: hp("1.4%"),
    color: "red",
    textAlign: "center",
    fontFamily: "Cairo-Bold"
  },
  container2: {
    width: wp("80%"),
    justifyContent: "space-between",
    alignSelf: "center",
    marginTop: hp("3%")
  },
  Text: {
    fontSize: hp("2.5%"),
    color: Colors.yellow,
    textAlign: "center",
    color: Colors.yellow,
    fontFamily: "Cairo-Bold"
  }
});
