import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import React from "react";
import { balanceViewStyle } from "./style";
import { connect } from "react-redux";
import { currencyParser } from "../CurrencyParser";

const BalanceView = props => {
  return (
    <View style={balanceViewStyle.saldoView}>
      <Text style={balanceViewStyle.saldoLabelText}>Seu saldo:</Text>
      <View style={balanceViewStyle.valorView}>
        {props.saldoVisivel ? (
          <Text style={balanceViewStyle.saldoText}>
            {currencyParser(props.contaLogada.saldo)}{" "}
          </Text>
        ) : (
          <Text>------------------------</Text>
        )}

        <TouchableOpacity
          style={balanceViewStyle.btnHideSaldo}
          onPress={() => {
            props.dispatch({
              type: "saldo/toggleVisivel"
            });
          }}
        >
          <Image
            source={require("../../../assets/hideIcon.png")}
            style={balanceViewStyle.hideIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapBalanceToProps = state => {
  return {
    saldoVisivel: state.saldoVisivel,
    contaLogada: state.contaLogada
  };
};

export default connect(mapBalanceToProps)(BalanceView);
