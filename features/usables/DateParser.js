export function formatarData(data) {
  let dataLocale = data.toLocaleDateString("pt-BR");
  let dataStringSplit = dataLocale.split("/");
  let dataFormatada =
    dataStringSplit[1] + "/" + dataStringSplit[0] + "/" + dataStringSplit[2];
  return dataFormatada;
}
