"use strict";

const {
  generarEnteroAleatorio,
  generarDecimalAleatorio,
} = require("../utilities/randomUtilities");

const calcularPromedioPonderado = (cantidad) => {
  let sumatoria = 0;
  for (let i = 0; i < cantidad; i++) {
    const numeroX = generarEnteroAleatorio(1, 40);
    const pesos = generarEnteroAleatorio(4, 40);
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
