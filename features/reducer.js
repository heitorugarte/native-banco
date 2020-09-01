import { formatarData } from "./usables/DateParser";
import Usuario from "../models/Usuario";

/**
 * @author Heitor Ugarte / heitorsilveirafurb@gmail.com
 */

/**
 * @function reducer
 * @summary Reducer responsible for managing the dispatches made by the application
 * and updating states according to the user's actions and requests.
 * @param {Object} state
 * @param {Object} action
 */
export default function reducer(
  state = {
    fieldConta: "",
    fieldSenha: "",
    saldoVisivel: true,
    datePickerVisivel: false,
    dataSelecionada: formatarData(new Date()),
    contaLogada: null,
    modalReviewTransferencia: false,
    modalComprovanteTransferencia: false,
    modalComprovantePagamento: false,
    tipoDeExtrato: "todos",
    dadosTransferencia: {
      identificador: "",
      favorecido: "",
      descricao: "",
      valor: 0,
      data: formatarData(new Date())
    },
    dadosPagamento: {
      codigo: "",
      descricao: "",
      valor: 0,
      data: formatarData(new Date())
    }
  },
  action
) {
  switch (action.type) {
    case "login/fieldConta":
      return {
        ...state,
        fieldConta: action.conta
      };
    case "login/fieldSenha":
      return {
        ...state,
        fieldSenha: action.senha
      };
    case "login/authenticated":
      return {
        ...state,
        fieldConta: "",
        fieldSenha: "",
        contaLogada: new Usuario(action.conta)
      };
    case "saldo/toggleVisivel":
      return {
        ...state,
        saldoVisivel: !state.saldoVisivel
      };
    case "data/showDatePicker":
      return {
        ...state,
        datePickerVisivel: true,
        dataSelecionada: null
      };
    case "data/setData":
      return {
        ...state,
        datePickerVisivel: false,
        dataSelecionada: action.data
      };
    case "modal/toggleReviewTransferencia":
      return {
        ...state,
        modalReviewTransferencia: !state.modalReviewTransferencia
      };
    case "modal/toggleComprovanteTransferencia":
      return {
        ...state,
        modalComprovanteTransferencia: !state.modalComprovanteTransferencia
      };
    case "modal/toggleComprovantePagamento":
      return {
        ...state,
        modalComprovantePagamento: !state.modalComprovantePagamento
      };
    case "extrato/showPagamentos":
      return {
        ...state,
        tipoDeExtrato: "pagamento"
      };
    case "extrato/showTransferencias":
      return {
        ...state,
        tipoDeExtrato: "transferencia"
      };
    case "extrato/showTodos":
      return {
        ...state,
        tipoDeExtrato: "todos"
      };
    case "saldo/subtrair":
      let contaClone = { ...state.contaLogada };
      contaClone.saldo -= action.transacao.valor;
      contaClone.extrato.push(action.transacao);
      return {
        ...state,
        contaLogada: contaClone
      };
    case "transferencia/clear":
      let novosDadosTransferencia = {
        identificador: "",
        favorecido: "",
        descricao: "",
        valor: 0,
        data: formatarData(new Date())
      };
      return {
        ...state,
        dadosTransferencia: novosDadosTransferencia
      };
    case "pagamento/clear":
      let novosDadosPagamento = {
        codigo: "",
        descricao: "",
        valor: 0,
        data: formatarData(new Date())
      };
      return {
        ...state,
        dadosPagamento: novosDadosPagamento
      };
    default:
      return state;
  }
}
