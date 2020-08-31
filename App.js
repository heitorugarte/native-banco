import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, StatusBar as Statusbar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "./features/start_screen/StartScreen";
import HomeScreen from "./features/home_screen/HomeScreen";
import TransferScreen from "./features/transfer_screen/TransferScreen";
import ExtractScreen from "./features/extract_screen/ExtractScreen";
import PaymentScreen from "./features/payment_screen/PaymentScreen";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./features/reducer";

const Stack = createStackNavigator();
const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Start"
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Start" component={StartScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Transfer" component={TransferScreen} />
          <Stack.Screen name="Extract" component={ExtractScreen} />
          <Stack.Screen name="Payment" component={PaymentScreen} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Statusbar.currentHeight,
    flex: 1,
    backgroundColor: "#00DF74",
    justifyContent: "flex-end",
    borderWidth: 1
  }
});
