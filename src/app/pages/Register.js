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
  KeyboardAvoidingView,
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
import { colors } from "react-native-elements";

import { Register } from "../actions";

class RegisterClass extends Component {
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
              height: hp("20%"),
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              style={{ resizeMode: "contain", width: "60%", height: "60%" }}
              source={images.logo}
            />
          </View>
          <KeyboardAvoidingView behavior="padding">
            <Formik
              initialValues={{
                userName: null,
                phone: null,
                email: null,
                password: null
              }}
              onSubmit={values =>
                this.props.registerNow(
                  values.userName,
                  values.email,
                  values.phone,
                  values.password,
                  this.props.navigation
                )
              }
              validationSchema={Yup.object().shape({
                userName: Yup.string().required(localization.userNameError),
                email: Yup.string()
                  .email()
                  .required(localization.emailError),
                password: Yup.string()
                  .min(6)
                  .required(localization.passwordError)
                // phone: Yup.string()
                //   //    .matches(/^(968|\+968)(9)[0-9](([0-9]){6}|([0-9]){5})$/)
                //   .required(localization.passwordError)
                //  // .min(11, localization.passwordError)
                //https://ipfs.io/ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco/wiki/Telephone_numbers_in_Oman.html
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
                <View
                  style={{ flex: 1, width: "100%", flexDirection: "column" }}
                >
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
                        name="account"
                        size={hp("5%")}
                        color="white"
                      />
                      <TextInput
                        onTouch={setFieldTouched}
                        underlineColorAndroid={
                          touched.userName && errors.userName ? "red" : "#eee"
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
                        placeholder={localization.userName}
                        returnKeyType="next"
                        onSubmitEditing={() => this._email.focus()}
                        onChangeText={val => setFieldValue("userName", val)}
                        autoCapitalize="none"
                        autoCorrect={false}
                      />
                    </View>
                    {touched.userName && errors.userName && (
                      <Text style={styles.TextError}>
                        {localization.userNameError}
                      </Text>
                    )}
                  </View>
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
                        keyboardType="email-address"
                        onTouch={setFieldTouched}
                        ref={ref => (this._email = ref)}
                        onSubmitEditing={() => this._phone.focus()}
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
                        name="cellphone"
                        size={hp("5%")}
                        color="white"
                      />
                      <TextInput
                        keyboardType="phone-pad"
                        onTouch={setFieldTouched}
                        ref={ref => (this._phone = ref)}
                        onSubmitEditing={() => this._password.focus()}
                        underlineColorAndroid={
                          touched.phone && errors.phone ? "red" : "#eee"
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
                        placeholder={localization.phoneNumber}
                        returnKeyType="next"
                        onChangeText={val => setFieldValue("phone", val)}
                        autoCapitalize="none"
                        autoCorrect={false}
                      />
                    </View>
                    {touched.phone && errors.phone && (
                      <Text style={styles.TextError}>
                        {localization.phoneError}
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
                        ref={ref => (this._password = ref)}
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
                      {this.props.loadingRegister ? (
                        <ActivityIndicator color="white" size="large" />
                      ) : (
                        <Text style={[styles.Text, { color: Colors.white }]}>
                          {localization.register}
                        </Text>
                      )}
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          </KeyboardAvoidingView>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              color: Colors.white,
              marginTop: hp("7%")
            }}
          >
            <Text style={[styles.Text]}>{localization.haveAccout}</Text>
            <TouchableOpacity
              style={{ justifyContent: "center" }}
              onPress={() => this.props.navigation.navigate("SignIn")}
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
                {localization.login}
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
    registerNow: (name, email, mobile, password, navigation) =>
      Register(name, email, mobile, password, navigation, dispatch)
  };
};
export default connect(
  mapStateToProps,
  DispatshToProps
)(RegisterClass);
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
