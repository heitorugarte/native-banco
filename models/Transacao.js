/**
 * @author Heitor Ugarte / heitorsilveirafurb@gmail.com
 */

/**
 * @class Transacao
 *
 * @summary Model class used to store a transaction (payment or transfer).
 */
export default class Transacao {
  constructor(data, descricao, valor, debito, tipo) {
    this.data = data;
    this.descricao = descricao;
    this.valor = valor;
    this.debito = debito;
    this.tipo = tipo;
  }
}
