import { StyleSheet } from "react-native";

export const extractScreenStyle = StyleSheet.create({
  container: {
    width: "100%",
    height: "95%",
    backgroundColor: "#00DF74",
    flexDirection: "column",
    alignItems: "center"
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
    alignItems: "center"
  },
  extratoView: {
    width: "100%",
    margin: 5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  cardRowView: {
    width: "98%",
    borderRadius: 10,
    backgroundColor: "#F3FCF4",
    padding: 10,
    margin: 10,
    shadowColor: "#000",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15
  },
  periodoView: {
    width: "98%",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  btPeriodo: {
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: "lightgray",
    padding: 10
  },
  periodoDisplay: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#3B4A3F"
  },
  cardTitle: {
    fontSize: 25,
    textDecorationLine: "underline",
    fontWeight: "bold",
    textAlign: "center",
    color: "#3B4A3F"
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
  btnNeutralText: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold"
  },
  boldMediumText: {
    fontSize: 15,
    color: "gray"
  },
  boldLargeText: {
    fontSize: 19,
    fontWeight: "bold"
  },
  entradaView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderRadius: 3,
    shadowColor: "#000",
    margin: 3,
    padding: 15
  },
  entradaDataView: {
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: "red"
  },
  entradaDataText: {
    fontWeight: "bold",
    color: "gray",
    fontSize: 22,
    textAlign: "center"
  },
  entradaDetalhesView: {
    width: "85%",
    marginLeft: 10,
    justifyContent: "center"
  },
  entradaValorText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#dd4444"
  },
  entradaDescricaoText: {
    color: "gray",
    textTransform: "uppercase"
  }
});
