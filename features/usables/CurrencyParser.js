/**
 * @author Heitor Ugarte / heitorsilveirafurb@gmail.com
 */

/**
 * @function currencyParser
 * @summary Function to parse a number value into a currency display string.
 * @param {Number} valor
 * @returns {String} valorFormatado
 */
export function currencyParser(valor) {
  let valorFormatado = "R$ " + valor.toFixed(2).replace(".", ",");
  return valorFormatado;
}
