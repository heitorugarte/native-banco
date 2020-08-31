import {
  Text,
  View,
  ScrollView,
  Modal,
  StatusBar as Statusbar
} from "react-native";
import React from "react";
import { paymentScreenStyle } from "./style";
import { TopBar } from "../usables/top_bar/TopBar";
import BalanceView from "../usables/balance_view/BalanceView";
import DateInputField from "../usables/field_labels/date_field/DateInputField";
import { TextIconInputField } from "../usables/field_labels/text_icon_field/TextIconInputField";
import { PositiveButton } from "../usables/buttons/positive_button/PositiveButton";
import { NeutralButton } from "../usables/buttons/neutral_button/NeutralButton";
import { AuxiliarButton } from "../usables/buttons/auxiliar_button/AuxiliarButton";
import imgScan from "../../assets/pagarConta.png";
import { connect } from "react-redux";

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
          <TopBar title="Pagamento" navigation={props.navigation} />
        </View>
        <View style={paymentScreenStyle.cardView}>
          <BalanceView saldo={1709.64} />
          <Text style={paymentScreenStyle.instructionText}>
            Escaneie o código de barras ou digite os números no campo abaixo.
          </Text>
          <TextIconInputField
            label="Código:"
            imgUrl={imgScan}
            iconLabel="Scan"
            keyboardType="number-pad"
          />
          <DateInputField label="Data:" />
          <PositiveButton
            label="Pagar"
            onPress={() => {
              props.dispatch({
                type: "modal/toggleComprovantePagamento"
              });
            }}
          />
          <NeutralButton
            label="Cancelar"
            onPress={() => props.navigation.goBack()}
          />
        </View>
      </View>
      <ModalComprovante
        visible={props.modalComprovantePagamento}
        dispatch={props.dispatch}
        navigation={props.navigation}
      />
    </ScrollView>
  );
};

const mapPaymentToProps = state => {
  return {
    modalComprovantePagamento: state.modalComprovantePagamento
  };
};

export default connect(mapPaymentToProps)(PaymentScreen);

const ModalComprovante = props => {
  return (
    <Modal visible={props.visible} transparent={true} animationType="slide">
      <View style={paymentScreenStyle.comprovanteContainer}>
        <View style={paymentScreenStyle.cardView}>
          <Text style={paymentScreenStyle.cardTitle}>Comprovante</Text>
        </View>
        <View style={paymentScreenStyle.cardView}>
          <View style={paymentScreenStyle.reviewView}>
            <View style={paymentScreenStyle.fieldRow}>
              <Text style={paymentScreenStyle.comprovanteFieldLabel}>
                Favorecido:
              </Text>
              <Text style={paymentScreenStyle.comprovanteFieldValue}>
                Pessoa favorecida
              </Text>
            </View>
            <View style={paymentScreenStyle.fieldRow}>
              <Text style={paymentScreenStyle.comprovanteFieldLabel}>
                Descrição:
              </Text>
              <Text style={paymentScreenStyle.comprovanteFieldValue}>
                Descrição da transação
              </Text>
            </View>
            <View style={paymentScreenStyle.fieldRow}>
              <Text style={paymentScreenStyle.comprovanteFieldLabel}>
                Valor:
              </Text>
              <Text style={paymentScreenStyle.comprovanteFieldValue}>
                R$1.400,00
              </Text>
            </View>
            <View style={paymentScreenStyle.fieldRow}>
              <Text style={paymentScreenStyle.comprovanteFieldLabel}>
                Data do pagamento:
              </Text>
              <Text style={paymentScreenStyle.comprovanteFieldValue}>
                {new Date().toDateString()}
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
              {
                props.navigation.goBack();
              }
            }}
          />
          <AuxiliarButton label="Compartilhar" onPress={() => {}} />
        </View>
      </View>
    </Modal>
  );
};
