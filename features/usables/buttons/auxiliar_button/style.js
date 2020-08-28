import { StyleSheet } from "react-native";

export const auxiliarButtonStyle = StyleSheet.create({
  btnAuxiliar: {
    height: 48,
    borderRadius: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2
  },
  btnAuxiliarText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold"
  }
});
