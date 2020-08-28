import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { auxiliarButtonStyle } from "./style";

export const AuxiliarButton = props => {
  return (
    <TouchableOpacity
      style={auxiliarButtonStyle.btnAuxiliar}
      onPress={props.onPress}
    >
      <Text style={auxiliarButtonStyle.btnAuxiliarText}>{props.label}</Text>
    </TouchableOpacity>
  );
};
