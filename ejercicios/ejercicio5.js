"use strict";

const {
  generarEnteroAleatorio,
  generarDecimalAleatorio,
} = require("../utilities/randomUtilities");

const calcularPromedioPonderado = (cantidad) => {
  let a = 0;
  let b = 0;
  let sumatoria = 0;
  for (let i = 0; i < cantidad; i++) {
    a = generarEnteroAleatorio(1, 40);
    b = generarEnteroAleatorio(4, 40);
    sumatoria += a * b;
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
