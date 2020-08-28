import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { neutralButtonStyle } from "./style";

export const NeutralButton = props => {
  return (
    <TouchableOpacity
      style={neutralButtonStyle.btnNeutral}
      onPress={props.onPress}
    >
      <Text style={neutralButtonStyle.btnNeutralText}>{props.label}</Text>
    </TouchableOpacity>
  );
};
