import { StyleSheet } from "react-native";

/**
 * @author Heitor Ugarte / heitorsilveirafurb@gmail.com
 */

/**
 * @constant
 * @summary Object that stores the TextIcon's stylesheet.
 */
export const textIconStyle = StyleSheet.create({
  inputView: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  imgIcon: {
    width: 48,
    height: 32
  },
  textInput: {
    width: "85%",
    padding: 10,
    fontSize: 18
  },
  btnView: {
    justifyContent: "center",
    alignItems: "center"
  }
});
