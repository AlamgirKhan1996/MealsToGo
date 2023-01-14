import React from "react";
import { StatusBar, SafeAreaView, StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/Restaurants/RestaurantInfoComponents";

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar />
    </View>

    <View style={styles.List}>
      <RestaurantInfo />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  List: {
    flex: 1,
    backgroundColor: "green",
    padding: 16,
  },
});
