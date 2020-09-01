import {
  Text,
  View,
  Modal,
  ScrollView,
  StatusBar as Statusbar,
  Alert,
  Share
} from "react-native";
import React from "react";
import { transferScreenStyle } from "./style.js";
import { TopBar } from "../usables/top_bar/TopBar";
import { TextInputField } from "../usables/field_labels/text_field/TextInputField";
import { PickerInputField } from "../usables/field_labels/picker_field/PickerInputField";
import DateInputField from "../usables/field_labels/date_field/DateInputField";
import { PositiveButton } from "../usables/buttons/positive_button/PositiveButton";
import { NegativeButton } from "../usables/buttons/negative_button/NegativeButton";
import { AuxiliarButton } from "../usables/buttons/auxiliar_button/AuxiliarButton";
import { connect } from "react-redux";
import { currencyParser } from "../usables/CurrencyParser";

/**
 * @author Heitor Ugarte / heitorsilveirafurb@gmail.com
 */

/**
 * @constant
 * @function TransferScreen
 * @summary Function responsible for returning the interface that handles money transfers between accounts. Contains field
 * to point out the financial institution (as of now, only BizuBank is supported), the destination account's number, name,
 * a description for the transaction, it's value and a date (the transaction will ocurr immediatly regardless of a date being informed.)
 * @param {Object} props
 */
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
          <TopBar
            title="Transferência"
            navigation={props.navigation}
            clear={() => props.dispatch({ type: "transferencia/clear" })}
          />
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
          <TextInputField
            label="Identificador:"
            maxLength={32}
            placeholder="Num. da conta..."
            keyboardType="number-pad"
            onChange={text =>
              (props.dadosTransferencia.identificador = text.nativeEvent.text)
            }
          />
          <TextInputField
            label="Favorecido:"
            maxLength={32}
            placeholder="Nome..."
            onChange={text =>
              (props.dadosTransferencia.favorecido = text.nativeEvent.text)
            }
          />
          <TextInputField
            label="Descrição:"
            maxLength={25}
            onChange={text =>
              (props.dadosTransferencia.descricao = text.nativeEvent.text)
            }
          />
          <TextInputField
            label="Valor:"
            maxLength={32}
            keyboardType="number-pad"
            onChange={text =>
              (props.dadosTransferencia.valor = Number.parseInt(
                text.nativeEvent.text
              ))
            }
          />
          <DateInputField
            label="Data:"
            onChange={data => (props.dadosTransferencia.data = data)}
          />
        </View>

        <View style={transferScreenStyle.cardView}>
          <PositiveButton
            label="Transferir"
            onPress={() => {
              if (
                props.dadosTransferencia.favorecido != "" &&
                props.dadosTransferencia.identificador != "" &&
                props.dadosTransferencia.descricao &&
                props.dadosTransferencia.valor != 0
              ) {
                props.dispatch({
                  type: "modal/toggleReviewTransferencia"
                });
              } else {
                Alert.alert(
                  "Erro",
                  "Preencha as informações da transferência!"
                );
              }
            }}
          />
          <NegativeButton
            label="Cancelar"
            onPress={() => {
              props.dispatch({
                type: "transferencia/clear"
              });
              props.navigation.goBack();
            }}
          />
        </View>
        <ModalReviewDetalhes
          visible={props.modalReviewTransferencia}
          navigation={props.navigation}
          dispatch={props.dispatch}
          dadosTransferencia={props.dadosTransferencia}
          contaLogada={props.contaLogada}
        />
        <ModalComprovante
          visible={props.modalComprovanteTransferencia}
          valor={1400}
          usuario={"Destinatário"}
          navigation={props.navigation}
          dispatch={props.dispatch}
          dadosTransferencia={props.dadosTransferencia}
        />
      </View>
    </ScrollView>
  );
};

/**
 * @constant
 * @function mapTransferToProps
 * @summary Function responsible for mapping which props the TransferScreen component must receive from redux's store.
 * @param {Object} state
 */
const mapTransferToProps = state => {
  return {
    modalReviewTransferencia: state.modalReviewTransferencia,
    modalComprovanteTransferencia: state.modalComprovanteTransferencia,
    dadosTransferencia: state.dadosTransferencia,
    contaLogada: state.contaLogada
  };
};

/**
 * @function connect
 * @summary Connects the TransferScreen component to the redux to manage it's state and exports it as a default module.
 * @exports TransferScreen
 */
export default connect(mapTransferToProps)(TransferScreen);

/**
 * @constant
 * @function ModalReviewDetalhes Transfer review Modal
 * @summary Function responsible for returning the modal responsible for reviewing the information that the user's informed
 * for the transaction, along with buttons in the end to proceed or cancel the operation.
 * Receveis all the data to be rendered through props (props.dadosTransferencia).
 * @param {Object} props
 */
