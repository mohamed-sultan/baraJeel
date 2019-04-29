import React, { Component } from "react";

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
  Dimensions
} from "react-native";

import Sound from "react-native-sound";
import { AudioRecorder, AudioUtils } from "react-native-audio";
import FontAwesome from "react-native-vector-icons/FontAwesome";

var { height } = Dimensions.get("window");

import { Colors } from "./src/app/styles";

class AudioExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0.0,
      recording: false,
      paused: false,
      stoppedRecording: false,
      finished: false,
      audioPath: AudioUtils.DocumentDirectoryPath + "/test.aac",
      hasPermission: undefined,
      base64: "",
      showModal: props.showModal,
      nowPlaying: false
    };
  }

  prepareRecordingPath(audioPath) {
    AudioRecorder.prepareRecordingAtPath(audioPath, {
      SampleRate: 22050,
      Channels: 1,
      AudioQuality: "Low",
      AudioEncoding: "aac",
      AudioEncodingBitRate: 32000,
      IncludeBase64: true
    });
  }

  componentDidMount() {
    AudioRecorder.requestAuthorization().then(isAuthorised => {
      this.setState({ hasPermission: isAuthorised });

      if (!isAuthorised) return;

      this.prepareRecordingPath(this.state.audioPath);

      AudioRecorder.onProgress = data => {
        this.setState({ currentTime: Math.floor(data.currentTime) });
      };

      AudioRecorder.onFinished = data => {
        console.log("=================recorded===================");
        console.log(data.base64);
        console.log("=================recorded===================");
        this.setState({ base64: data.base64 });
        this.props.getimageBase(data.base64);
        // Android callback comes in the form of a promise instead.
        if (Platform.OS === "ios") {
          this._finishRecording(
            data.status === "OK",
            data.audioFileURL,
            data.audioFileSize
          );
        }
      };
    });
  }

  _renderButton(title, onPress, active) {
    var style = active ? styles.activeButtonText : styles.buttonText;

    return (
      <TouchableHighlight style={styles.button} onPress={onPress}>
        <Text style={style}>{title}</Text>
      </TouchableHighlight>
    );
  }

  _renderPauseButton(onPress, active) {
    var style = active ? styles.activeButtonText : styles.buttonText;
    var title = this.state.paused ? "RESUME" : "PAUSE";
    return (
      <TouchableHighlight style={styles.button} onPress={onPress}>
        <Text style={style}>{title}</Text>
      </TouchableHighlight>
    );
  }

  async _pause() {
    if (!this.state.recording) {
      console.warn("Can't pause, not recording!");
      return;
    }

    try {
      const filePath = await AudioRecorder.pauseRecording();
      this.setState({ paused: true });
    } catch (error) {
      console.error(error);
    }
  }

  async _resume() {
    if (!this.state.paused) {
      console.warn("Can't resume, not paused!");
      return;
    }

    try {
      await AudioRecorder.resumeRecording();
      this.setState({ paused: false });
    } catch (error) {
      console.error(error);
    }
  }

  componentWillReceiveProps(nxt) {
    this.setState({ showModal: nxt.showModal });
  }
  async _stop() {
    if (!this.state.recording) {
      console.warn("Can't stop, not recording!");
      return;
    }

    this.setState({ stoppedRecording: true, recording: false, paused: false });

    try {
      const filePath = await AudioRecorder.stopRecording();

      if (Platform.OS === "android") {
        this._finishRecording(true, filePath);
      }
      return filePath;
    } catch (error) {
      console.error(error);
    }
  }

  async _play() {
    if (this.state.recording) {
      await this._stop();
    }
    if (this.state.nowPlaying) {
      return;
    }
    this.setState({ nowPlaying: true });
    // These timeouts are a hacky workaround for some issues with react-native-sound.
    // See https://github.com/zmxv/react-native-sound/issues/89.
    setTimeout(() => {
      var sound = new Sound(this.state.audioPath, "", error => {
        if (error) {
          console.log("failed to load the sound", error);
        }
      });

      setTimeout(() => {
        sound.play(success => {
          if (success) {
            console.log("successfully finished playing");
            this.setState({ nowPlaying: false });
          } else {
            this.setState({ nowPlaying: false });
            console.log("playback failed due to audio decoding errors");
          }
        });
      }, 100);
    }, 100);
  }

  async _record() {
    if (this.state.recording) {
      console.warn("Already recording!");
      return;
    }

    if (!this.state.hasPermission) {
      console.warn("Can't record, no permission granted!");
      return;
    }

    if (this.state.stoppedRecording) {
      this.prepareRecordingPath(this.state.audioPath);
    }

    this.setState({ recording: true, paused: false });

    try {
      const filePath = await AudioRecorder.startRecording();
    } catch (error) {
      console.error(error);
    }
  }

  _finishRecording(didSucceed, filePath, fileSize) {
    this.setState({ finished: didSucceed });
    console.log(
      `Finished recording of duration ${
        this.state.currentTime
      } seconds at path: ${filePath} and size of ${fileSize || 0} bytes`
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.showModal && (
          <View
            style={{
              // position: "absolute",
              // top: height / 2,
              // left: "10%",
              // right: "20%",
              width: "95%",
              borderRadius: 10,
              alignSelf: "center",
              justifyContent: "space-around",
              alignItems: "center",
              height: 30
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
                paddingHorizontal: 20
              }}
            >
              <TouchableOpacity onPress={() => this._record()}>
                <FontAwesome
                  name="microphone"
                  color={Colors.mainDark}
                  size={15}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this._stop()}>
                <FontAwesome name="stop" color={Colors.mainDark} size={15} />
              </TouchableOpacity>
              <TouchableOpacity
                disabled={this.state.nowPlaying}
                onPress={() => this._play()}
              >
                <FontAwesome
                  name="headphones"
                  color={Colors.mainDark}
                  size={15}
                />
              </TouchableOpacity>
              <Text style={styles.progressText}>{this.state.currentTime}s</Text>
            </View>

            {/* <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "60%",
                alignSelf: "center",
                paddingTop: 20
              }}
            >
              <TouchableOpacity
                style={{
                  borderRadius: 8,
                  width: 70,
                  height: 25,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: Colors.mainDark
                }}
                onPress={() => this.setState({ showModal: false })}
              >
                <Text>cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderRadius: 8,
                  width: 70,
                  height: 25,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: Colors.mainDark
                }}
                onPress={() => this.setState({ showModal: false })}
                disabled={this.state.currentTime === 0.0}
              >
                <Text>ok</Text>
              </TouchableOpacity>
            </View> */}
          </View>
        )}
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    position: "relative"
  },
  controls: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  progressText: {
    fontSize: 20,
    color: Colors.mainDark
  },
  button: {
    padding: 20
  },
  disabledButtonText: {
    color: "#eee"
  },
  buttonText: {
    fontSize: 20,
    color: "#fff"
  },
  activeButtonText: {
    fontSize: 20,
    color: "#B81F00"
  }
});

export default AudioExample;
