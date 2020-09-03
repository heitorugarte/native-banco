import { StyleSheet } from "react-native";

/**
 * @author Heitor Ugarte / heitorsilveirafurb@gmail.com
 */

/**
 * @constant
 * @summary Object that stores all of the input field's stylesheet.
 */
export const fieldStyle = StyleSheet.create({
  fieldLabel: {
    fontWeight: "bold"
  },
  fieldView: {
    width: "100%",
    margin: 1,
    borderBottomWidth: 1,
    borderColor: "#11DD74",
    borderRadius: 10,
    padding: 15
  }
});
