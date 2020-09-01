import { Text, View } from "react-native";
import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { fieldStyle } from "../fieldStyle";
import { connect } from "react-redux";
import { formatarData } from "../../DateParser";

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
            minimumDate={new Date()}
            onChange={value => {
              let dataFormatada = formatarData(
                new Date(value.nativeEvent.timestamp)
              );
              props.onChange(dataFormatada);
              props.dispatch({
                type: "data/setData",
                data: dataFormatada
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
