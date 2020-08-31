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
    modalComprovantePagamento: false
  },
  action
) {
  switch (action.type) {
    case "login/fieldConta":
      console.log(action.conta);
      return {
        ...state,
        fieldConta: action.conta
      };
    case "login/fieldSenha":
      console.log(action.senha);
      return {
        ...state,
        fieldSenha: action.senha
      };
    case "login/authenticated":
      return {
        ...state,
        fieldConta: "",
        fieldSenha: "",
        contaLogada: action.conta
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
      let dataString = formatarData(
        new Date(action.data.nativeEvent.timestamp)
      );
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
      return {
        ...state,
        datePickerVisivel: false,
        dataSelecionada: dataString
      };
    default:
      return state;
  }
}

function formatarData(data) {
  let dataLocale = data.toLocaleDateString("pt-BR");
  let dataStringSplit = dataLocale.split("/");
  let dataFormatada =
    dataStringSplit[1] + "/" + dataStringSplit[0] + "/" + dataStringSplit[2];
  return dataFormatada;
}
