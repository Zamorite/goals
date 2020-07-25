import React from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

const GoalForm = (props) => {
  return (
    <View style={style.row}>
      <TextInput
        style={style.textInput}
        value={props.inputText}
        onChangeText={props.onTextIn}
      />
      <Button title="Add" style={style.btn} onPress={props.addGoal} />
    </View>
  );
};

const style = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: "10%",
    paddingVertical: "20%",
  },
  textInput: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "75%",
    // marginHorizontal: "10%",
  },
  btn: {
    // borderRadius: 5,
    backgroundColor: "green",
  },
});

export default GoalForm;
