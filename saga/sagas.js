import { call, put, takeLatest } from "redux-saga/effects";
import { Alert } from "react-native";
import { doTransfer, doPagamento } from "../features/api";

/**
 * @author Heitor Ugarte / heitorsilveirafurb@gmail.com
 */

/**
 * @function transferencia
 * @generator
 * @summary Function responsible for handling the request to transfer money between two accounts.
 * Receives the user's dispatch containing the transactions data, calls the API to make handle
 * the transference and when concluded, updates the application's state.
 * @param {Object} action
 */
function* transferencia(action) {
  try {
    const transacaoOrigem = yield call(
      doTransfer,
      action.dados,
      action.contaOrigem
    );

    if (transacaoOrigem) {
      yield put({
        type: "saldo/subtrair",
        valor: action.dados.valor,
        transacao: transacaoOrigem
      });
      yield put({
        type: "modal/toggleComprovanteTransferencia"
      });
    } else {
      throw "Conta destino não encontrada";
    }
  } catch (e) {
    Alert.alert("Erro", e.toString());
  }
}

/**
 * @function pagamento
 * @generator
 * @summary Function responsible for handling the request to make a payment.
 * Receives the user's dispatch containing the transactions data, calls the API to make handle
 * the payment and when concluded, updates the application's state.
 * @param {Object} action
 */
function* pagamento(action) {
  try {
    const transacaoPagamento = yield call(
      doPagamento,
      action.dados,
      action.contaOrigem
    );

    if (transacaoPagamento) {
      yield put({
        type: "saldo/subtrair",
        valor: action.dados.valor,
        transacao: transacaoPagamento
      });
      yield put({
        type: "modal/toggleComprovantePagamento"
      });
    }
  } catch (e) {
    Alert.alert("Erro", e.toString());
  }
}

/**
 * @function mySaga
 * @generator
 * @summary Function responsible for intercepting dispatches that require asynchronous operations.
 */
export default function* mySaga() {
  yield takeLatest("transferencia/transferir", transferencia);
  yield takeLatest("pagamento/pagar", pagamento);
}
