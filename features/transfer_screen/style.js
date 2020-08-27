import { StyleSheet } from "react-native";

export const transferScreenStyle = StyleSheet.create({
  container: {
    width: "100%",
    height: "95%",
    backgroundColor: "#00DF74",
    flexDirection: "column",
    alignItems: "center"
  },
  cardView: {
    width: "90%",
    borderRadius: 10,
    padding: 10,
    margin: 10,
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
    alignItems: "center"
  },
  cardTitle: {
    fontSize: 25,
    textDecorationLine: "underline",
    fontWeight: "bold",
    textAlign: "center",
    color: "#3B4A3F"
  },
  topBarView: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "center"
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
  btnPrimaryPositive: {
    width: "90%",
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
  btnPrimaryNegative: {
    width: "90%",
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
  btnPrimaryNeutral: {
    width: "90%",
    height: 48,
    borderRadius: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2
  },
  btnAuxiliar: {
    width: "90%",
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
  btnPrimaryText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold"
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
  picker: {
    width: "100%"
  },
  textInput: {
    padding: 10,
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 5,
    fontWeight: "bold"
  },
  modalContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  modalView: {
    backgroundColor: "#fff",
    width: "90%",
    borderRadius: 10,
    padding: 10,
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column"
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
