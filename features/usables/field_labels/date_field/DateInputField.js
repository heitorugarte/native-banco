import { Text, View } from "react-native";
import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { fieldStyle } from "../fieldStyle";
import { connect } from "react-redux";

const DateInputField = props => {
  return (
    <View style={fieldStyle.fieldView}>
      <Text style={fieldStyle.fieldLabel}>{props.label}</Text>
      <View>
        <Text
          onPress={() => {
            props.dispatch({
              type: "data/showDatePicker"
            });
          }}
        >
          {props.dataSelecionada}
        </Text>
        {props.datePickerVisivel ? (
          <DateTimePicker
            value={new Date()}
            display="default"
            onChange={value => {
              props.dispatch({
                type: "data/setData",
                data: value
              });
            }}
          />
        ) : null}
      </View>
    </View>
  );
};

export const mapDateToProps = state => {
  return {
    datePickerVisivel: state.datePickerVisivel,
    dataSelecionada: state.dataSelecionada
  };
};

export default connect(mapDateToProps)(DateInputField);
