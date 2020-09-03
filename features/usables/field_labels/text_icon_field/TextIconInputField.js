import { Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import React from "react";
import { fieldStyle } from "../fieldStyle";
import { textIconStyle } from "./style";

/**
 * @author Heitor Ugarte / heitorsilveirafurb@gmail.com
 */

/**
 * @constant
 * @function TextIconInputField
 * @summary Function responsible for returning a Text Input Field with an icon to be used anywhere in the project.
 * To customize the component the following props need to be informed upon calling it:
 *  label: text to be displayed as a label on the field
 *  onChange: function to be called when the text is altered
 *  imgUrl: URI to the image to be used as icon
 *  iconLabel: label of the icon image
 *  maxLength: maximum number of charactes the field supports (optional)
 *  keyboardType: type of input supported by the keyboard (optional)
 * @param {Object} props
 */
export const TextIconInputField = props => {
  return (
    <View style={fieldStyle.fieldView}>
      <Text style={fieldStyle.fieldLabel}>{props.label}</Text>
      <View style={textIconStyle.inputView}>
        <TextInput
          style={textIconStyle.textInput}
          keyboardType={props.keyboardType}
          onChange={text => props.onChange(text)}
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
