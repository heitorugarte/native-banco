import { StyleSheet } from "react-native";

export const negativeButtonStyle = StyleSheet.create({
  btnNegative: {
    height: 48,
    borderRadius: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2
  },
  btnNegativeText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold"
  }
});
