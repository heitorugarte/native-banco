import {
  Text,
  View,
  ScrollView,
  Modal,
  StatusBar as Statusbar,
  Alert,
  Share
} from "react-native";
import React from "react";
import { paymentScreenStyle } from "./style";
import { TopBar } from "../usables/top_bar/TopBar";
import BalanceView from "../usables/balance_view/BalanceView";
import DateInputField from "../usables/field_labels/date_field/DateInputField";
import { TextIconInputField } from "../usables/field_labels/text_icon_field/TextIconInputField";
import { TextInputField } from "../usables/field_labels/text_field/TextInputField";
import { PositiveButton } from "../usables/buttons/positive_button/PositiveButton";
import { NegativeButton } from "../usables/buttons/negative_button/NegativeButton";
import { AuxiliarButton } from "../usables/buttons/auxiliar_button/AuxiliarButton";
import imgScan from "../../assets/pagarConta.png";
import { connect } from "react-redux";
import { currencyParser } from "../usables/CurrencyParser";

/**
 * @author Heitor Ugarte / heitorsilveirafurb@gmail.com
 */

/**
 * @constant
 * @function PaymentScreen
 * @summary Function responsible for returning the interface to make payments in general. Contains a field to type
 * in the document's code, a description for the payment, it's value and a date. (As of now, the payment will be made
 * instantly regardless of a date being informed)
 * @param {Object} props
 */
const PaymentScreen = props => {
  return (
    <ScrollView
      style={{
        paddingTop: Statusbar.currentHeight,
        backgroundColor: "#00DF74"
      }}
    >
      <View style={paymentScreenStyle.container}>
        <View style={paymentScreenStyle.cardView}>
          <TopBar
            title="Pagamento"
            navigation={props.navigation}
            clear={() => {
              props.dispatch({
                type: "pagamento/clear"
              });
            }}
          />
        </View>
        <View style={paymentScreenStyle.cardView}>
          <BalanceView />
          <Text style={paymentScreenStyle.instructionText}>
            Escaneie o código de barras ou digite os números no campo abaixo.
          </Text>
          <TextIconInputField
            label="Código:"
            imgUrl={imgScan}
            iconLabel="Scan"
            keyboardType="number-pad"
            onChange={text => {
              props.dadosPagamento.codigo = text.nativeEvent.text;
            }}
          />
          <TextInputField
            label="Descrição"
            maxLength={32}
            onChange={text => {
              props.dadosPagamento.descricao = text.nativeEvent.text;
            }}
          />
          <TextInputField
            label="Valor"
            maxLength={32}
            keyboardType="number-pad"
            onChange={text => {
              props.dadosPagamento.valor = Number.parseInt(
                text.nativeEvent.text
              );
            }}
          />
          <DateInputField
            label="Data:"
            onChange={data => (props.dadosPagamento.data = data)}
          />
          <PositiveButton
            label="Pagar"
            onPress={() => {
              if (
                props.dadosPagamento.codigo != "" &&
                props.dadosPagamento.descricao != "" &&
                props.dadosPagamento.valor != ""
              ) {
                if (props.dadosPagamento.valor > 0) {
                  if (props.contaLogada.saldo >= props.dadosPagamento.valor) {
                    props.dispatch({
                      type: "pagamento/pagar",
                      dados: props.dadosPagamento,
                      contaOrigem: props.contaLogada
                    });
                  } else {
                    Alert.alert("Erro", "Saldo insuficiente em conta!");
                  }
                } else {
                  Alert.alert(
                    "Erro",
                    "Valor para pagamento não pode ser negativo!"
                  );
                }
              } else {
                Alert.alert("Erro", "Informe os dados para pagamento!");
              }
            }}
          />
          <NegativeButton
            label="Cancelar"
            onPress={() => {
              props.navigation.goBack();
              props.dispatch({
                type: "pagamento/clear"
              });
            }}
          />
        </View>
      </View>
      <ModalComprovante
        visible={props.modalComprovantePagamento}
        dispatch={props.dispatch}
        navigation={props.navigation}
        dadosPagamento={props.dadosPagamento}
      />
    </ScrollView>
  );
};

