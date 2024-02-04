import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';

const App = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
