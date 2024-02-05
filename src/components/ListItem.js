import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { weatherType } from '../utils/weatherType';
import moment from 'moment';

const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props;

  const { item, temp, date, dateTextWrapper } = styles;

  return (
    <View style={item}>
      <Feather name={weatherType[condition]?.icon} size={50} color="white" />
      <View style={dateTextWrapper}>
        <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={date}>{moment(dt_txt).format('h:mm a')}</Text>
      </View>
      <Text style={temp}>{`${Math.round(min)}°/${Math.round(max)}°`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'indianred',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  temp: {
    color: 'white',
    fontSize: 20,
  },

  date: {
    color: 'white',
    fontSize: 15,
  },

  dateTextWrapper: { flexDirection: 'column' },
});

export default ListItem;
