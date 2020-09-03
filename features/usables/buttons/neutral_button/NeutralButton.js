import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { neutralButtonStyle } from "./style";

/**
 * @author Heitor Ugarte / heitorsilveirafurb@gmail.com
 */

/**
 * @constant
 * @function NeutralButton
 * @summary Function responsible for returning a button component to be used anywhere in the project.
 * To customize the button, upon calling this component the following props need to be informed:
 *  label: text to be displayed on the button
 *  onPress: function to be called when the button is pressed
 * @param {Object} props
 */

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
