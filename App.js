import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, StatusBar as Statusbar } from "react-native";
import { StartScreen } from "./features/start_screen/StartScreen";
import { HomeScreen } from "./features/home_screen/HomeScreen";
import { TransferScreen } from "./features/transfer_screen/TransferScreen";
import { ExtractScreen } from "./features/extract_screen/ExtractScreen";
import { PaymentScreen } from "./features/payment_screen/PaymentScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StartScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Statusbar.currentHeight,
    flex: 1,
    backgroundColor: "#00DF74",
    justifyContent: "flex-end"
  }
});
