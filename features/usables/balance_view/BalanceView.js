import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import React from "react";
import { balanceViewStyle } from "./style";
import { connect } from "react-redux";
import { currencyParser } from "../CurrencyParser";

/**
 * @author Heitor Ugarte / heitorsilveirafurb@gmail.com
 */

/**
 * @constant
 * @function BalanceView
 * @summary Function responsible for returning the balance component that shows the amount of money the user
 * has in the account as well as a button to hide or show the value.
 * @param {Object} props
 */
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

/**
 * @constant
 * @function mapBalanceToProps
 * @summary Function responsible for mapping which props the BalanceView component must receive from redux's store.
 * @param {Object} state
 */
const mapBalanceToProps = state => {
  return {
    saldoVisivel: state.saldoVisivel,
    contaLogada: state.contaLogada
  };
};

/**
 * @function connect
 * @summary Connects the BalanceView component to the redux to manage it's state and exports it as a default module.
 * @exports BalanceView
 */
export default connect(mapBalanceToProps)(BalanceView);
