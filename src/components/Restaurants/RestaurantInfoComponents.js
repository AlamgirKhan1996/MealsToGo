import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "swat restaurant",
    icon = "",
    photo = "",
    address = "some random street",
    isOpen = true,
    rating = 4,
    isClosedTemperarly,
  } = restaurant;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover
        key={name}
        source={{
          uri: "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
        }}
        style={styles.cardCover}
      />
      <Text style={styles.title}> {name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cardCover: {
    padding: 20,
  },
  title: {
    padding: 20,
  },
});
