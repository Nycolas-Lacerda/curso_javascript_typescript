// função com parametros tipados como number aceitam int/float
/**
 * Implementação da função soma, a mesma realiza a soma de dois valores recebidos por parâmetro 
 * e retorna o valor da soma por meio de um console.log
 * 
 * num1         type number 
 * num2         type number 
*/
function soma(num1: number, num2: number){ 
    console.log("A soma é:",num1 + num2); // retorno da função num1 somado ao num 2
}
soma(10, 32); // chamada da função soma
/**
 * Implementação da função media5, a mesma realiza a soma de 5 valores recebidos por parâmetro 
 * e retorna o valor da média entre eles por meio de um console.log
 * 
 * num1         type number 
 * num2         type number 
 * num3         type number 
 * num4         type number 
 * num5         type number 
 */
function media5(num1: number,num2: number,num3: number,num4: number,num5: number){
    let soma: number = num1 + num2 + num3 + num4 + num5;
    console.log("A média é:", soma / 5); // retorno da função num1 somado ao num 2
}

media5(10, 32, 54, 45, 91); // chamada da função media5

/**
 * Implementação da função calculaIMC, a mesma realiza o calculo do Indice de Massa Corporal de um individuo a partir dos valores 
 * recebidos por parâmetro e retorna o valor resultante por meio de um console.log
 * 
 * peso         type number 
 * altura         type number  
*/
function calculaIMC(peso: number, altura: number){
    let calculo: number = peso / (Math.pow(altura, 2)); 
    console.log("O IMC é:", calculo);
}

calculaIMC(52.6, 1.78); // chamada da função calculaIMC