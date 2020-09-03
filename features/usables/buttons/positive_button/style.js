import { StyleSheet } from "react-native";

/**
 * @author Heitor Ugarte / heitorsilveirafurb@gmail.com
 */

/**
 * @constant
 * @summary Object that stores the PositiveButton's stylesheet.
 */
export const positiveButtonStyle = StyleSheet.create({
  btnPositive: {
    height: 48,
    borderRadius: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#11DD74",
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2
  },
  btnPositiveText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold"
  }
});
