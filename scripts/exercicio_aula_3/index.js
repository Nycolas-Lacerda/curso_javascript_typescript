"use strict";
console.log("------------------------------------------------------------------------------");
console.log("Aula 3 / 4");
const produtos1 = [
    {
        id: 1,
        modelo: "blusa do zé jacaré",
        marca: "lacosta",
        preco: 12.5,
    },
    {
        id: 2,
        modelo: "bermuda do zé jacaré",
        marca: "lacosta",
        preco: 12.5,
    },
    {
        id: 3,
        modelo: "chapéu do zé jacaré",
        marca: "lacosta",
        preco: 12.5,
    },
    {
        id: 4,
        modelo: "blusa do pica-pau",
        marca: "passarus",
        preco: 12.5,
    },
    {
        id: 5,
        modelo: "bermuda do pica-pau",
        marca: "passarus",
        preco: 12.5,
    },
    {
        id: 6,
        modelo: "chapéu do pica-pau",
        marca: "passarus",
        preco: 12.5,
    },
];
const rootElement = document.querySelector("#root");
const searcButtonElement = document.querySelector("#search-button");
const searcInputElement = document.querySelector("#input-pesquisar");
const searcSelectElement = document.querySelector("#filter-type-select");
function render(itens) {
    if (rootElement) {
        rootElement.innerHTML = '';
        itens.forEach((item) => {
            rootElement.innerHTML += `
                <div class="item-wrapper">
                    <h2>${item.modelo}</h2>
                    <h3>${item.preco}</h3>
                    <h4>${item.marca}</h4>
                </div>
            `;
        });
    }
}
function search() {
    const searchInputValue = searcInputElement.value;
    const filterTypeValue = searcSelectElement.value;
    // const filterTypeValue2 = (searcSelectElement as HTMLSelectElement).value as keyof Omit<Produto, 'id' | 'preco'>;
    const newProdutos = produtos1.filter((produto) => produto[filterTypeValue].includes(searchInputValue));
    render(newProdutos);
}
function eventListenerHandle() {
    searcButtonElement === null || searcButtonElement === void 0 ? void 0 : searcButtonElement.addEventListener('click', search);
}
render(produtos1);
eventListenerHandle();
