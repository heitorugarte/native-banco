import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import React from "react";
import { homeScreenStyle } from "./style.js";

const components = [HeaderView, OperationsView, BottomView];

export const HomeScreen = props => {
  return (
    <View style={homeScreenStyle.container}>
      <HeaderView />
      <OperationsView />
      <BottomView />
    </View>
  );
};

const HeaderView = props => {
  return (
    <View style={homeScreenStyle.headerView}>
      <Text style={homeScreenStyle.greetingsText}>Olá, usuário.</Text>
      <View style={homeScreenStyle.saldoView}>
        <Text style={homeScreenStyle.saldoLabelText}>Seu saldo:</Text>
        <Text style={homeScreenStyle.saldoText}>R$ 1.709,65 </Text>
        <TouchableOpacity style={homeScreenStyle.btnHideSaldo}>
          <Image
            source={require("../../assets/hideIcon.png")}
            style={homeScreenStyle.hideIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const OperationsView = props => {
  return (
    <View style={homeScreenStyle.operationsView}>
      <Text style={homeScreenStyle.cardTitle}>Operações</Text>
      <TouchableOpacity style={homeScreenStyle.operation}>
        <Image
          source={require("../../assets/hideIcon.png")}
          style={homeScreenStyle.hideIcon}
        />
        <Text style={homeScreenStyle.operationText}>Extrato</Text>
        <Text style={homeScreenStyle.operationDescription}>
          Verifique suas transações como pagamentos, transferências e depósitos.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={homeScreenStyle.operation}>
        <Image
          source={require("../../assets/transferencia.png")}
          style={homeScreenStyle.hideIcon}
        />
        <Text style={homeScreenStyle.operationText}>Transferência</Text>
        <Text style={homeScreenStyle.operationDescription}>
          Envie dinheiro para contas deste ou outros bancos, sem taxas!
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={homeScreenStyle.operation}>
        <Image
          source={require("../../assets/pagarConta.png")}
          style={homeScreenStyle.hideIcon}
        />
        <Text style={homeScreenStyle.operationText}>Pagamentos</Text>
        <Text style={homeScreenStyle.operationDescription}>
          Pague contas, faturas e boletos em geral.
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const BottomView = props => {
  return (
    <View style={homeScreenStyle.operationsView}>
      <TouchableOpacity style={homeScreenStyle.operation}>
        <Image
          source={require("../../assets/credito.png")}
          style={homeScreenStyle.hideIcon}
        />
        <Text style={homeScreenStyle.operationText}>Opções de Crédito</Text>
        <Text style={homeScreenStyle.operationDescription}>
          Faça uma simulação e confira nossas opções de crédito disponíveis para
          seu perfil com as menores taxas de juros!
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={homeScreenStyle.operationSair}>
        <Text style={homeScreenStyle.operationTextSair}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};
