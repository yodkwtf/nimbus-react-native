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

const City = () => {
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

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/city-background.jpg')}
        style={imageLayout}
      >
        <Text style={[cityName, cityText]}>London</Text>
        <Text style={[countryName, cityText]}>UK</Text>

        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName="user"
            iconColor="red"
            bodyTextStyles={populationText}
            bodyText="8000"
          />
        </View>

        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName="sunrise"
            iconColor="white"
            bodyTextStyles={riseSetText}
            bodyText="07:28:15 am"
          />

          <IconText
            iconName="sunset"
            iconColor="white"
            bodyTextStyles={riseSetText}
            bodyText="17:28:15 pm"
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
  },

  populationText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    marginLeft: 7.5,
  },

  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30,
  },

  riseSetText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },

  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default City;
