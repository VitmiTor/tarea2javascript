"use strict";

const {
  generarEnteroAleatorio,
  generarDecimalAleatorio,
} = require("../utilities/randomUtilities");

const calcularMediaArmonica = (numerosAleatorios) => {
  let b = 0;
  let a = 0;
  for (let i = 0; i < numerosAleatorios; i++) {
    a = generarEnteroAleatorio(10, 20);
    console.log(a);
    b += Math.pow(a, -1);
  }
  return numerosAleatorios / b;
};

const imprimirMensaje = (cantidad, resultado) => {
  console.log(`${resultado.toFixed(5)} es el resultado de la media armonica
                ${cantidad} es el valor de N`);
};

const cantidad = 4;

const c = calcularMediaArmonica(cantidad);

imprimirMensaje(cantidad, c);
