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
        data: "02/09",
        descricao: "Compra no shopping Neumarket",
        valor: 120,
        debito: true,
        tipo: "pagamento"
      },
      {
        data: "28/08",
        descricao: "Compra no McDonalds",
        valor: 19.9,
        debito: true,
        tipo: "pagamento"
      },
      {
        data: "26/08",
        descricao: "Compra na Renner",
        valor: 19.9,
        debito: true,
        tipo: "pagamento"
      },
      {
        data: "21/08",
        descricao: "Compra no site Submarino",
        valor: 249.9,
        debito: true,
        tipo: "pagamento"
      },
      {
        data: "19/08",
        descricao: "Uber",
        valor: 6.5,
        debito: true,
        tipo: "pagamento"
      },
      {
        data: "01/08",
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
  },
  {
    conta: "1025002",
    senha: "12345",
    nome: "Álick Veras",
    saldo: 1900,
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
        descricao: "Transferência para Zobo",
        valor: 50,
        debito: true,
        tipo: "transferencia"
      },
      {
        data: "15/08",
        descricao: "Transferência para Bona",
        valor: 80,
        debito: true,
        tipo: "transferencia"
      },
      {
        data: "19/08",
        descricao: "Transferência para Pedrão 3 Dígitos",
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
  },
  {
    conta: "1013005",
    senha: "12345",
    nome: "Vitor Calvette",
    saldo: 2100,
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
        descricao: "Transferência para Pedrão",
        valor: 50,
        debito: true,
        tipo: "transferencia"
      },
      {
        data: "15/08",
        descricao: "Transferência para Mãe",
        valor: 80,
        debito: true,
        tipo: "transferencia"
      },
      {
        data: "19/08",
        descricao: "Transferência para Pedrão 3 Dígitos",
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
  },
  {
    conta: "1074002",
    senha: "12345",
    nome: "João Vitor",
    saldo: 1400,
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
        descricao: "Transferência para Alickzera",
        valor: 50,
        debito: true,
        tipo: "transferencia"
      },
      {
        data: "15/08",
        descricao: "Transferência para Jenni",
        valor: 80,
        debito: true,
        tipo: "transferencia"
      },
      {
        data: "19/08",
        descricao: "Transferência para Pedrão 3 Dígitos",
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
  },
  {
    conta: "1083012",
    senha: "12345",
    nome: "Renan Melo",
    saldo: 400,
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
        descricao: "Transferência para Alickzera",
        valor: 50,
        debito: true,
        tipo: "transferencia"
      },
      {
        data: "15/08",
        descricao: "Transferência para Renata",
        valor: 80,
        debito: true,
        tipo: "transferencia"
      },
      {
        data: "19/08",
        descricao: "Transferência para Pedrão 3 Dígitos",
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
  },
  {
    conta: "1184052",
    senha: "12345",
    nome: "André Scharf",
    saldo: 18000,
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
        descricao: "Transferência para Alickzera",
        valor: 50,
        debito: true,
        tipo: "transferencia"
      },
      {
        data: "15/08",
        descricao: "Transferência para Lams",
        valor: 80,
        debito: true,
        tipo: "transferencia"
      },
      {
        data: "19/08",
        descricao: "Transferência para Pedrão 3 Dígitos",
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
