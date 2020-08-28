import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { extractScreenStyle } from "./style";
import { monthNames } from "../../support/monthNames";
import { TopBar } from "../usables/top_bar/TopBar";
import { BalanceView } from "../usables/balance_view/BalanceView";
import { NeutralButton } from "../usables/buttons/neutral_button/NeutralButton";

export const ExtractScreen = props => {
  return (
    <ScrollView>
      <View style={extractScreenStyle.container}>
        <View style={extractScreenStyle.cardView}>
          <TopBar title="Extrato" />
          <View style={extractScreenStyle.cardView}>
            <BalanceView saldo={1709.64} />
            <View style={extractScreenStyle.btnFiltrosView}>
              <NeutralButton label="Pagamentos" onPress={() => {}} />
              <NeutralButton label="Transferências" onPress={() => {}} />
            </View>
          </View>
          <View style={extractScreenStyle.periodoView}>
            <TouchableOpacity style={extractScreenStyle.btPeriodo}>
              <Text>7 dias</Text>
            </TouchableOpacity>
            <TouchableOpacity style={extractScreenStyle.btPeriodo}>
              <Text>15 dias</Text>
            </TouchableOpacity>
            <TouchableOpacity style={extractScreenStyle.btPeriodo}>
              <Text>30 dias</Text>
            </TouchableOpacity>
            <TouchableOpacity style={extractScreenStyle.btPeriodo}>
              <Text>Todos</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={extractScreenStyle.cardView}>
          <Text style={extractScreenStyle.periodoDisplay}>
            {/* {monthNames[new Date().getMonth()] +
              " / " +
              new Date().getFullYear()} */}
            Todas as suas transações
          </Text>
          <View style={extractScreenStyle.extratoView}>
            <EntradaExtrato />
            <EntradaExtrato />
            <EntradaExtrato />
            <EntradaExtrato />
            <EntradaExtrato />
            <EntradaExtrato />
            <EntradaExtrato />
            <EntradaExtrato />
            <EntradaExtrato />
            <EntradaExtrato />
            <EntradaExtrato />
            <EntradaExtrato />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const EntradaExtrato = props => {
  return (
    <View style={extractScreenStyle.entradaView}>
      <View style={extractScreenStyle.entradaDataView}>
        <Text style={extractScreenStyle.entradaDataText}>19/08</Text>
      </View>
      <View style={extractScreenStyle.entradaDetalhesView}>
        <Text style={extractScreenStyle.entradaValorText}>R$ 12,00</Text>
        <Text style={extractScreenStyle.entradaDescricaoText}>
          compra no posto de gasolina shell
        </Text>
      </View>
    </View>
  );
};
