import { Text, View, Picker } from "react-native";
import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { fieldStyle } from "../fieldStyle";

var show; //Variavel temporaria

export const DateInputField = props => {
  return (
    <View style={fieldStyle.fieldView}>
      <Text style={fieldStyle.fieldLabel}>{props.label}</Text>
      <View>
        <Text onPress={() => {} /*Funcao para mostrar o dateField*/}></Text>
        {show ? (
          <DateTimePicker
            value={new Date()}
            display="default"
            /*onChange={() => {}}*/
          />
        ) : null}
      </View>
    </View>
  );
};
