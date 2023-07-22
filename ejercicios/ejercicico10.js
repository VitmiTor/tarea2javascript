"use strict";

const {
  generarDecimalAleatorio,
  generarEnteroAleatorio,
} = require("../utilities/randomUtilities");

const calcularInversa = (numero) => {
  let residuo = 0;
  let inverso = 0;
  let aux = numero;

  while (aux != 0) {
    residuo = aux % 10;
    inverso = inverso * 10 + residuo;
    aux = Math.trunc(aux / 10);
  }
  return inverso;
};

const imprimirMensaje = (numero, inverso, capicua) => {
  console.log(
    `el numero ${numero} y su inverso es ${inverso} por lo tanto es capicua? ${capicua}`
  );
};

const number = 12321;
const inversa = calcularInversa(number);
const pregunta = number === inversa;
imprimirMensaje(number, inversa, pregunta);
