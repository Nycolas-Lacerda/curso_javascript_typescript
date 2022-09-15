console.log("------------------------------------------------------------------------------");
console.log("Aula 3");
const produtos1 = [
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
const rootElement = document.querySelector("#root");
console.log(rootElement);


if(rootElement){ 
    console.log(1);
    
    produtos1.forEach((produto) => {
        rootElement.innerHTML += `
            <div class="item-wrapper">
                <h2>${produto.modelo}</h2>
                <h3>${produto.categoria}</h3>
                <h4>${produto.marca}</h4>
            </div>
        `;
    });
}