/**
 * @constant
 * @function mapPaymentToProps
 * @summary Function responsible for mapping which props the PaymentScreen component must receive from redux's store.
 * @param {Object} state
 */
const mapPaymentToProps = state => {
  return {
    modalComprovantePagamento: state.modalComprovantePagamento,
    dadosPagamento: state.dadosPagamento,
    contaLogada: state.contaLogada
  };
};

/**
 * @function connect
 * @summary Connects the PaymentScreen component to the redux to manage it's state and exports it as a default module.
 * @exports PaymentScreen
 */
export default connect(mapPaymentToProps)(PaymentScreen);

/**
 * @constant
 * @function ModalComprovante Payment proof Modal
 * @summary Function responsible for returning the modal showing proof of the payment's transaction. In this modal,
 * a button can be used to conclude the transaction and return to the home screen as well as a share button to send
 * the proof through any digital channel.
 * @param {Object} props
 */
const ModalComprovante = props => {
  return props.dadosPagamento ? (
    <Modal visible={props.visible} transparent={true} animationType="slide">
      <View style={paymentScreenStyle.comprovanteContainer}>
        <View style={paymentScreenStyle.cardView}>
          <Text style={paymentScreenStyle.cardTitle}>Comprovante</Text>
        </View>
        <View style={paymentScreenStyle.cardView}>
          <View style={paymentScreenStyle.reviewView}>
            <View style={paymentScreenStyle.fieldRow}>
              <Text style={paymentScreenStyle.comprovanteFieldLabel}>
                Código:
              </Text>
              <Text style={paymentScreenStyle.comprovanteFieldValue}>
                {props.dadosPagamento.codigo}
              </Text>
            </View>
            <View style={paymentScreenStyle.fieldRow}>
              <Text style={paymentScreenStyle.comprovanteFieldLabel}>
                Descrição:
              </Text>
              <Text style={paymentScreenStyle.comprovanteFieldValue}>
                {props.dadosPagamento.descricao}
              </Text>
            </View>
            <View style={paymentScreenStyle.fieldRow}>
              <Text style={paymentScreenStyle.comprovanteFieldLabel}>
                Valor:
              </Text>
              <Text style={paymentScreenStyle.comprovanteFieldValue}>
                {currencyParser(props.dadosPagamento.valor)}
              </Text>
            </View>
            <View style={paymentScreenStyle.fieldRow}>
              <Text style={paymentScreenStyle.comprovanteFieldLabel}>
                Data do pagamento:
              </Text>
              <Text style={paymentScreenStyle.comprovanteFieldValue}>
                {props.dadosPagamento.data}
              </Text>
            </View>
          </View>
        </View>
        <View style={paymentScreenStyle.cardView}>
          <PositiveButton
            label="Concluir"
            onPress={() => {
              props.dispatch({
                type: "modal/toggleComprovantePagamento"
              });
              props.dispatch({
                type: "pagamento/clear"
              });
              props.navigation.goBack();
            }}
          />
          <AuxiliarButton
            label="Compartilhar"
            onPress={async () => {
              try {
                await Share.share({
                  message:
                    "Comprovante de pagamento:\n\n" +
                    "Código do documento: " +
                    props.dadosPagamento.codigo +
                    "\nDescrição: " +
                    props.dadosPagamento.descricao +
                    "\nValor: " +
                    props.dadosPagamento.valor +
                    "\nData da transferência: " +
                    props.dadosPagamento.data
                });
              } catch (e) {
                Alert.alert(
                  "Erro ao compartilhar",
                  "Erro inesperado no compartilhamento. (" + e.toString() + ")"
                );
              }
            }}
          />
        </View>
      </View>
    </Modal>
  ) : (
    <View></View>
  );
};
