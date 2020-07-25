import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import GoalForm from "./components/GoalForm";
import GoalTile from "./components/GoalTile";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [goals, setGoals] = useState([]);

  const onTextIn = (text) => setInputText(text);
  const onAddPressed = () => {
    console.log(inputText);
    setGoals((goals) => [
      ...goals,
      { key: Math.random().toString(), value: inputText },
    ]);
    console.log(goals);
  };

  return (
    <View style={styles.container}>
      <GoalForm
        inputText={inputText}
        onTextIn={onTextIn}
        addGoal={onAddPressed}
      />
      <FlatList
        data={goals}
        renderItem={(goal) => <GoalTile goal={goal.item} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
});
