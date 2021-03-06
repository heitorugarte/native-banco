import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { currencyParser } from "../usables/CurrencyParser";
import { extractScreenStyle } from "./style";
import { TopBar } from "../usables/top_bar/TopBar";
import BalanceView from "../usables/balance_view/BalanceView";
import { NeutralButton } from "../usables/buttons/neutral_button/NeutralButton";
import { connect } from "react-redux";

/**
 * @author Heitor Ugarte / heitorsilveirafurb@gmail.com
 */

/**
 * @constant
 * @function ExtractScreen Extract Screen
 * @summary Function responsible for returning the extract screen component. This component is connected to the
 * reducer's store receiving the props contaLogada (representing the account of user currntly logged in) and
 * tipoDeExtrato (string used to filter the type of transactions to be shown)
 * @param {Object} props
 */
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
            <ScrollView horizontal={true}>
              <NeutralButton
                key="Todos"
                label="Todos"
                onPress={() => {
                  props.dispatch({
                    type: "extrato/showTodos"
                  });
                }}
              />
              <NeutralButton
                key="Pagamentos"
                label="Pagamentos"
                onPress={() => {
                  props.dispatch({
                    type: "extrato/showPagamentos"
                  });
                }}
              />
              <NeutralButton
                key="Transferências"
                label="Transferências"
                onPress={() => {
                  props.dispatch({
                    type: "extrato/showTransferencias"
                  });
                }}
              />
            </ScrollView>
          </View>
          <View style={extractScreenStyle.periodoView}>
            <TouchableOpacity
              style={extractScreenStyle.btPeriodo}
              onPress={() => {
                props.dispatch({
                  type: "extrato/setPeriodo",
                  periodo: 7
                });
              }}
            >
              <Text>7 dias</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={extractScreenStyle.btPeriodo}
              onPress={() => {
                props.dispatch({
                  type: "extrato/setPeriodo",
                  periodo: 15
                });
              }}
            >
              <Text>15 dias</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={extractScreenStyle.btPeriodo}
              onPress={() => {
                props.dispatch({
                  type: "extrato/setPeriodo",
                  periodo: 30
                });
              }}
            >
              <Text>30 dias</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={extractScreenStyle.btPeriodo}
              onPress={() => {
                props.dispatch({
                  type: "extrato/setPeriodo",
                  periodo: 0
                });
              }}
            >
              <Text>Todos</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={extractScreenStyle.cardView}>
          <Text style={extractScreenStyle.periodoDisplay}>
            {props.extratoTitle}
          </Text>
          <View style={extractScreenStyle.extratoView}>
            {props.contaLogada.extrato
              .filter(item => {
                if (props.periodo !== 0) {
                  if (
                    item.tipo === props.tipoDeExtrato ||
                    props.tipoDeExtrato === "todos"
                  ) {
                    return (
                      getTimestamp(item.data) >
                      getTimestampPeriodo(props.periodo)
                    );
                  } else return false;
                } else {
                  if (
                    props.tipoDeExtrato === "todos" ||
                    item.tipo === props.tipoDeExtrato
                  )
                    return true;
                  return false;
                }
              })
              .map(item => {
                return (
                  <EntradaExtrato
                    data={item.data}
                    valor={item.valor}
                    descricao={item.descricao}
                    debito={item.debito}
                    tipo={item.tipo}
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

/**
 * @function getTimestamp
 * @summary Function responsible for returning a timestamp based on the string date passed as a parameter.
 * @param {String} dateString
 */
function getTimestamp(dateString) {
  let mes = dateString.split("/")[1];
  let dia = dateString.split("/")[0];
  let data = new Date(
    new Date().getFullYear().toString() + "-" + mes + "-" + dia
  );
  return data.getTime();
}

/**
 * @function getTimestampPeriodo
 * @summary Function responsible for returning a timestamp used as a threshold to limit which statements should be shown.
 * A new date object is created and has the amount of days (period) deducted.
 * @param {Number} dias
 */
function getTimestampPeriodo(dias) {
  let data = new Date();
  data.setDate(data.getDate() - dias);
  return data.getTime();
}

/**
 * @constant
 * @function mapExtractToProps
 * @summary Function responsible for mapping which props the ExtractScreen component must receive from the redux's store state.
 * @param {Object} state
 */
const mapExtractToProps = state => {
  return {
    contaLogada: state.contaLogada,
    tipoDeExtrato: state.tipoDeExtrato,
    periodo: state.periodo,
    extratoTitle: state.extratoTitle
  };
};

/**
 * @function connect
 * @summary Connects the ExtractScreen component to the redux's store to manage states.
 * Exports ExtractScreen as a default module.
 * @exports ExtractScreen as default module.
 */
export default connect(mapExtractToProps)(ExtractScreen);

/**
 * @constant
 * @function EntradaExtrato
 * @summary Function responsible for returning a component that represents an entry of the current user's extract.
 * Receives through props all the data to be rendered.
 * @param {Object} props
 */
const EntradaExtrato = props => {
  return (
    <View style={extractScreenStyle.entradaView}>
      <View
        style={
          props.debito
            ? extractScreenStyle.entradaDataView
            : extractScreenStyle.entradaDataViewCredito
        }
      >
        <Text style={extractScreenStyle.entradaDataText}>
          {props.data.substring(0, 5)}
        </Text>
      </View>
      <View style={extractScreenStyle.entradaDetalhesView}>
        <Text
          style={
            props.debito
              ? extractScreenStyle.entradaValorText
              : extractScreenStyle.entradaValorTextCredito
          }
        >
          {currencyParser(props.valor)}
        </Text>
        <Text style={extractScreenStyle.entradaDescricaoText}>
          {props.descricao}
        </Text>
        <Text style={extractScreenStyle.entradaTipoText}>{props.tipo}</Text>
      </View>
    </View>
  );
};
