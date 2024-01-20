import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const City = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/city-background.jpg")}
        style={styles.imageLayout}
      >
        <Text style={[styles.cityName, styles.cityText]}>London</Text>
        <Text style={[styles.countryName, styles.cityText]}>UK</Text>

        <View style={styles.populationWrapper}>
          <Feather name="user" size={50} color="red" />
          <Text style={styles.populationText}>8000</Text>
        </View>

        <View style={styles.riseSetWrapper}>
          <Feather name="sunrise" size={50} color="white" />
          <Text style={styles.riseSetText}>10:46:58 am</Text>

          <Feather name="sunset" size={50} color="white" />
          <Text style={styles.riseSetText}>17:28:15 pm</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },

  imageLayout: {
    flex: 1,
  },

  cityName: {
    fontSize: 40,
  },

  countryName: {
    fontSize: 30,
  },

  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },

  populationWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30
  },

  populationText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "red",
    marginLeft: 7.5,
  },

  riseSetWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 30
  },

  riseSetText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

export default City;
