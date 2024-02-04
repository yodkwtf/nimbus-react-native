import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CurrentWeather from './src/screens/CurrentWeather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import UpcomingWeather from "./src/screens/UpcomingWeather";
// import City from "./src/screens/City";
// import OurChild from "./src/components/OurChild";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <View style={styles.container}>
          <CurrentWeather />
        </View>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
