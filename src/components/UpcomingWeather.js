/* eslint-disable react/prop-types */
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  View,
  StatusBar,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const DATA = [
  {
    dt_txt: "2020-07-01 12:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.89,
    },
    weather: [{ main: "Clear" }],
  },
  {
    dt_txt: "2020-07-01 15:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.89,
    },
    weather: [{ main: "Clouds" }],
  },
  {
    dt_txt: "2020-07-01 18:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.89,
    },
    weather: [{ main: "Rain" }],
  },
];

const Item = (props) => {
  const {
    dt_txt,
    min,
    max,
    // condition
  } = props;

  return (
    <View style={styles.item}>
      <Feather name="sun" size={50} color="white" />
      <Text style={styles.date}>{dt_txt}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  );
};

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <Item
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
      condition={item.weather[0].main}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text>Upcoming Weather</Text>
      <Image
        source={import("../../assets/upcoming-background,jpg")}
        style={styles.image}
      />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt_txt}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "red",
  },

  item: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 5,
    backgroundColor: "pink",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  temp: {
    color: "white",
    fontSize: 20,
  },

  date: {
    color: "white",
    fontSize: 15,
  },

  image: {
    width: "100",
    height: "100",
  },
});

export default UpcomingWeather;
