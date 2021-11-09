import React from "react";

import { TextInput } from "react-native";
import defaultStyles from "./styles";

export default function InputField({ inputValue, styles, inputAction }) {
  const atualiza = (newValue, inputReturnAction) => {
    const verifyInteger = newValue.match(/^[0-9]*$/);
    if (!verifyInteger) return;

    const removeZero = newValue.replace(/^(0)(.+)/, "$2");

    inputReturnAction(removeZero);
  };

  const numberToString = String(inputValue);

  return (
    <TextInput
      style={[defaultStyles.field, styles]}
      keyboardType="number-pad"
      selectTextOnFocus
      onChangeText={(newValue) => {
        atualiza(newValue, inputAction);
      }}
      value={numberToString}
    />
  );
}
