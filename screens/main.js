import React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Camera } from "expo-camera";
import * as Permissions from "expo-permissions";
import * as FaceDetector from "expo-face-detector";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
/*import { RNCamera, FaceDetector } from "react-native-camera";

import {
  useCameraDevices,
  useFrameProcessor,
} from "react-native-vision-camera";

import { Camera } from "react-native-vision-camera";
import { scanFaces, Faces } from "vision-camera-face-detector";*/
import Filter1 from "./Filter1";
import Filter2 from "./Filter2";
import Filter3 from "./Filter3";
import Filter4 from "./Filter4";
import Filter5 from "./Filter5";
import Filter6 from "./Filter6";
import Filter7 from "./Filter7";
import Filter8 from "./Filter8";
import Filter9 from "./Filter9";
import Filter10 from "./Filter10";
var data = {
  regular: [
    {
      id: "1",
      image: require("../assets/glasses.png"),
    },
  ],

  wayfer: [
    {
      id: "4",
      image: require("../assets/Frapp-03.png"),
    },
    {
      id: "9",
      image: require("../assets/Frapp-08.png"),
    },
    {
      id: "10",
      image: require("../assets/Frapp-09.png"),
    },
  ],

  round: [
    {
      id: "2",
      image: require("../assets/glasses-round.png"),
    },
    {
      id: "3",
      image: require("../assets/Frapp-02.png"),
    },
  ],

  aviator: [
    {
      id: "5",
      image: require("../assets/Frapp-04.png"),
    },
    {
      id: "6",
      image: require("../assets/Frapp-05.png"),
    },
    {
      id: "7",
      image: require("../assets/Frapp-06.png"),
    },
    {
      id: "8",
      image: require("../assets/Frapp-07.png"),
    },
  ],
};

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      faces: [],
      currentFilter: "Filter1",
      selectedCategory: "regular",
    };
  }

  componentDidMount() {
    Permissions.askAsync(Permissions.CAMERA).then(this.onCameraPermissions);
  }

  onCameraPermissions = (status) => {
    this.setState({
      hasCameraPermission: status.status === "granted",
    });
  };

  onFaceDetected = (faces) => {
    this.setState({
      faces: faces,
    });
  };

  onFaceDetectionError = (error) => {
    console.log(error);
  };

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View></View>;
    }
    if (hasCameraPermission === false) {
      return (
        <View style={styles.container}>
          <Text>No access to camera </Text>
        </View>
      );
    }
    console.log(this.state.faces);
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.safeAreaView} />
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Face Dectection App</Text>
          <Text style={styles.subText}>Try Our Cool Filters!</Text>
        </View>
        <View style={styles.cameraStyle}>
          <Camera
            style={{ flex: 1 }}
            type={Camera.Constants.Type.front}
            faceDetectorSettings={{
              mode: FaceDetector.FaceDetectorMode.fast,
              detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
              runClassifications: FaceDetector.FaceDetectorClassifications.all,
            }}
            onFacesDetected={this.onFaceDetected}
            onFaceDetectionError={this.onFaceDetectionError}
          />
          {this.state.faces.map((face) => {
            if (this.state.currentFilter === "Filter1") {
              return <Filter1 key={face.faceID} face={face} />;
            } else if (this.state.currentFilter === "Filter2") {
              return <Filter2 key={face.faceID} face={face} />;
            } else if (this.state.currentFilter === "Filter3") {
              return <Filter3 key={face.faceID} face={face} />;
            } else if (this.state.currentFilter === "Filter4") {
              return <Filter4 key={face.faceID} face={face} />;
            } else if (this.state.currentFilter === "Filter5") {
              return <Filter5 key={face.faceID} face={face} />;
            } else if (this.state.currentFilter === "Filter6") {
              return <Filter6 key={face.faceID} face={face} />;
            } else if (this.state.currentFilter === "Filter7") {
              return <Filter7 key={face.faceID} face={face} />;
            } else if (this.state.currentFilter === "Filter8") {
              return <Filter8 key={face.faceID} face={face} />;
            } else if (this.state.currentFilter === "Filter9") {
              return <Filter9 key={face.faceID} face={face} />;
            } else if (this.state.currentFilter === "Filter10") {
              return <Filter10 key={face.faceID} face={face} />;
            }
          })}
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.categoriesContainer}>
            <TouchableOpacity
              style={
                this.state.selectedCategory === "regular"
                  ? styles.categoryBoxSelected
                  : styles.categoryBox
              }
              onPress={() => {
                this.setState({ selectedCategory: "regular" });
              }}
            >
              <Text>Regular</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.selectedCategory === "wayfer"
                  ? styles.categoryBoxSelected
                  : styles.categoryBox
              }
              onPress={() => {
                this.setState({ selectedCategory: "wayfer" });
              }}
            >
              <Text>Wayfer</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.selectedCategory === "aviator"
                  ? styles.categoryBoxSelected
                  : styles.categoryBox
              }
              onPress={() => {
                this.setState({ selectedCategory: "aviator" });
              }}
            >
              <Text>Aviator</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.selectedCategory === "round"
                  ? styles.categoryBoxSelected
                  : styles.categoryBox
              }
              onPress={() => {
                this.setState({ selectedCategory: "round" });
              }}
            >
              <Text>Round</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            style={{ flexDirection: "row", flex: 0.6 }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {data[this.state.selectedCategory].map((filterData) => {
              return (
                <TouchableOpacity
                  style={styles.filterButton}
                  onPress={() =>
                    this.setState({ currentFilter: `Filter${filterData.id}` })
                  }
                >
                  <Image
                    style={{ width: 200, height: 80 }}
                    source={filterData.image}
                  />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  titleContainer: {
    flex: 0.15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6278e4",
  },
  titleText: {
    fontSize: RFValue(30),
    fontWeight: "bold",
    color: "#efb141",
    fontStyle: "italic",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 1,
  },
  subText: {
    fontSize: RFValue(20),
    color: "#efb141",
    fontStyle: "italic",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 1,
  },
  safeAreaView: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  cameraStyle: {
    flex: 0.65,
  },
  bottomContainer: {
    flex: 0.2,
    paddingLeft: RFValue(20),
    paddingRight: RFValue(20),
    paddingTop: RFValue(30),
    backgroundColor: "#6278e4",
  },
  filterButton: {
    height: RFPercentage(8),
    width: RFPercentage(15),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e4e7f8",
    borderRadius: 30,
    marginRight: 20,
  },
  categoriesContainer: {
    flex: 0.4,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "center",
  },
  categoryBox: {
    flex: 0.2,
    borderRadius: 30,
    borderWidth: 1,
    width: "100%",
    alignItems: "center",
    margin: 1.5,
    padding: RFValue(3),
    backgroundColor: "white",
  },
  categoryBoxSelected: {
    flex: 0.2,
    borderRadius: 30,
    borderWidth: 1,
    width: "100%",
    alignItems: "center",
    margin: 1.5,
    padding: RFValue(3),
    backgroundColor: "green",
  },
});