const ModalReviewDetalhes = props => {
  return props.dadosTransferencia ? (
    <Modal transparent={true} animationType="fade" visible={props.visible}>
      <View style={transferScreenStyle.modalContainer}>
        <View style={transferScreenStyle.modalView}>
          <Text style={transferScreenStyle.cardTitle}>Confirmação</Text>
          <View style={transferScreenStyle.reviewView}>
            <View style={transferScreenStyle.fieldRow}>
              <Text style={transferScreenStyle.fieldLabel}>Identificador:</Text>
              <Text style={transferScreenStyle.fieldValue}>
                {props.dadosTransferencia.identificador}
              </Text>
            </View>
            <View style={transferScreenStyle.fieldRow}>
              <Text style={transferScreenStyle.fieldLabel}>Favorecido:</Text>
              <Text style={transferScreenStyle.fieldValue}>
                {props.dadosTransferencia.favorecido}
              </Text>
            </View>
            <View style={transferScreenStyle.fieldRow}>
              <Text style={transferScreenStyle.fieldLabel}>Descrição:</Text>
              <Text style={transferScreenStyle.fieldValue}>
                {props.dadosTransferencia.descricao}
              </Text>
            </View>
            <View style={transferScreenStyle.fieldRow}>
              <Text style={transferScreenStyle.fieldLabel}>Valor:</Text>
              <Text style={transferScreenStyle.fieldValue}>
                {currencyParser(props.dadosTransferencia.valor)}
              </Text>
            </View>
            <View style={transferScreenStyle.fieldRow}>
              <Text style={transferScreenStyle.fieldLabel}>
                Data da transferência:
              </Text>
              <Text style={transferScreenStyle.fieldValue}>
                {props.dadosTransferencia.data}
              </Text>
            </View>
            <PositiveButton
              label="Confirmar"
              onPress={() => {
                if (props.dadosTransferencia.valor > 0) {
                  if (
                    props.contaLogada.saldo >= props.dadosTransferencia.valor
                  ) {
                    props.dispatch({
                      type: "transferencia/transferir",
                      dados: props.dadosTransferencia,
                      contaOrigem: props.contaLogada
                    });
                    props.dispatch({
                      type: "modal/toggleReviewTransferencia"
                    });
                  } else {
                    Alert.alert("Erro", "Saldo insuficiente em conta!");
                  }
                } else {
                  Alert.alert(
                    "Erro",
                    "Valor para transferência não pode ser negativo!"
                  );
                }
              }}
            />
            <NegativeButton
              label="Voltar"
              onPress={() => {
                props.dispatch({
                  type: "modal/toggleReviewTransferencia"
                });
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  ) : (
    <View></View>
  );
};

/**
 * @constant
 * @function ModalComprovante Transfer proof Modal
 * @summary Function responsible for returning the modal responsible for displaying the transaction's proof.
 * Contains all the data of the transaction as well as a button to finish the operation and another one to share the proof
 * through any digital channel;
 * @param {Object} props
 */
const ModalComprovante = props => {
  return (
    <Modal visible={props.visible} transparent={true} animationType="slide">
      <View style={transferScreenStyle.comprovanteContainer}>
        <View style={transferScreenStyle.cardView}>
          <Text style={transferScreenStyle.cardTitle}>Comprovante</Text>
        </View>
        <View style={transferScreenStyle.cardView}>
          <View style={transferScreenStyle.reviewView}>
            <View style={transferScreenStyle.fieldRow}>
              <Text style={transferScreenStyle.comprovanteFieldLabel}>
                Identificador:
              </Text>
              <Text style={transferScreenStyle.comprovanteFieldValue}>
                {props.dadosTransferencia.identificador}
              </Text>
            </View>
            <View style={transferScreenStyle.fieldRow}>
              <Text style={transferScreenStyle.comprovanteFieldLabel}>
                Favorecido:
              </Text>
              <Text style={transferScreenStyle.comprovanteFieldValue}>
                {props.dadosTransferencia.favorecido}
              </Text>
            </View>
            <View style={transferScreenStyle.fieldRow}>
              <Text style={transferScreenStyle.comprovanteFieldLabel}>
                Descrição:
              </Text>
              <Text style={transferScreenStyle.comprovanteFieldValue}>
                {props.dadosTransferencia.descricao}
              </Text>
            </View>
            <View style={transferScreenStyle.fieldRow}>
              <Text style={transferScreenStyle.comprovanteFieldLabel}>
                Valor:
              </Text>
              <Text style={transferScreenStyle.comprovanteFieldValue}>
                {currencyParser(props.dadosTransferencia.valor)}
              </Text>
            </View>
            <View style={transferScreenStyle.fieldRow}>
              <Text style={transferScreenStyle.comprovanteFieldLabel}>
                Data da transferência:
              </Text>
              <Text style={transferScreenStyle.comprovanteFieldValue}>
                {props.dadosTransferencia.data}
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
              props.dispatch({
                type: "transferencia/clear"
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
                    "Comprovante de transferência:\n\n" +
                    "Conta do favorecido: " +
                    props.dadosTransferencia.identificador +
                    "\nFavorecido: " +
                    props.dadosTransferencia.favorecido +
                    "\nDescrição: " +
                    props.dadosTransferencia.descricao +
                    "\nValor: " +
                    props.dadosTransferencia.valor +
                    "\nData da transferência: " +
                    props.dadosTransferencia.data
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
  );
};
