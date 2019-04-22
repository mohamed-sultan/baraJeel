import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol
} from "react-native-responsive-screen";
import { Header } from "../components/Header";

import BG from "../../src/Imag/Artboard12/BG.png";
import Edit from "../../src/Imag/Artboard12/Edit.png";
import Delete from "../../src/Imag/Artboard12/Delete.png";

class Artboard12 extends Component {
  constructor(props) {
    super();
    this.state = {
      books: [
        {
          type: "كلاسيك",
          date: "السبت 26 يناير 2019",
          src_des: "من الرياض الي المدينة",
          number: "2 فرد",
          trip_num: 532963
        }
      ]
    };
  }
  render() {
    return (
      <ImageBackground source={BG} style={styles.pageBG}>
        {/* HEADER */}
        <Header title="حجوزاتي" />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              marginVertical: hp("2%"),
              borderColor: "#7E7560",
              borderWidth: wp("0.2%"),
              width: wp("84%"),
              height: hp("5%"),
              flexDirection: "row"
            }}
          >
            <TouchableOpacity disabled={true}>
              <Text
                style={{
                  width: wp("42%"),
                  height: hp("4.9%"),
                  backgroundColor: "rgba(152, 145, 128, 0.7)",
                  textAlignVertical: "center",
                  textAlign: "center",
                  fontSize: wp("4%"),
                  fontWeight: "500",
                  color: "white"
                }}
              >
                {" "}
                حجوزات حالية{" "}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  width: wp("42%"),
                  height: hp("4.9%"),
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                  textAlignVertical: "center",
                  textAlign: "center",
                  fontSize: wp("4%"),
                  fontWeight: "500",
                  color: "#989180"
                }}
              >
                {" "}
                حجوزات سابقة{" "}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <FlatList
            data={this.state.books}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    borderRadius: wp("2%"),
                    borderColor: "#7E7560",
                    borderWidth: wp("0.2%"),
                    height: hp("20%"),
                    width: wp("84%"),
                    margin: hp("1%")
                  }}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "row",
                      backgroundColor: "rgba(255, 255, 255, 0.85)"
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "right",
                        textAlignVertical: "center",
                        fontSize: wp("4.2%"),
                        color: "black",
                        padding: wp("0.4%"),
                        width: wp("57%"),
                        fontWeight: "700"
                      }}
                    >
                      {" "}
                      {item.type}
                    </Text>
                    <Text
                      style={{
                        textAlign: "right",
                        textAlignVertical: "center",
                        fontSize: wp("4.2%"),
                        color: "#7E7560",
                        padding: wp("0.4%"),
                        width: wp("26%"),
                        fontWeight: "700"
                      }}
                    >
                      {" "}
                      نوع الرحلة{" "}
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "row",
                      backgroundColor: "rgba(255, 255, 255, 0.85)"
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "right",
                        textAlignVertical: "center",
                        fontSize: wp("4.2%"),
                        color: "black",
                        padding: wp("0.4%"),
                        width: wp("57%"),
                        fontWeight: "700"
                      }}
                    >
                      {" "}
                      {item.date}
                    </Text>
                    <Text
                      style={{
                        textAlign: "right",
                        textAlignVertical: "center",
                        fontSize: wp("4.2%"),
                        color: "#7E7560",
                        padding: wp("0.4%"),
                        width: wp("26%"),
                        fontWeight: "700"
                      }}
                    >
                      {" "}
                      تاريخ الرحلة{" "}
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "row",
                      backgroundColor: "rgba(255, 255, 255, 0.85)"
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "right",
                        textAlignVertical: "center",
                        fontSize: wp("4.2%"),
                        color: "black",
                        padding: wp("0.4%"),
                        width: wp("57%"),
                        fontWeight: "700"
                      }}
                    >
                      {" "}
                      {item.src_des}
                    </Text>
                    <Text
                      style={{
                        textAlign: "right",
                        textAlignVertical: "center",
                        fontSize: wp("4.2%"),
                        color: "#7E7560",
                        padding: wp("0.4%"),
                        width: wp("26%"),
                        fontWeight: "700"
                      }}
                    >
                      {" "}
                      القيام والوصول{" "}
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "row",
                      backgroundColor: "rgba(255, 255, 255, 0.85)"
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "right",
                        textAlignVertical: "center",
                        fontSize: wp("4.2%"),
                        color: "black",
                        padding: wp("0.4%"),
                        width: wp("57%"),
                        fontWeight: "700"
                      }}
                    >
                      {" "}
                      {item.number}
                    </Text>
                    <Text
                      style={{
                        textAlign: "right",
                        textAlignVertical: "center",
                        fontSize: wp("4.2%"),
                        color: "#7E7560",
                        padding: wp("0.4%"),
                        width: wp("26%"),
                        fontWeight: "700"
                      }}
                    >
                      {" "}
                      عدد الأفراد{" "}
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "row",
                      backgroundColor: "rgba(255, 255, 255, 0.85)"
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "right",
                        textAlignVertical: "center",
                        fontSize: wp("4.2%"),
                        color: "black",
                        padding: wp("0.4%"),
                        width: wp("57%"),
                        fontWeight: "700"
                      }}
                    >
                      {" "}
                      {item.trip_num}
                    </Text>
                    <Text
                      style={{
                        textAlign: "right",
                        textAlignVertical: "center",
                        fontSize: wp("4.2%"),
                        color: "#7E7560",
                        padding: wp("0.4%"),
                        width: wp("26%"),
                        fontWeight: "700"
                      }}
                    >
                      {" "}
                      رقم الرحلة{" "}
                    </Text>
                  </View>
                  <View
                    style={{
                      position: "absolute",
                      flexDirection: "row",
                      bottom: wp("1%"),
                      left: wp("1%")
                    }}
                  >
                    <TouchableOpacity>
                      <Image
                        source={Edit}
                        style={{
                          width: wp("7%"),
                          height: wp("7%"),
                          resizeMode: "contain",
                          margin: wp("1%")
                        }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image
                        source={Delete}
                        style={{
                          width: wp("7%"),
                          height: wp("7%"),
                          resizeMode: "contain",
                          margin: wp("1%")
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
            keyExtractor={item => toString(item.type)}
            showsVerticalScrollIndicator={false}
            style={{ height: hp("80%") }}
          />
        </View>
      </ImageBackground>
    );
  }
}

export default Artboard12;

const styles = StyleSheet.create({
  header: {
    height: hp("7%"),
    backgroundColor: "#A07532",
    justifyContent: "space-between",
    alignItems: "center",
    padding: wp("5%"),
    flexDirection: "row"
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
    fontWeight: "bold"
  },
  image6_5: {
    width: wp("6.5%"),
    height: wp("6.5%"),
    resizeMode: "contain"
  },
  logo: {
    width: wp("65%"),
    height: hp("15%"),
    resizeMode: "contain"
  },
  pageBG: {
    flex: 1,
    resizeMode: "contain"
  }
});
