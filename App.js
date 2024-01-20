import React from "react";
import { View, StyleSheet } from "react-native";
// import CurrentWeather from "./src/screens/CurrentWeather";
// import UpcomingWeather from "./src/screens/UpcomingWeather";
import City from "./src/components/City";
// import OurChild from "./src/components/OurChild";

const App = () => {
  return (
    <View style={styles.container}>
      <City />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
