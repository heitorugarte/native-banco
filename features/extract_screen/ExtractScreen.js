import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { currencyParser } from "../usables/CurrencyParser";
import { extractScreenStyle } from "./style";
import { monthNames } from "../../support/monthNames";
import { TopBar } from "../usables/top_bar/TopBar";
import BalanceView from "../usables/balance_view/BalanceView";
import { NeutralButton } from "../usables/buttons/neutral_button/NeutralButton";
import { connect } from "react-redux";

const ExtractScreen = props => {
  return (
    <ScrollView
      style={{
        backgroundColor: "#00DF74"
      }}
    >
      <View style={extractScreenStyle.container}>
        <View style={extractScreenStyle.cardView}>
          <TopBar title="Extrato" navigation={props.navigation} />
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
            Todas as suas transações
          </Text>
          <View style={extractScreenStyle.extratoView}>
            {props.contaLogada.extrato.map(item => {
              return (
                <EntradaExtrato
                  data={item.data}
                  valor={item.valor}
                  descricao={item.descricao}
                  key={
                    item.descricao +
                    item.valor.toString() +
                    item.data.toString()
                  }
                />
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const mapExtractToProps = state => {
  return {
    contaLogada: state.contaLogada
  };
};

export default connect(mapExtractToProps)(ExtractScreen);

const EntradaExtrato = props => {
  return (
    <View style={extractScreenStyle.entradaView}>
      <View style={extractScreenStyle.entradaDataView}>
        <Text style={extractScreenStyle.entradaDataText}>{props.data}</Text>
      </View>
      <View style={extractScreenStyle.entradaDetalhesView}>
        <Text style={extractScreenStyle.entradaValorText}>
          {currencyParser(props.valor)}
        </Text>
        <Text style={extractScreenStyle.entradaDescricaoText}>
          {props.descricao}
        </Text>
      </View>
    </View>
  );
};
