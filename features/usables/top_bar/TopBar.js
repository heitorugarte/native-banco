import { Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { topBarStyle } from "./style";

export const TopBar = props => {
  return (
    <View style={topBarStyle.topBarView}>
      <TouchableOpacity
        style={topBarStyle.btnBack}
        onPress={() => props.navigation.goBack()}
      >
        <Image
          source={require("../../../assets/back.png")}
          style={topBarStyle.backIcon}
        />
      </TouchableOpacity>
      <Text style={topBarStyle.topBarTitle}>{props.title}</Text>
    </View>
  );
};
