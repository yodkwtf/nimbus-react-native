import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const IconText = (props) => {
  const { iconName, iconColor, bodyTextStyles, bodyText } = props;

  return (
    <View style={styles.container}>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={bodyTextStyles}>{bodyText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center' },
});

export default IconText;
