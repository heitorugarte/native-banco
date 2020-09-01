/**
 * @author Heitor Ugarte / heitorsilveirafurb@gmail.com
 */

/**
 * @constant
 * @summary Constant that holds some accounts to be used as a demonstration
 * of the application.
 */
export const accounts = [
  {
    conta: "010203",
    senha: "12345",
    nome: "Heitor Ugarte",
    saldo: 1300,
    extrato: [
      {
        data: "02/08",
        descricao: "Compra no shopping Neumarket",
        valor: 120,
        debito: true,
        tipo: "pagamento"
      },
      {
        data: "11/08",
        descricao: "Compra no McDonalds",
        valor: 19.9,
        debito: true,
        tipo: "pagamento"
      },
      {
        data: "12/08",
        descricao: "Compra na Renner",
        valor: 19.9,
        debito: true,
        tipo: "pagamento"
      },
      {
        data: "13/08",
        descricao: "Compra no site Submarino",
        valor: 249.9,
        debito: true,
        tipo: "pagamento"
      },
      {
        data: "15/08",
        descricao: "Uber",
        valor: 6.5,
        debito: true,
        tipo: "pagamento"
      },
      {
        data: "17/08",
        descricao: "Transferência de Pedro",
        valor: 50,
        debito: false,
        tipo: "transferencia"
      }
    ]
  },
  {
    conta: "1051090",
    senha: "12345",
    nome: "Mateus Lamônica",
    saldo: 935,
    extrato: [
      {
        data: "01/08",
        descricao: "Compra em Cooper Supermercados",
        valor: 80000,
        debito: true,
        tipo: "pagamento"
      },
      {
        data: "03/08",
        descricao: "Compra em MercadoLivre",
        valor: 65,
        debito: true,
        tipo: "pagamento"
      },
      {
        data: "05/08",
        descricao: "Compra em tabacaria",
        valor: 19.9,
        debito: true,
        tipo: "pagamento"
      },
      {
        data: "08/08",
        descricao: "Compra na Steam",
        valor: 120,
        debito: true,
        tipo: "pagamento"
      },
      {
        data: "15/08",
        descricao: "Compra em Submarino",
        valor: 30.5,
        debito: true,
        tipo: "pagamento"
      }
    ]
  },
  {
    conta: "1034500",
    senha: "12345",
    nome: "Pedro Augusto",
    saldo: 1650,
    extrato: [
      {
        data: "04/08",
        descricao: "Compra na Cooper",
        valor: 50,
        debito: true,
        tipo: "pagamento"
      },
      {
        data: "06/08",
        descricao: "Transferência para Daniel",
        valor: 50,
        debito: true,
        tipo: "transferencia"
      },
      {
        data: "15/08",
        descricao: "Transferência para André",
        valor: 80,
        debito: true,
        tipo: "transferencia"
      },
      {
        data: "19/08",
        descricao: "Transferência para Zé",
        valor: 70,
        debito: true,
        tipo: "transferencia"
      },
      {
        data: "21/08",
        descricao: "Uber",
        valor: 9.5,
        debito: true,
        tipo: "pagamento"
      }
    ]
  }
];
