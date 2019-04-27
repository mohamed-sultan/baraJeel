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
import MapView, { Marker } from "react-native-maps";

import Localization from "../localization/localization";
import Header from "../components/AppHeader";
import { Colors } from "../styles";
import LocationIcon from "../../img/loc.png";

import { DoToast } from "../../../App";

const { width, height } = Dimensions.get("window");

class HomeOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: "",
      initialRegion: {
        latitude: 23.614328,
        longitude: 58.545284,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      region: {
        latitude: 23.614328,
        longitude: 58.545284,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      coordinate: {
        latitude: 23.614328,
        longitude: 58.545284
      }
    };
  }

  onRegionChange(region) {
    this.setState({ region });
  }
  _handlePress = () => {
    if (this.state.val === "") {
      DoToast(`${Localization.please} ${Localization.determineYourLocation}`);
      return;
    }
    this.props.navigation.navigate("HomeOrderNextScreen", {
      name: this.props.navigation.state.params.name,
      address: this.state.val,
      lat: this.state.region.latitude,
      long: this.state.region.longitude,
      department_id: this.props.navigation.state.params.id
    });
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
        fontSize: 16,
        fontWeight: "600",
        textAlign: rtl ? "right" : "left"
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
          <View style={styles.container}>
            <Text style={styles.yourLocation}>{Localization.yourLocation}</Text>
            <View style={styles.mapBox}>
              <MapView
                style={{ flex: 1, margin: 5, borderRadius: 20, borderWidth: 1 }}
                region={this.state.region}
                onRegionChangeComplete={r => this.onRegionChange(r)}
              >
                <Marker
                  coordinate={{
                    latitude: this.state.region.latitude,
                    longitude: this.state.region.longitude
                  }}
                  onSelect={e => console.log("onSelect", e)}
                  onDrag={e => console.log("onDrag", e)}
                  onDragStart={e => console.log("onDragStart", e)}
                  onDragEnd={e => console.log("onDragEnd", e)}
                  onPress={e => console.log("onPress", e)}
                  draggable
                >
                  <Image
                    source={LocationIcon}
                    style={{ height: 30, width: 30 }}
                    resizeMode="contain"
                  />
                </Marker>
              </MapView>
            </View>

            <TextInput
              style={styles.input}
              value={this.state.val}
              onChangeText={val => this.setState({ val })}
              returnKeyType="next"
              placeholderTextColor="#70284b"
              placeholder={Localization.determineYourLocation}
            />
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
