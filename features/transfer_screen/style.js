import { StyleSheet } from "react-native";

/**
 * @author Heitor Ugarte / heitorsilveirafurb@gmail.com
 */

/**
 * @constant
 * @summary Object that stores the TransferScreen's stylesheet.
 */
export const transferScreenStyle = StyleSheet.create({
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
    alignItems: "stretch"
  },
  cardTitle: {
    fontSize: 25,
    textDecorationLine: "underline",
    fontWeight: "bold",
    textAlign: "center",
    color: "#3B4A3F"
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
