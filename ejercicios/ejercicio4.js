"use strict";

const {
  generarEnteroAleatorio,
  generarDecimalAleatorio,
} = require("../utilities/randomUtilities");

const calcularMediaArmonica = (numerosAleatorios) => {
  let sumaInversas = 0;
  let numAleatorio = 0;
  for (let i = 0; i < numerosAleatorios; i++) {
    numAleatorio = generarEnteroAleatorio(10, 20);
    sumaInversas += Math.pow(numAleatorio, -1);
  }
  return numAleatorio / sumaInversas;
};

const imprimirMensaje = (cantidad, resultado) => {
  console.log(`${resultado.toFixed(5)} es el resultado de la media armonica
                ${cantidad} es el valor de N`);
};

const cantidad = generarEnteroAleatorio(1, 10);

const mediaArmonica = calcularMediaArmonica(cantidad);

imprimirMensaje(cantidad, mediaArmonica);
