"use strict";

const {
  generarEnteroAleatorio,
  generarDecimalAleatorio,
} = require("../utilities/randomUtilities");

const calcularMediaArmonica = (n) => {
  let sumaInversas = 0;
  let numeroX = 0;
  for (let i = 0; i < n; i++) {
    numeroX = generarEnteroAleatorio(10, 20);
    sumaInversas += Math.pow(numeroX, -1);
  }
  return numeroX / sumaInversas;
};

const imprimirMensaje = (cantidadN, resultado) => {
  console.log(`${resultado.toFixed(5)} es el resultado de la media armonica
                ${cantidadN} es el valor de N`);
};

const cantidadN = generarEnteroAleatorio(1, 10);

const mediaArmonica = calcularMediaArmonica(cantidadN);

imprimirMensaje(cantidadN, mediaArmonica);
