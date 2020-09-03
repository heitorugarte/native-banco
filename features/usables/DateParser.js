/**
 * @author Heitor Ugarte / heitorsilveirafurb@gmail.com
 */

/**
 * @function formatarData
 * @summary Function to parse a date object into a date display string.
 * @param {Date} data
 * @returns {String} dataFormatada
 */
export function formatarData(data) {
  let dataLocale = data.toLocaleDateString("pt-BR");
  let dataStringSplit = dataLocale.split("/");
  let dataFormatada =
    dataStringSplit[1] + "/" + dataStringSplit[0] + "/" + dataStringSplit[2];
  return dataFormatada;
}
