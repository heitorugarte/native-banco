import { Text, View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { startScreenStyle } from "./style.js";

export const StartScreen = props => {
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
          placeholder="Conta..."
          keyboardType={"number-pad"}
        ></TextInput>
        <TextInput
          style={startScreenStyle.loginInput}
          placeholder="Senha..."
          secureTextEntry={true}
        ></TextInput>
        <TouchableOpacity style={startScreenStyle.btnPrimary}>
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
