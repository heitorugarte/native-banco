import { StyleSheet } from "react-native";

/**
 * @author Heitor Ugarte / heitorsilveirafurb@gmail.com
 */

/**
 * @constant
 * @summary Object that stores the BalanceView's stylesheet.
 */
export const balanceViewStyle = StyleSheet.create({
  saldoView: {
    flexDirection: "column",
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 10,
    width: "100%"
  },
  valorView: {
    flexDirection: "row",
    alignItems: "center"
  },
  saldoLabelText: {
    fontSize: 15,
    color: "gray"
  },
  saldoText: {
    fontSize: 22,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5
  },
  btnHideSaldo: {
    width: 64,
    height: 32,
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
  hideIcon: {
    height: 32,
    width: 32
  }
});
