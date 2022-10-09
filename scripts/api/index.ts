import { Receita } from "./types";

const rootElement = document.querySelector("#main-wrapper");
const inputNomeElement = document.querySelector("#nome-pesquisa");
const inputIngredienteElement = document.querySelector("#ingrediente-pesquisa");
const searchIngredientesButtonElement = document.querySelector("#search-button");


inputNomeElement?.addEventListener('input', filtrarNome);
searchIngredientesButtonElement?.addEventListener('click', filtrarIngrediente);

const response = await fetch(`https://receitas-server.vercel.app/api`);
const dados: Receita[] = await (response.json());
const numPorPagina = 30;
let paginaAtual = 1;
const textPageElement = document.querySelector("#actual-page");
const fastBackwardButtonElement = document.querySelector("#fast-backward");
const backwardButtonElement = document.querySelector("#backward");
const forwardButtonElement = document.querySelector("#forward");
const fastForwardButtonElement = document.querySelector("#fast-forward");

(textPageElement as HTMLParagraphElement).innerText = `${paginaAtual}`;

function quebraPesquisa(pesquisa: string){
    let pesquisaArray: string[];
    pesquisa = pesquisa.trim();
    pesquisaArray = pesquisa.split(';');

    return pesquisaArray.map((string) => string.trim());
}

async function filtrarNome(){
    const nome = (inputNomeElement as HTMLInputElement).value;
    const filtro = [...dados].filter((receita) => receita.Name.toLowerCase().includes(nome.toLowerCase()));
    renderizarReceitas(filtro);
}

async function filtrarIngrediente() {
    const ingrediente = (inputIngredienteElement as HTMLInputElement).value;
    const array = quebraPesquisa(ingrediente);
    
    const filtro = [...dados].filter((receita) => {
        const buscaIngrediente = receita.Ingredients.filter((ingredienteReceita) => {
            const arrayBusca = array.filter((ingredientePesquisa) => {
                return ingredienteReceita.toLowerCase().includes(ingredientePesquisa.toLowerCase());
            });
            console.log(arrayBusca, array);
            
            if(arrayBusca.length === array.length){
                return receita;
            }
        });

        if(buscaIngrediente.length){
            console.log(receita);
            return receita;
        }
    }); 
    renderizarReceitas(filtro);
}

function calcularPaginas(totalDados: number){
    let calculo = Math.floor(totalDados / numPorPagina);
    return calculo > 0 ? calculo : 1;
}

function paginarReceitas(dados: Receita[], totalPaginas: number){
    let inicio = 0;
    let matrizReceitas = [];  
    for(let i = 0; i < totalPaginas; i++){
        matrizReceitas[i] = dados.slice(inicio, inicio + numPorPagina);
        inicio += numPorPagina;
    }
    return matrizReceitas;
}

async function renderizarReceitas(dados: Receita[]){
    console.log(dados);
    
    const matrizReceitas = paginarReceitas(dados, calcularPaginas(dados.length));
    
    try{
        if(calcularPaginas(dados.length) > 1){
            fastBackwardButtonElement?.addEventListener('click', () => {
                paginaAtual = 1;
                renderizarReceitas(dados);
            });
            backwardButtonElement?.addEventListener('click', () => {
                if(paginaAtual > 1){
                    paginaAtual--;
                }
                renderizarReceitas(dados);
            });
            forwardButtonElement?.addEventListener('click', () => {
                if(paginaAtual < calcularPaginas(dados.length) - 1){
                    paginaAtual++;
                }
                renderizarReceitas(dados);
            });
            fastForwardButtonElement?.addEventListener('click', () => {
                paginaAtual = calcularPaginas(dados.length) - 1;
                renderizarReceitas(dados);
            });
        }
        if(rootElement){   
            (textPageElement as HTMLParagraphElement).innerText = `${paginaAtual}`;    
            rootElement.innerHTML = '';
            if(matrizReceitas.length){
                matrizReceitas[paginaAtual - 1].forEach((dados) => {
                    rootElement.innerHTML += `
                        <div class="item-wrapper">
                            <div class="img-wrapper">
                                <img src="${dados.urlImage}" alt="Imagem da receita" width="100%" height="200px">
                            </div>
                            <h2 class="main-text-md center">${dados.Name}</h2>
                            <p class="main-text-sm right">${dados.Author}</p>
                            <p class="main-text-sm justify"> <b>Ingredients</b> <br> ${dados.Ingredients}</p>
                            <p class="main-text-sm justify"> <b>Method</b> <br> ${dados.Method}</p>
                        </div>`;
                });        
            }
        }
    }
    catch{
        if(rootElement){
            rootElement.innerHTML = `<h2>Erro ao carregar as receitas...</h2>`;
        }
    }
}
// filtrarIngrediente('butter');
renderizarReceitas(dados);