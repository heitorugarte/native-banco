import { accounts } from "../features/accounts";
import Transacao from "../models/Transacao";

/**
 * @author Heitor Ugarte / heitorsilveirafurb@gmail.com
 */

/**
 * @function doTransfer
 *
 * @summary Function responsible for making the transfer transaction between two accounts present in the 'accounts' variable.
 * @param {Object} dados
 * @param {Object} contaOrigem
 *
 * @returns {Transacao} transacaoOrigem - the final transaction object representing it's sucessful conclusion.
 * Will be adder later on to the source account's extract.
 */
export function doTransfer(dados, contaOrigem) {
  let transacao = new Transacao(
    dados.data,
    dados.descricao,
    dados.valor,
    false,
    "transferencia"
  );

  let contaDestino = findConta(dados.identificador);

  if (contaDestino) {
    contaDestino.saldo += transacao.valor;
    contaDestino.extrato.push(transacao);

    let contaOrigemMemoria = findConta(contaOrigem.conta);
    contaOrigemMemoria.saldo -= transacao.valor;
    let transacaoOrigem = { ...transacao };
    transacaoOrigem.debito = true;
    contaOrigemMemoria.extrato.push(transacaoOrigem);
    return transacaoOrigem;
  }
  return null;
}

/**
 * @function doPagamento
 *
 * @summary Function responsible for making the payment transaction using the fictional document code provided.
 * @param {Object} dados
 * @param {Object} contaOrigem
 *
 * @returns {Transacao} transacaoOrigem - the final transaction object representing it's sucessful conclusion.
 * Will be adder later on to the source account's extract.
 */
export function doPagamento(dados, contaOrigem) {
  let transacao = new Transacao(
    dados.data,
    dados.descricao,
    dados.valor,
    true,
    "pagamento"
  );

  let contaOrigemMemoria = findConta(contaOrigem.conta);
  contaOrigemMemoria.saldo -= transacao.valor;
  contaOrigemMemoria.extrato.push(transacao);
  return transacao;
}

/**
 * @function authenticate
 * @summary Function responsible for validating if the account's number and password informed by the
 * user corresponds to any present in the 'accounts' constant.
 * @param {string} conta
 * @param {string} senha
 * @returns {Object} Account object corresponding to the account name and password typed in.
 */
export function authenticate(conta, senha) {
  let contaEncontrada = accounts.find(
    item => item.conta === conta && item.senha === senha
  );
  return contaEncontrada;
}

/**
 * @function findConta
 * @summary Function responsible for returning a reference to the account corresponding to the number
 * requested by the user (Used for transfering money between accounts)
 * @param {string} identificador
 * @returns {Object} Account object corresponding to the account name and password typed in.
 */
function findConta(identificador) {
  let contaDestino = accounts.find(conta => {
    return conta.conta === identificador;
  });
  return contaDestino;
}
