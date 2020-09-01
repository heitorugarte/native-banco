import Transacao from "./Transacao";

/**
 * @author Heitor Ugarte / heitorsilveirafurb@gmail.com
 */

/**
 * @class Usuario
 *
 * @summary Model class used to store a user's account and it's data.
 */
export default class Usuario {
  constructor(conta) {
    this.conta = conta.conta;
    this.senha = conta.senha;
    this.nome = conta.nome;
    this.saldo = conta.saldo;
    this.extrato = this.parseTransacoes(conta.extrato);
  }

  parseTransacoes(transacoes) {
    let extrato = [];
    for (let transacao of transacoes) {
      extrato.push(
        new Transacao(
          transacao.data,
          transacao.descricao,
          transacao.valor,
          transacao.debito,
          transacao.tipo
        )
      );
    }
    return extrato;
  }
}
