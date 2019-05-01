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
import MyCheckbox from "../components/checkbox";
import { Colors } from "../styles";

import { Login } from "../actions";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remeberMe: false
    };
  }

  render() {
    let rtl = this.props.rtl;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <View
            style={{
              flex: 1,
              height: hp("30%"),
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              style={{ resizeMode: "contain", width: "60%", height: "60%" }}
              source={images.logo}
            />
          </View>
          <Formik
            initialValues={{
              email: null,
              password: null
            }}
            onSubmit={values => {
              this.props.loginNow(
                values.email,
                values.password,
                this.state.remeberMe,
                this.props.navigation
              );
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email()
                .required(localization.emailError),
              password: Yup.string()

                .min(6)
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
              isSubmitting
            }) => (
              <View style={{ flex: 1, width: "100%", flexDirection: "column" }}>
                <View style={{ height: hp("10%") }}>
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
                      name="email"
                      size={hp("5%")}
                      color="white"
                    />
                    <TextInput
                      onTouch={setFieldTouched}
                      underlineColorAndroid={
                        touched.email && errors.email ? "red" : "#eee"
                      }
                      textAlignVertical="center"
                      placeholderTextColor="white"
                      style={[
                        styles.TextInput,
                        {
                          textAlign: rtl ? "right" : "left",
                          writingDirection: "auto"
                        }
                      ]}
                      placeholder={localization.email}
                      returnKeyType="next"
                      onChangeText={val => setFieldValue("email", val)}
                      onSubmitEditing={() => this._password.focus()}
                      autoCapitalize="none"
                      autoCorrect={false}
                    />
                  </View>
                  {touched.email && errors.email && (
                    <Text style={styles.TextError}>
                      {localization.emailError}
                    </Text>
                  )}
                </View>
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
                      color="white"
                    />
                    <TextInput
                      clearTextOnFocus={false}
                      onTouch={setFieldTouched}
                      underlineColorAndroid={
                        touched.password && errors.password ? "red" : "#eee"
                      }
                      textAlignVertical="center"
                      placeholderTextColor="white"
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
                <View
                  style={[
                    styles.container2,
                    { flexDirection: rtl ? "row-reverse" : "row" }
                  ]}
                >
                  <MyCheckbox
                    label={localization.remeberMe}
                    onChange={state => {
                      this.setState({ remeberMe: state });
                    }}
                    style={{ flexDirection: rtl ? "row-reverse" : "row" }}
                    textStyle={[
                      styles.Text,
                      { fontSize: hp("1.8%"), alignSelf: "center" }
                    ]}
                  />

                  <TouchableOpacity
                    onPress={() => {}}
                    activeOpacity={0.5}
                    style={{ alignSelf: "center" }}
                  >
                    <Text style={[styles.Text, { fontSize: hp("1.8%") }]}>
                      {localization.didYouForgetPassword}
                    </Text>
                  </TouchableOpacity>
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
                    {this.props.loadingLogin ? (
                      <ActivityIndicator size="large" color="white" />
                    ) : (
                      <Text style={[styles.Text, { color: Colors.white }]}>
                        {localization.login}
                      </Text>
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              color: Colors.white,
              marginTop: hp("7%")
            }}
          >
            <Text style={[styles.Text]}>{localization.donotHaveAccout}</Text>
            <TouchableOpacity
              style={{ justifyContent: "center" }}
              onPress={() => this.props.navigation.navigate("Register")}
            >
              <Text
                style={[
                  styles.Text,
                  {
                    color: Colors.orange,
                    borderBottomColor: Colors.orange,
                    borderBottomWidth: 1
                  }
                ]}
              >
                {localization.register}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    ...state.rtl,
    ...state.auth
  };
};
const DispatshToProps = dispatch => {
  return {
    RTL: trueOrFalse => dispatch(ChangeRtl(trueOrFalse)),
    loginNow: (email, password, remeberMe, navigation) =>
      Login(email, password, remeberMe, navigation, dispatch)
  };
};
export default connect(
  mapStateToProps,
  DispatshToProps
)(SignIn);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainDark
  },
  TextInput: {
    flex: 0.7,
    fontSize: hp("2%"),
    fontWeight: "bold",
    color: "white",
    height: wp("15%"),
    paddingVertical: hp("2%"),
    paddingLeft: wp("10%"),
    paddingRight: wp("10%"),
    fontFamily: "Cairo-Bold"
  },
  TextError: {
    width: wp("100%"),
    fontSize: hp("1.4%"),
    color: "white",
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
    color: Colors.white,
    textAlign: "center",
    color: Colors.white,
    fontFamily: "Cairo-Bold"
  }
});
