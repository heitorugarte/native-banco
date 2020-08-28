import { Text, View, Picker } from "react-native";
import React from "react";
import { fieldStyle } from "../fieldStyle";

export const PickerInputField = props => {
  return (
    <View style={fieldStyle.fieldView}>
      <Text style={fieldStyle.fieldLabel}>{props.label}</Text>
      <Picker
        selectedValue={props.selectedValue}
        onValueChange={props.onValueChange}
      >
        {props.pickerOptions.map(item => {
          return (
            <Picker.Item
              label={item.value}
              value={item.value}
              key={item.value}
            />
          );
        })}
      </Picker>
    </View>
  );
};
