import {
  Text,
  View,
  Modal,
  ScrollView,
  StatusBar as Statusbar
} from "react-native";
import React from "react";
import { transferScreenStyle } from "./style.js";
import { TopBar } from "../usables/top_bar/TopBar";
import { TextInputField } from "../usables/field_labels/text_field/TextInputField";
import { PickerInputField } from "../usables/field_labels/picker_field/PickerInputField";
import DateInputField from "../usables/field_labels/date_field/DateInputField";
import { PositiveButton } from "../usables/buttons/positive_button/PositiveButton";
import { NegativeButton } from "../usables/buttons/negative_button/NegativeButton";
import { NeutralButton } from "../usables/buttons/neutral_button/NeutralButton";
import { AuxiliarButton } from "../usables/buttons/auxiliar_button/AuxiliarButton";
import { connect } from "react-redux";

const TransferScreen = props => {
  return (
    <ScrollView
      style={{
        paddingTop: Statusbar.currentHeight,
        backgroundColor: "#00DF74"
      }}
    >
      <View style={transferScreenStyle.container}>
        <View style={transferScreenStyle.cardView}>
          <TopBar title="Transferência" navigation={props.navigation} />
        </View>
        <View style={transferScreenStyle.cardView}>
          <PickerInputField
            label="Destino:"
            selectedValue={""}
            onValueChange={() => {}}
            pickerOptions={[
              { label: "Conta BizuBank", value: "Conta BizuBank" },
              { label: "Outro Banco", value: "Outro Banco" }
            ]}
          />
          <TextInputField label="Identificador:" maxLength={32} />
          <TextInputField label="Favorecido:" maxLength={32} />
          <TextInputField label="Descrição:" maxLength={25} />
          <TextInputField
            label="Valor:"
            maxLength={32}
            keyboardType="number-pad"
          />
          <DateInputField label="Data:" />
        </View>

        <View style={transferScreenStyle.cardView}>
          <PositiveButton
            label="Transferir"
            onPress={() => {
              props.dispatch({
                type: "modal/toggleReviewTransferencia"
              });
            }}
          />
          <NeutralButton
            label="Cancelar"
            onPress={() => {
              props.navigation.goBack();
            }}
          />
        </View>
        <ModalReviewDetalhes
          visible={props.modalReviewTransferencia}
          navigation={props.navigation}
          dispatch={props.dispatch}
        />
        <ModalComprovante
          visible={props.modalComprovanteTransferencia}
          valor={1400}
          usuario={"Destinatário"}
          navigation={props.navigation}
          dispatch={props.dispatch}
        />
      </View>
    </ScrollView>
  );
};

const mapTransferToProps = state => {
  return {
    modalReviewTransferencia: state.modalReviewTransferencia,
    modalComprovanteTransferencia: state.modalComprovanteTransferencia
  };
};

export default connect(mapTransferToProps)(TransferScreen);

const ModalReviewDetalhes = props => {
  return (
    <Modal transparent={true} animationType="fade" visible={props.visible}>
      <View style={transferScreenStyle.modalContainer}>
        <View style={transferScreenStyle.modalView}>
          <Text style={transferScreenStyle.cardTitle}>Confirmação</Text>
          <View style={transferScreenStyle.reviewView}>
            <View style={transferScreenStyle.fieldRow}>
              <Text style={transferScreenStyle.fieldLabel}>Favorecido:</Text>
              <Text style={transferScreenStyle.fieldValue}>
                Pessoa favorecida
              </Text>
            </View>
            <View style={transferScreenStyle.fieldRow}>
              <Text style={transferScreenStyle.fieldLabel}>Descrição:</Text>
              <Text style={transferScreenStyle.fieldValue}>
                Descrição da transação
              </Text>
            </View>
            <View style={transferScreenStyle.fieldRow}>
              <Text style={transferScreenStyle.fieldLabel}>Valor:</Text>
              <Text style={transferScreenStyle.fieldValue}>R$1.400,00</Text>
            </View>
            <View style={transferScreenStyle.fieldRow}>
              <Text style={transferScreenStyle.fieldLabel}>
                Data da transferência:
              </Text>
              <Text style={transferScreenStyle.fieldValue}>
                {new Date().toDateString()}
              </Text>
            </View>
            <PositiveButton
              label="Confirmar"
              onPress={() => {
                props.dispatch({
                  type: "modal/toggleReviewTransferencia"
                });
                props.dispatch({
                  type: "modal/toggleComprovanteTransferencia"
                });
              }}
            />
            <NeutralButton
              label="Voltar"
              onPress={() => {
                props.navigation.goBack();
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const ModalComprovante = props => {
  return (
    <Modal visible={props.visible} transparent={true} animationType="slide">
      <View style={transferScreenStyle.comprovanteContainer}>
        <View style={transferScreenStyle.cardView}>
          <Text style={transferScreenStyle.cardTitle}>Comprovante</Text>
        </View>
        <View style={transferScreenStyle.cardView}>
          <View style={transferScreenStyle.reviewView}>
            <Text>Você fez uma transferência para {props.usuario}!</Text>
            <View style={transferScreenStyle.fieldRow}>
              <Text style={transferScreenStyle.comprovanteFieldLabel}>
                Favorecido:
              </Text>
              <Text style={transferScreenStyle.comprovanteFieldValue}>
                Pessoa favorecida
              </Text>
            </View>
            <View style={transferScreenStyle.fieldRow}>
              <Text style={transferScreenStyle.comprovanteFieldLabel}>
                Descrição:
              </Text>
              <Text style={transferScreenStyle.comprovanteFieldValue}>
                Descrição da transação
              </Text>
            </View>
            <View style={transferScreenStyle.fieldRow}>
              <Text style={transferScreenStyle.comprovanteFieldLabel}>
                Valor:
              </Text>
              <Text style={transferScreenStyle.comprovanteFieldValue}>
                R$1.400,00
              </Text>
            </View>
            <View style={transferScreenStyle.fieldRow}>
              <Text style={transferScreenStyle.comprovanteFieldLabel}>
                Data da transferência:
              </Text>
              <Text style={transferScreenStyle.comprovanteFieldValue}>
                {new Date().toDateString()}
              </Text>
            </View>
          </View>
        </View>
        <View style={transferScreenStyle.cardView}>
          <PositiveButton
            label="Concluir"
            onPress={() => {
              props.dispatch({
                type: "modal/toggleComprovanteTransferencia"
              });
              props.navigation.goBack();
            }}
          />
          <AuxiliarButton label="Compartilhar" onPress={() => {}} />
        </View>
      </View>
    </Modal>
  );
};
