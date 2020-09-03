import { StyleSheet } from "react-native";

/**
 * @author Heitor Ugarte / heitorsilveirafurb@gmail.com
 */

/**
 * @constant
 * @summary Object that stores the NeutralButton's stylesheet.
 */
export const neutralButtonStyle = StyleSheet.create({
  btnNeutral: {
    height: 48,
    width: 125,
    borderRadius: 10,
    padding: 5,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray",
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2
  },
  btnNeutralText: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold"
  }
});
