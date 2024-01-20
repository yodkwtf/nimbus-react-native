/* eslint-disable react/prop-types */
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  StatusBar,
  ImageBackground,
} from "react-native";
import ListItem from "../components/ListItem";

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

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <ListItem
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
      condition={item.weather[0].main}
    />
  );

  const { container, image } = styles;

  return (
    <SafeAreaView style={container}>
      <Text>Upcoming Weather</Text>
      <ImageBackground
        source={require("../../assets/upcoming-background.jpg")}
        style={image}
      >
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "royalblue",
  },

  image: {
    flex: 1,
  },
});

export default UpcomingWeather;
