"use strict";
// função com parametros tipados como number aceitam int/float
function somaExemplo(num1, num2) {
    console.log(num1 + num2);
}
somaExemplo(1, 3.3); // chamada da função
// utilização do tipo Carro
const carro = {
    id: 1,
    modelo: "Mustang",
    ano: 1969,
    fabricante: "Ford",
};
console.log(carro);
console.log(carro.id, carro.modelo, carro.ano, carro.fabricante);
