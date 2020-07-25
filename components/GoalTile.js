import React from "react";
import { Text, View, StyleSheet } from "react-native";

const GoalTile = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>{props.goal.value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgray",
    marginHorizontal: "5%",
    marginVertical: "2%",
    padding: "3%",
    borderRadius: 7.5,
    // fontSize: 24,
  },
  text: {
    fontSize: 24,
    // color: "red",
  },
});

export default GoalTile;
