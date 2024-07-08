const prompt = require('prompt-sync')();
const funcao = require('./funcoes.js');

console.log(`Olá, vou fazer um cálculo bem esquisito para você baseado no número que for fornecido.
Se a soma dos digitos do número informado for par, esse número será ímpar.
Se a soma dos digitos do número informado for ímpar, esse número será par.`);
console.log('Informe o número agora:');
let numero = prompt('');

funcao.parImpar(numero);