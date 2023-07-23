"use strict";

const {
  generarEnteroAleatorio,
  generarDecimalAleatorio,
} = require("../utilities/randomUtilities");

const calcularPromedioPonderado = (cantidad) => {
  let numeroX = 0;
  let pesos = 0;
  let sumatoria = 0;
  for (let i = 0; i < cantidad; i++) {
    numeroX = generarEnteroAleatorio(1, 40);
    pesos = generarEnteroAleatorio(4, 40);
    sumatoria += numeroX * pesos;
  }
  return sumatoria / cantidad;
};

const imprimirMensaje = (cantidad, resultado) => {
  console.log(
    `el promedio ponderado de ${cantidad} numeros es ${resultado.toFixed(3)}`
  );
};
const min = 1;
const max = 4;
const cantidad = generarEnteroAleatorio(min, max);
const resultado = calcularPromedioPonderado(cantidad);

imprimirMensaje(cantidad, resultado);
