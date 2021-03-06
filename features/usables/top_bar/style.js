import { StyleSheet } from "react-native";

export const topBarStyle = StyleSheet.create({
  topBarView: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 5
  },
  btnBack: {
    position: "absolute",
    left: 0,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 360,
    padding: 5
  },
  backIcon: {
    width: 30,
    height: 30
  },
  topBarTitle: {
    fontSize: 25,
    textDecorationLine: "underline",
    fontWeight: "bold",
    textAlign: "center",
    color: "#3B4A3F"
  }
});
