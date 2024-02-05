import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ErrorItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorMessage}>Sorry, something went wrong!</Text>
      <Feather name="frown" size={100} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorMessage: {
    color: 'white',
    fontSize: 30,
    marginHorizontal: 10,
    textAlign: 'center',
  },
});

export default ErrorItem;
