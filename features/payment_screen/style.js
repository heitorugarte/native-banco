import { StyleSheet } from "react-native";

export const paymentScreenStyle = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#00DF74",
    flexDirection: "column",
    alignItems: "center"
  },
  cardView: {
    width: "90%",
    borderRadius: 10,
    padding: 10,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "stretch"
  },
  cardTitle: {
    fontSize: 25,
    textDecorationLine: "underline",
    fontWeight: "bold",
    textAlign: "center",
    color: "#3B4A3F"
  },
  instructionText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#444444",
    margin: 10
  },
  inputView: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textInput: {
    padding: 10,
    width: "85%"
  },
  scanIcon: {
    width: 48,
    height: 48
  },
  fieldLabel: {
    fontWeight: "bold"
  },
  fieldView: {
    width: "90%",
    margin: 1,
    borderBottomWidth: 1,
    borderColor: "#11DD74",
    borderRadius: 10,
    padding: 15
  },
  reviewView: {
    padding: 10
  },
  fieldRow: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  comprovanteContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "#11DD74",
    alignItems: "center"
  },
  comprovanteFieldLabel: {
    fontWeight: "bold",
    fontSize: 17
  },
  comprovanteFieldValue: {
    fontSize: 15
  }
});
