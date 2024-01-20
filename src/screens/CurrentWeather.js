import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';

const CurrentWeather = () => {
  const {
    wrapper,
    container,
    temp,
    feels,
    highLow,
    highLowWrapper,
    bodyWrapper,
    description,
    message,
  } = styles;

  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>

        <RowText
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
          messageOne="Highest: 8"
          messageTwo="Lowest: 6"
        />
      </View>

      <RowText
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
        messageOne="Humidity: 10%"
        messageTwo="Wind: 10km/h"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    color: 'black',
    fontSize: 48,
  },
  feels: {
    color: 'black',
    fontSize: 30,
  },
  highLow: {
    color: 'black',
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
});

export default CurrentWeather;
