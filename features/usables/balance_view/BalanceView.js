import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import React from "react";
import { balanceViewStyle } from "./style";

export const BalanceView = props => {
  return (
    <View style={balanceViewStyle.saldoView}>
      <Text style={balanceViewStyle.saldoLabelText}>Seu saldo:</Text>
      <View style={balanceViewStyle.valorView}>
        <Text style={balanceViewStyle.saldoText}>R$ {props.saldo} </Text>
        <TouchableOpacity style={balanceViewStyle.btnHideSaldo}>
          <Image
            source={require("../../../assets/hideIcon.png")}
            style={balanceViewStyle.hideIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
