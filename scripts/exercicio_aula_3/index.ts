console.log("------------------------------------------------------------------------------");
console.log("Aula 3 / 4");

type Produto = {
    id: number; 
    marca: string;
    modelo: string; 
    preco: number
}

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
const produtos2 = [
    {id: 1,modelo: "blusa do zé jacaré",marca: "lacosta",preco: 12.5,tamanho: 'P',cores: ['verde', 'amarelo', 'vermelho'],categoria: 'blusa',quantidade: 2,},
    {id: 2,modelo: "bermuda do zé jacaré",marca: "lacosta",preco: 12.5,tamanho: 'M',cores: ['verde', 'amarelo', 'vermelho'],categoria: 'bermuda',quantidade: 2,},
    {id: 3,modelo: "chapéu do zé jacaré",marca: "lacosta",preco: 12.5,tamanho: 'M',cores: ['verde', 'amarelo', 'vermelho'],categoria: 'chapéu',quantidade: 2,},
    {id: 4,modelo: "blusa do pica-pau",marca: "passarus",preco: 12.5,tamanho: 'M',cores: ['branco', 'azul', 'vermelho'],categoria: 'blusa',quantidade: 2,},
    {id: 5,modelo: "bermuda do pica-pau",marca: "passarus",preco: 12.5,tamanho: 'P',cores: ['branco', 'azul', 'vermelho'],categoria: 'bermuda',quantidade: 2,},
    {id: 6,modelo: "chapéu do pica-pau",marca: "passarus",preco: 12.5,tamanho: 'G',cores: ['branco', 'azul', 'vermelho'],categoria: 'chapéu',quantidade: 2,},
];

const rootElementTest = document.querySelector("#root");
const searcButtonElementTest = document.querySelector("#search-button");
const searcInputElementTest = document.querySelector("#input-pesquisar");
const searcSelectElementTest = document.querySelector("#filter-type-select");

function renderProduto(itens: Produto[]){
    if(rootElement){   
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

function searchProduto(){
    const searchInputValue = (searcInputElement as HTMLInputElement).value;
    const filterTypeValue = (searcSelectElement as HTMLSelectElement).value as keyof Pick<Produto, 'marca' | 'modelo'>;
    // const filterTypeValue2 = (searcSelectElement as HTMLSelectElement).value as keyof Omit<Produto, 'id' | 'preco'>;

    const newProdutos = produtos1.filter((produto) => produto[filterTypeValue].includes(searchInputValue));
    renderProduto(newProdutos);
}

function eventListenerHandleTest(){
    (searcButtonElement as HTMLButtonElement)?.addEventListener('click',searchProduto)
}

renderProduto(produtos1);
eventListenerHandleTest();
