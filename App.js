import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar, SafeAreaView, StyleSheet, Text } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.search}>search</Text>
        <Text style={styles.List}>List</Text>
        <ExpoStatusBar style="auto" />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
    backgroundColor: "red",
  },
  List: {
    flex: 1,
    backgroundColor: "green",
    padding: 16,
  },
});
