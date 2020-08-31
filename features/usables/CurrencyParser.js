export function currencyParser(valor) {
  let valorFormatado = "R$ " + valor.toFixed(2).replace(".", ",");
  return valorFormatado;
}
