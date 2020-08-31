import { StyleSheet, StatusBar as Statusbar } from "react-native";

export const homeScreenStyle = StyleSheet.create({
  container: {
    paddingTop: Statusbar.currentHeight + 5,
    width: "100%",
    backgroundColor: "#00DF74",
    flexDirection: "column",
    alignItems: "center"
  },
  headerView: {
    width: "95%",
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    backgroundColor: "white"
  },
  greetingsText: {
    padding: 5,
    fontSize: 22,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    color: "#11DD74",
    textAlign: "center"
  },
  logoutIcon: {
    height: 23,
    width: 23
  },
  operationsView: {
    width: "95%",
    flexDirection: "row",
    flexWrap: "wrap",
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
    justifyContent: "space-around"
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#11DD74",
    color: "#3B4A3F"
  },
  operation: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 5,
    width: "100%",
    borderWidth: 0.5,
    borderRadius: 10,
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 10,
    backgroundColor: "#fff",
    elevation: 2
  },
  operationText: {
    fontSize: 15,
    fontWeight: "bold"
  },
  operationDescription: { fontSize: 13, textAlign: "center" },
  operationSair: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 10,
    width: "100%",
    borderWidth: 0.5,
    borderRadius: 10,
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 2
  },
  operationTextSair: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white"
  }
});
