import { Text, View, TextInput } from "react-native";
import React from "react";
import { fieldStyle } from "../fieldStyle";

/**
 * @author Heitor Ugarte / heitorsilveirafurb@gmail.com
 */

/**
 * @constant
 * @function TextInputField
 * @summary Function responsible for returning a Text Input Field to be used anywhere in the project.
 * To customize the component the following props need to be informed upon calling it:
 *  label: text to be displayed as a label on the field
 *  onChange: function to be called when the text is altered
 *  placeholder: text used as a placeholder (optional)
 *  maxLength: maximum number of charactes the field supports (optional)
 *  keyboardType: type of input supported by the keyboard (optional)
 * @param {Object} props
 */
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
