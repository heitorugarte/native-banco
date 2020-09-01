import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { homeScreenStyle } from "./style.js";
import BalanceView from "../usables/balance_view/BalanceView";
import { connect } from "react-redux";


/**
 * @author Heitor Ugarte / heitorsilveirafurb@gmail.com
 */

/**
 * @constant
 * @function HomeScreen Home Screen (Logged area)
 * @summary Function responsible for returning the home screen component after the user's logged in.
 * Connected to the reducer to receive contaLogada as a prop (object representing the current user's account)
 * Passes down to it's children the reference to contaLogada.
 * @param {Object} props
 */
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

/**
 * @constant
 * @function mapHomeToProps
 * @summary Função responsável por mapear quais props o componente HomeScreen deve receber do estado da store.
 * @param {Object} state
 */
const mapHomeToProps = state => {
  return {
    contaLogada: state.contaLogada
  };
};

/**
 * @function connect
 * @summary Conecta o componente HomeScreen à redux store para gerenciamento de estado e exporta-o como módulo.
 * @exports HomeScreen
 */
export default connect(mapHomeToProps)(HomeScreen);

/**
 * @constant
 * @function HeaderView Componente Cabeçalho.
 * @summary Função responsável por retornar o componente cabeçalho, contendo um texto de boas-vindas ao usuário logado
 * e o componente que exibe seu saldo atual (BalanceView).
 * @param {Object} props
 */
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

/**
 * @constant
 * @function OperationsView
 * @summary Função responsável por retornar a interface de operações que o usuário pode fazer em sua conta através do aplicativo.
 * Consiste em um painel de botões para acessar as diversas telas do aplcativo e realizar ações dentro do sistema como ver o extrato,
 * fazer transferências e pagamentos.
 * @param {Object} props
 */
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
          Verifique suas transações como pagamentos e transferências.
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
          Envie dinheiro para contas bizu ou outros bancos, sem taxas.
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

/**
 * @constant
 * @function BottomView
 * @summary Função responsável por retornar o componente que exibe um botão para acessar uma funcionalidade não implementada
 * de simulação de crédito assim como um botão para sair da conta atualmente logada e retornar á tela de login.
 * @param {Object} props
 */
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
