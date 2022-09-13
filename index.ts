// função com parametros tipados como number aceitam int/float
function somaExemplo(num1: number, num2: number){
    console.log(num1 + num2);
}

somaExemplo(1, 3.3); // chamada da função

// criação do tipo de objeto Carro, o mesmo é utilizado abaixo
type Carro = { 
    id: number;
    modelo: string;
    ano: number;
    fabricante: string;
};

// utilização do tipo Carro
const carro: Carro = {
    id: 1,
    modelo: "Mustang",
    ano: 1969,
    fabricante: "Ford",
};

console.log(carro);
console.log(carro.id, carro.modelo, carro.ano, carro.fabricante);

