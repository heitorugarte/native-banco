import { Text, View, Picker } from "react-native";
import React from "react";
import { fieldStyle } from "../fieldStyle";

/**
 * @author Heitor Ugarte / heitorsilveirafurb@gmail.com
 */

/**
 * @constant
 * @function PickerInputField
 * @summary Function responsible for returning a Picker Input Field (Dropdown) to be used anywhere in the project.
 * To customize the component the following props need to be informed upon calling it:
 *  label: text to be displayed as a label on the field
 *  onValueChange: function to be called when an option is selected
 * @param {Object} props
 */
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
