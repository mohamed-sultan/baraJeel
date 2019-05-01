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
  PermissionsAndroid,
  Platform
} from "react-native";
import { connect } from "react-redux";
import MapView, { Marker } from "react-native-maps";
import Geolocation from "react-native-geolocation-service";

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
      },
      loading: false,
      updatesEnabled: false,
      location: {}
    };
    this.getLocation();
  }

  componentDidMount() {
    this.getLocation();
  }
  hasLocationPermission = async () => {
    if (
      Platform.OS === "ios" ||
      (Platform.OS === "android" && Platform.Version < 23)
    ) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (hasPermission) return true;

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) return true;

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show(
        "Location permission denied by user.",
        ToastAndroid.LONG
      );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show(
        "Location permission revoked by user.",
        ToastAndroid.LONG
      );
    }

    return false;
  };
  getLocation = async () => {
    const hasLocationPermission = await this.hasLocationPermission();

    if (!hasLocationPermission) return;

    this.setState({ loading: true }, () => {
      Geolocation.getCurrentPosition(
        position => {
          this.setState({
            region: {
              ...this.state.region,
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            }
          });
          console.log("=============locaation first=======================");
          console.log(position);
          console.log("==============location first======================");
        },
        error => {
          this.setState({ location: error, loading: false });
          console.log("====================================");
          console.log("location error", error);
          console.log("====================================");
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
          distanceFilter: 50
        }
      );
    });
  };

  onRegionChange = region => {
    this.setState({ region });
  };

  getLocationUpdates = async () => {
    const hasLocationPermission = await this.hasLocationPermission();

    if (!hasLocationPermission) return;

    this.setState({ updatesEnabled: true }, () => {
      this.watchId = Geolocation.watchPosition(
        position => {
          this.setState({
            region: {
              ...this.state.region,
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            }
          });
          console.log("=============locaation update=======================");
          console.log(position);
          console.log("==============location update======================");
        },
        error => {
          this.setState({ location: error });
          console.log(
            "========location update error============================"
          );
          console.log(error);
          console.log("====================================");
        },
        {
          enableHighAccuracy: true,
          distanceFilter: 0,
          interval: 5000,
          fastestInterval: 2000
        }
      );
    });
  };

  removeLocationUpdates = () => {
    if (this.watchId !== null) {
      Geolocation.clearWatch(this.watchId);
      this.setState({ updatesEnabled: false });
    }
  };

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
        fontSize: 15,
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
                // onRegionChange={this.onRegionChange}
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
