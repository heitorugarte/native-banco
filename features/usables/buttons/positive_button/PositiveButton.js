import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { positiveButtonStyle } from "./style";

/**
 * @author Heitor Ugarte / heitorsilveirafurb@gmail.com
 */

/**
 * @constant
 * @function PositiveButton
 * @summary Function responsible for returning a button component to be used anywhere in the project.
 * To customize the button, upon calling this component the following props need to be informed:
 *  label: text to be displayed on the button
 *  onPress: function to be called when the button is pressed
 * @param {Object} props
 */

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
