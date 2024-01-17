import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Component</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "dodgerblue",
    height: 100,
    width: 100,
  },
  potato: {
    backgroundColor: "red",
    height: 200,
    width: 100,
  },
});

export default App;
