import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { homeScreenStyle } from "./style.js";
import BalanceView from "../usables/balance_view/BalanceView";
import { connect } from "react-redux";

const HomeScreen = props => {
  return (
    <ScrollView
      style={{
        backgroundColor: "#00DF74"
      }}
    >
      <View style={homeScreenStyle.container}>
        <HeaderView
          navigation={props.navigation}
          contaLogada={props.contaLogada}
        />
        <OperationsView
          navigation={props.navigation}
          contaLogada={props.contaLogada}
        />
        <BottomView
          navigation={props.navigation}
          contaLogada={props.contaLogada}
        />
      </View>
    </ScrollView>
  );
};

const mapHomeToProps = state => {
  return {
    contaLogada: state.contaLogada
  };
};

export default connect(mapHomeToProps)(HomeScreen);

const HeaderView = props => {
  return (
    <View style={homeScreenStyle.headerView}>
      <Text style={homeScreenStyle.greetingsText}>
        Olá, {props.contaLogada.nome}.
      </Text>
      <BalanceView />
    </View>
  );
};

const OperationsView = props => {
  return (
    <View style={homeScreenStyle.operationsView}>
      <Text style={homeScreenStyle.cardTitle}>Operações</Text>
      <TouchableOpacity
        style={homeScreenStyle.operation}
        onPress={() => props.navigation.navigate("Extract")}
      >
        <Image
          source={require("../../assets/hideIcon.png")}
          style={homeScreenStyle.hideIcon}
        />
        <Text style={homeScreenStyle.operationText}>Extrato</Text>
        <Text style={homeScreenStyle.operationDescription}>
          Verifique suas transações como pagamentos, transferências e depósitos.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={homeScreenStyle.operation}
        onPress={() => props.navigation.navigate("Transfer")}
      >
        <Image
          source={require("../../assets/transferencia.png")}
          style={homeScreenStyle.hideIcon}
        />
        <Text style={homeScreenStyle.operationText}>Transferência</Text>
        <Text style={homeScreenStyle.operationDescription}>
          Envie dinheiro para contas deste ou outros bancos, sem taxas!
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={homeScreenStyle.operation}
        onPress={() => props.navigation.navigate("Payment")}
      >
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
      <TouchableOpacity
        style={homeScreenStyle.operationSair}
        onPress={() => {
          props.navigation.navigate("Start");
        }}
      >
        <Text style={homeScreenStyle.operationTextSair}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};
