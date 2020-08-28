import { Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import React from "react";
import { fieldStyle } from "../fieldStyle";
import { textIconStyle } from "./style";

export const TextIconInputField = props => {
  return (
    <View style={fieldStyle.fieldView}>
      <Text style={fieldStyle.fieldLabel}>{props.label}</Text>
      <View style={textIconStyle.inputView}>
        <TextInput
          style={textIconStyle.textInput}
          keyboardType={props.keyboardType}
        />
        <TouchableOpacity style={textIconStyle.btnView}>
          <Image source={props.imgUrl} style={textIconStyle.imgIcon} />
          <Text style={textIconStyle.iconLabel}>
            {props.iconLabel ? props.iconLabel : null}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
