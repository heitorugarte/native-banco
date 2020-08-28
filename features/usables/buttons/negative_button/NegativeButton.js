import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { negativeButtonStyle } from "./style";

export const NegativeButton = props => {
  return (
    <TouchableOpacity
      style={negativeButtonStyle.btnNegative}
      onPress={props.onPress}
    >
      <Text style={negativeButtonStyle.btnNegativeText}>{props.label}</Text>
    </TouchableOpacity>
  );
};
