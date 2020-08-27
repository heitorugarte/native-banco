import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView
} from "react-native";
import React from "react";
import { extractScreenStyle } from "./style";
import { monthNames } from "../../support/monthNames";

export const ExtractScreen = props => {
  return (
    <ScrollView>
      <View style={extractScreenStyle.container}>
        <View style={extractScreenStyle.cardView}>
          <View style={extractScreenStyle.topBarView}>
            <TouchableOpacity style={extractScreenStyle.btnBack}>
              <Image
                source={require("../../assets/back.png")}
                style={extractScreenStyle.backIcon}
              />
            </TouchableOpacity>
            <Text style={extractScreenStyle.cardTitle}>Extrato</Text>
          </View>
          <View style={extractScreenStyle.cardRowView}>
            <View>
              <Text style={extractScreenStyle.boldMediumText}>
                Saldo em conta
              </Text>
              <Text style={extractScreenStyle.boldLargeText}>R$ 1.709,65</Text>
            </View>
            <View>
              <TouchableOpacity style={extractScreenStyle.btnPrimaryNeutral}>
                <Text style={extractScreenStyle.btnNeutralText}>
                  Pagamentos
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={extractScreenStyle.btnPrimaryNeutral}>
                <Text style={extractScreenStyle.btnNeutralText}>
                  Transferências
                </Text>
              </TouchableOpacity>
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
