import { Text, View, TextInput } from "react-native";
import React from "react";
import { fieldStyle } from "../fieldStyle";

export const TextInputField = props => {
  return (
    <View style={fieldStyle.fieldView}>
      <Text style={fieldStyle.fieldLabel}>{props.label}</Text>
      <TextInput
        placeholder={props.placeholder ? props.placeholder : null}
        maxLength={props.maxLength ? props.maxLength : null}
        keyboardType={props.keyboardType ? props.keyboardType : null}
        onChange={text => (props.onChange ? props.onChange(text) : null)}
      />
    </View>
  );
};
