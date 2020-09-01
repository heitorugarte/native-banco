import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "./features/start_screen/StartScreen";
import HomeScreen from "./features/home_screen/HomeScreen";
import TransferScreen from "./features/transfer_screen/TransferScreen";
import ExtractScreen from "./features/extract_screen/ExtractScreen";
import PaymentScreen from "./features/payment_screen/PaymentScreen";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./features/reducer";
import mySaga from "./saga/sagas";

const sagaMiddleware = createSagaMiddleware();
const Stack = createStackNavigator();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

/**
 * @summary Starts saga's middleware to intercept dispatches that require asynchronous operations.
 */
sagaMiddleware.run(mySaga);

/**
 * @function App
 * @summary Main application's component to be rendered, containing all the interfaces, modals and navigation components.
 * @returns Main React component to be rendered.
 */
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
