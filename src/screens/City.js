import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
} from 'react-native';
import IconText from '../components/IconText';
import { formatUTCDate } from '../utils/helper';

const City = ({ weatherData }) => {
  const {
    container,
    imageLayout,
    cityName,
    cityText,
    countryName,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    rowLayout,
  } = styles;

  const { name, country, population, sunrise, sunset, timezone } = weatherData;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/city-background.jpg')}
        style={imageLayout}
      >
        <Text style={[cityName, cityText]}>{name}</Text>
        <Text style={[countryName, cityText]}>{country}</Text>

        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName="user"
            iconColor="white"
            bodyTextStyles={populationText}
            bodyText={`Population: ${population}`}
          />
        </View>

        <View style={[riseSetWrapper, rowLayout]}>
          <Text style={riseSetText}>Sunrise</Text>
          <IconText
            iconName="sunrise"
            iconColor="black"
            bodyTextStyles={riseSetText}
            bodyText={formatUTCDate(sunrise, timezone)}
          />
        </View>

        <View style={[riseSetWrapper, rowLayout]}>
          <Text style={riseSetText}>Sunrise</Text>
          <IconText
            iconName="sunset"
            iconColor="black"
            bodyTextStyles={riseSetText}
            bodyText={formatUTCDate(sunset, timezone)}
          />
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
    paddingVertical: 10,
  },

  countryName: {
    fontSize: 30,
  },

  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white',
  },

  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: 'black',
    padding: 20,
  },

  populationText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 7.5,
  },

  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30,
    backgroundColor: 'white',
    padding: 20,
  },

  riseSetText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },

  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default City;
