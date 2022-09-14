"use strict";
console.log("------------------------------------------------------------------------------");
console.log("Aula 2");
const produtos = [
    {
        id: 1,
        modelo: "blusa do zé jacaré",
        marca: "lacosta",
        categoria: "blusa",
    },
    {
        id: 2,
        modelo: "bermuda do zé jacaré",
        marca: "lacosta",
        categoria: "bermuda",
    },
    {
        id: 3,
        modelo: "chapéu do zé jacaré",
        marca: "lacosta",
        categoria: "acessorios",
    },
    {
        id: 4,
        modelo: "blusa do pica-pau",
        marca: "lacosta",
        categoria: "blusa",
    },
    {
        id: 5,
        modelo: "bermuda do pica-pau",
        marca: "lacosta",
        categoria: "bermuda",
    },
    {
        id: 6,
        modelo: "chapéu do pica-pau",
        marca: "lacosta",
        categoria: "acessorios",
    },
];
/**
 * função que captura uma categoria e filtra os produtos através dela
 *
 * categoria            type string
*/
function filtro(categoria) {
    let arrProduto = [{}];
    arrProduto = produtos.filter((produto) => {
        if (produto.categoria === categoria) {
            return produto;
        }
    });
    return arrProduto;
}
let categoria = 'acessorios';
console.log("Filtro 'acessorios': ", filtro(categoria)); // chamada da função no console.log
/**
 * função que recebe o valor final[final] do array e o tamanho[tam] dos arrays que serão gerados para serem inseridos
 * na matriz
 *
 * final            type number
 * tam              type number
*/
function geraMatriz(final, tam) {
    const array = [];
    let matriz = [];
    let cont = 0;
    for (let i = 0; i < final; i++) {
        array[i] = i + 1;
    }
    for (let i = 0; i < final; i++) {
        if (i % tam === 0) {
            matriz[cont] = array.slice(i, i + tam);
            cont++;
        }
    }
    return matriz;
}
console.log("Matriz gerada:", geraMatriz(35, 3));
/**
 * função que recebe o valor final[final] do array e o tamanho[tam] dos arrays que serão gerados para serem inseridos
 * na matriz e após isso gerar uma
 *
 * final            type number
 * tam              type number
*/
function geraMatrizSomada(final, tam) {
    const matriz = geraMatriz(final, tam);
    return matriz.map((arr, ind) => {
        let arraySoma = [0];
        arraySoma[0] = arr.reduce((val, id) => {
            return val + id;
        });
        return arraySoma;
    });
}
console.log("Matriz somada gerada:", geraMatrizSomada(27, 3));
/* abaixo exemplo de uso do reduce
    const blusas = [
        {
            id: 1,
            marca: 'lacosta',
            modelo: 'blusa do naruto',
            preco: 12.50
        },
        {
            id: 2,
            marca: 'lacosta',
            modelo: 'blusa do naruto',
            preco: 12.50
        },
        {
            id: 3,
            marca: 'lacosta',
            modelo: 'blusa do naruto',
            preco: 12.50
        },
        {
            id: 4,
            marca: 'lacosta',
            modelo: 'blusa do naruto',
            preco: 12.50
        },
    ];
    
    let blusa = blusas.reduce((acc, blusa) => {
        if(blusa.id > 1){
            acc[0].quantidade += 1;
        }
        return acc;
    }, [{
        id: 1,
        marca: 'lacosta',
        modelo: 'blusa do naruto',
        preco: 12.50,
        quantidade: 1
    }]);

console.log(blusa);
*/
