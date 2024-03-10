import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  SafeAreaView,
  Platform,
  Alert,
  StatusBar,
} from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.safeAreaView} />
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Face Dectection App</Text>
        </View>

        <View style={styles.contentContainer}>
          <View style={{ flex: 0.5 }}>
            <Text style={styles.contentText}>
              Experience the virtual experience of trying out different frames
              from our wide collection on your mobile phone before making any
              purchase, just how you would in an offline store!
            </Text>
          </View>

          <View styles={{ flexDirection: "row", flex: 0.25 }}>
            <View style={{ flex: 0.5 }}>
              <Image
                source={require("../assets/glasses.png")}
                style={{ height: 64, width: 160 }}
              ></Image>
            </View>
            <View style={{ flex: 0.5 }}>
              <Image
                source={require("../assets/glasses-round.png")}
                style={{ height: 64, width: 160 }}
              ></Image>
            </View>
          </View>

          <View styles={{ flexDirection: "row", flex: 0.25 }}>
            <View style={{ flex: 0.5 }}>
              <Image
                source={require("../assets/Frapp-09.png")}
                style={{ height: 64, width: 160 }}
              ></Image>
            </View>
            <View style={{ flex: 0.5 }}>
              <Image
                source={require("../assets/Frapp-04.png")}
                style={{ height: 64, width: 160 }}
              ></Image>
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => this.props.navigation.navigate("Main")}
          >
            <Text style={styles.subText}>Try it out!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  titleContainer: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6278e4",
  },
  safeAreaView: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
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
  buttonText: {
    fontSize: RFValue(25),
    fontStyle: "italic",
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
  },
  safeAreaView: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  routeCard: {
    backgroundColor: "#1E5981",
    borderRadius: 30,
    marginLeft: 75,
    marginRight: 50,
    marginTop: 50,
    flex: 0.25,
  },
  contentContainer: {
    flex: 0.6,
    margin: RFValue(5),
    borderRadius: RFValue(15),
    backgroundColor: "white",
    height: "100%",
    padding: RFValue(20),
  },
  bottomContainer: {
    flex: 0.2,
    paddingLeft: RFValue(300),
    paddingBottom: RFValue(250),
    paddingTop: RFValue(20),
    backgroundColor: "#6278e4",
  },
  subText: {
    fontSize: RFValue(20),
    color: "#efb141",
    fontStyle: "italic",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 1,
  },
  contentText: {
    fontSize: RFValue(17),
    fontStyle: "italic",
    fontWeight: "bold",
  },
  filterButton: {
    height: RFPercentage(8),
    width: RFPercentage(15),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e4e7f8",
    borderRadius: 30,
  },
  categoryBox: {
    flex: 0.2,
    width: "100%",
    alignItems: "center",
    margin: 1.5,
    padding: RFValue(3),
    backgroundColor: "white",
  },
  categoriesContainer: {
    flex: 0.4,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "center",
  },
});
