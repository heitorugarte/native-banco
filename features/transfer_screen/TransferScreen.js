import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Picker,
  Modal,
  ScrollView,
  Image
} from "react-native";
import React from "react";
import { transferScreenStyle } from "./style.js";
import DateTimePicker from "@react-native-community/datetimepicker";

var show = false;

export const TransferScreen = props => {
  return (
    <ScrollView>
      <View style={transferScreenStyle.container}>
        <View style={transferScreenStyle.cardView}>
          <View style={transferScreenStyle.topBarView}>
            <TouchableOpacity style={transferScreenStyle.btnBack}>
              <Image
                source={require("../../assets/back.png")}
                style={transferScreenStyle.backIcon}
              />
            </TouchableOpacity>
            <Text style={transferScreenStyle.cardTitle}>Transferência</Text>
          </View>
        </View>
        <View style={transferScreenStyle.cardView}>
          <View style={transferScreenStyle.fieldView}>
            <Text style={transferScreenStyle.fieldLabel}>Destino:</Text>
            <Picker
              style={transferScreenStyle.picker}
              selectedValue={"Conta BizuBank"}
            >
              <Picker.Item label="Conta BizuBank" value="Conta BizuBank" />
              <Picker.Item label="Outro Banco" value="Outro Banco" />
            </Picker>
          </View>
          <View style={transferScreenStyle.fieldView}>
            <Text style={transferScreenStyle.fieldLabel}>Identificador:</Text>
            <TextInput
              placeholder=""
              style={transferScreenStyle.textInput}
              maxLength={32}
            />
          </View>
          <View style={transferScreenStyle.fieldView}>
            <Text style={transferScreenStyle.fieldLabel}>Favorecido:</Text>
            <TextInput
              placeholder=""
              style={transferScreenStyle.textInput}
              maxLength={32}
            />
          </View>
          <View style={transferScreenStyle.fieldView}>
            <Text style={transferScreenStyle.fieldLabel}>Descrição:</Text>
            <TextInput
              placeholder=""
              style={transferScreenStyle.textInput}
              maxLength={25}
            />
          </View>
          <View style={transferScreenStyle.fieldView}>
            <Text style={transferScreenStyle.fieldLabel}>Valor:</Text>
            <TextInput
              placeholder=""
              style={transferScreenStyle.textInput}
              keyboardType="number-pad"
            />
          </View>
          <View style={transferScreenStyle.fieldView}>
            <Text style={transferScreenStyle.fieldLabel}>Data:</Text>
            <View style={transferScreenStyle.dateFieldView}>
              <Text
                style={transferScreenStyle.textInput}
                onPress={function() {
                  show = true;
                }}
              ></Text>
              {show ? (
                <DateTimePicker
                  value={new Date()}
                  display="default"
                  onChange={() => {}}
                />
              ) : null}
            </View>
          </View>
        </View>
        <View style={transferScreenStyle.cardView}>
          <TouchableOpacity style={transferScreenStyle.btnPrimaryPositive}>
            <Text style={transferScreenStyle.btnPrimaryText}>Transferir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={transferScreenStyle.btnPrimaryNegative}>
            <Text style={transferScreenStyle.btnPrimaryText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
        <ModalReviewDetalhes visible={false} />
        <ModalComprovante
          visible={false}
          valor={1400}
          usuario={"Destinatário"}
        />
      </View>
    </ScrollView>
  );
};

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
            <TouchableOpacity style={transferScreenStyle.btnPrimaryPositive}>
              <Text style={transferScreenStyle.btnPrimaryText}>Confirmar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={transferScreenStyle.btnPrimaryNeutral}>
              <Text style={transferScreenStyle.btnPrimaryText}>Voltar</Text>
            </TouchableOpacity>
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
          <TouchableOpacity style={transferScreenStyle.btnPrimaryPositive}>
            <Text style={transferScreenStyle.btnPrimaryText}>Concluir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={transferScreenStyle.btnAuxiliar}>
            <Text style={transferScreenStyle.btnPrimaryText}>Compartilhar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
