import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { startScreenStyle } from "./style.js";
import { connect } from "react-redux";
import { authenticate } from "../api";

/**
 * @author Heitor Ugarte / heitorsilveirafurb@gmail.com
 */

/**
 * @constant
 * @function StartScreen
 * @summary Function responsible for returning the StartScreen component, which handles the log in process.
 * The sign up button (Cadastrar) and it's functionalities have not been implemented as of now.
 * @param {Object} props
 */
const StartScreen = props => {
  return (
    <View style={startScreenStyle.container}>
      <View style={startScreenStyle.headerView}>
        <Text style={startScreenStyle.titleText}>Bizu Bank</Text>
        <Text style={startScreenStyle.cardSubtitle}>
          Banco diferenciado para os diferenciados
        </Text>
      </View>
      <View style={startScreenStyle.cardView}>
        <Text style={startScreenStyle.cardTitle}>Acessar Conta</Text>
        <TextInput
          style={startScreenStyle.loginInput}
          value={props.fieldConta}
          placeholder="Conta..."
          keyboardType={"number-pad"}
          onChange={value => {
            props.dispatch({
              type: "login/fieldConta",
              conta: value.nativeEvent.text
            });
          }}
        ></TextInput>
        <TextInput
          style={startScreenStyle.loginInput}
          value={props.fieldSenha}
          placeholder="Senha..."
          secureTextEntry={true}
          onChange={value => {
            props.dispatch({
              type: "login/fieldSenha",
              senha: value.nativeEvent.text
            });
          }}
        ></TextInput>
        <TouchableOpacity
          style={startScreenStyle.btnPrimary}
          onPress={() => {
            let usuario = authenticate(props.fieldConta, props.fieldSenha);
            if (usuario) {
              props.dispatch({
                type: "login/authenticated",
                conta: usuario
              });
              props.navigation.navigate("Home");
            } else {
              Alert.alert("Erro", "A conta ou senha informadas são inválidas.");
            }
          }}
        >
          <Text style={startScreenStyle.btnPrimaryText}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <View style={startScreenStyle.cardView}>
        <Text style={startScreenStyle.cardTitle}>Ainda não tem conta?</Text>
        <Text style={startScreenStyle.cardSubtitle}>
          Aproveite os benefícios de ser um Bizurado
        </Text>
        <TouchableOpacity style={startScreenStyle.btnPrimary}>
          <Text style={startScreenStyle.btnPrimaryText}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

/**
 * @constant
 * @function mapStartToProps
 * @summary Function responsible for mapping which props the StartScreen component must receive from redux's store.
 * @param {Object} state
 */
const mapStartToProps = state => {
  return {
    fieldConta: state.fieldConta,
    fieldSenha: state.fieldSenha
  };
};

/**
 * @function connect
 * @summary Connects the StartScreen component to the redux's store to manage it's state and exports it as a default module.
 * @exports StartScreen
 */
export default connect(mapStartToProps)(StartScreen);
