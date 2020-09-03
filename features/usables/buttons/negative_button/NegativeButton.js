import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { negativeButtonStyle } from "./style";

/**
 * @author Heitor Ugarte / heitorsilveirafurb@gmail.com
 */

/**
 * @constant
 * @function NegativeButton
 * @summary Function responsible for returning a button component to be used anywhere in the project.
 * To customize the button, upon calling this component the following props need to be informed:
 *  label: text to be displayed on the button
 *  onPress: function to be called when the button is pressed
 * @param {Object} props
 */
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
