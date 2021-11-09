import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function AddButton({
  small = false,
  inverted = false,
  value,
  action,
  buttonStyles,
}) {
  const buttonTypes = styles(small, inverted);

  return (
    <TouchableOpacity
      onPress={action}
      style={[buttonTypes.button, buttonStyles]}
    >
      <Text style={buttonTypes.value}>{value}</Text>
    </TouchableOpacity>
  );
}
