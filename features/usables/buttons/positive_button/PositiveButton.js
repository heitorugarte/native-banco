import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { positiveButtonStyle } from "./style";

export const PositiveButton = props => {
  return (
    <TouchableOpacity
      style={positiveButtonStyle.btnPositive}
      onPress={props.onPress}
    >
      <Text style={positiveButtonStyle.btnPositiveText}>{props.label}</Text>
    </TouchableOpacity>
  );
};
