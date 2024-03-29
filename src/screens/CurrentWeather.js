import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';
import { weatherType } from '../utils/weatherType';

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    tempStyles,
    feels,
    highLow,
    highLowWrapper,
    bodyWrapper,
    description,
    message,
  } = styles;

  // destructuring the weatherData object
  const {
    main: { feels_like, temp, temp_max, temp_min },
    weather,
  } = weatherData;
  const weatherCondition = weather[0]?.main;

  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition]?.backgroundColor },
      ]}
    >
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition]?.icon}
          size={100}
          color="white"
        />
        <Text style={tempStyles}>{temp}°</Text>
        <Text style={feels}>Feels like {feels_like}°</Text>

        <RowText
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
          messageOne={`Max: ${temp_max}° | `}
          messageTwo={`Min: ${temp_min}°`}
        />
      </View>

      <RowText
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
        messageOne={weather[0]?.description}
        messageTwo={weatherType[weatherCondition]?.message}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempStyles: {
    color: 'black',
    fontSize: 48,
    marginVertical: 10,
  },
  feels: {
    color: 'black',
    fontSize: 30,
    marginVertical: 10,
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
    alignItems: 'center',
    marginBottom: 40,
  },
  description: {
    fontSize: 35,
    textTransform: 'capitalize',
  },
  message: {
    marginTop: 10,
    fontSize: 20,
  },
});

export default CurrentWeather;
