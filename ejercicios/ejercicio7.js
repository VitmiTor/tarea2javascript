"use strict";

const {
  generarDecimalAleatorio,
  generarEnteroAleatorio,
} = require("../utilities/randomUtilities");

let convertidor = "e";
function calcularDolares(convertidor, ahorros) {
  switch (convertidor) {
    case "s":
      return ahorros * 3.9;
      break;
    case "yu":
      return ahorros * 7.25;

      break;
    case "e":
      return ahorros * 0.99;

      break;
    case "ye":
      return ahorros * 145.66;

      break;
    case "r":
      return ahorros * 15637;

      break;
    default:
      console.log("No se encontro moneda");
      break;
  }
}

const imprimirMensaje = (ahorros, convertidor) => {
  const resultado = calcularDolares(convertidor, ahorros);
  console.log(
    `El equivalente de ${ahorros.toFixed(2)} USD es ${resultado.toFixed(2)}`
  );
};

const min = 1;
const max = 3000;
const ahorros = generarDecimalAleatorio(min, max);
const moneda = "s";
imprimirMensaje(ahorros, moneda);
