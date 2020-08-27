import { StyleSheet } from "react-native";

export const startScreenStyle = StyleSheet.create({
  container: {
    width: "100%",
    height: "95%",
    backgroundColor: "#00DF74",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerView: {
    width: "90%",
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  titleText: {
    fontSize: 32,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    color: "#11DD74"
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
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
    color: "#3B4A3F"
  },
  cardSubtitle: {
    fontSize: 15,
    margin: 5
  },
  loginInput: {
    padding: 5,
    margin: 10,
    width: "70%",
    height: 55,
    borderBottomWidth: 2,
    borderRadius: 5,
    borderColor: "#11DD74",
    fontWeight: "bold",
    backgroundColor: "#eeeeee"
  },
  btnPrimary: {
    width: 128,
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
  btnPrimaryText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold"
  }
});
