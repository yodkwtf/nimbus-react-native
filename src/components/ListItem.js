import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const ListItem = (props) => {
  const {
    dt_txt,
    min,
    max,
    // condition
  } = props;

  const { item, temp, date } = styles;

  return (
    <View style={item}>
      <Feather name="sun" size={50} color="white" />
      <Text style={date}>{dt_txt}</Text>
      <Text style={temp}>{min}</Text>
      <Text style={temp}>{max}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default ListItem;
