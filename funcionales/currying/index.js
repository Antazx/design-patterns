const suma = (a, b) => a + b;
suma(1, 5);
/* Que pasaría si al inicio solo conocemos uno de los dos valores */

const curryingSuma = a => b=> a + b;

curryingSuma(1)(5);

const sumaPrimerValor = curryingSuma(2);

console.log(sumaPrimerValor);
console.log(sumaPrimerValor(7));