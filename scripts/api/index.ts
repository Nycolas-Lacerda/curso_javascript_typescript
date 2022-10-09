import { Receita } from "./types";

const rootElement = document.querySelector("#main-wrapper");
const inputNomeElement = document.querySelector("#nome-pesquisa");
const inputIngredienteElement = document.querySelector("#ingrediente-pesquisa");


inputNomeElement?.addEventListener('input', filtrarNome);
inputIngredienteElement?.addEventListener('input', filtrarIngrediente);

const response = await fetch(`https://receitas-server.vercel.app/api`);
const dados: Receita[] = await (response.json());
const numPorPagina = 30;
const paginas = Math.floor(dados.length / numPorPagina);
let paginaAtual = 1;
const textPageElement = document.querySelector("#actual-page");
const fastBackwardButtonElement = document.querySelector("#fast-backward");
const backwardButtonElement = document.querySelector("#backward");
const forwardButtonElement = document.querySelector("#forward");
const fastForwardButtonElement = document.querySelector("#fast-forward");

fastBackwardButtonElement?.addEventListener('click', () => {});
backwardButtonElement?.addEventListener('click', () => {});
forwardButtonElement?.addEventListener('click', () => {});
fastForwardButtonElement?.addEventListener('click', () => {});

(textPageElement as HTMLParagraphElement).innerText = `${paginaAtual}`;

function quebraPesquisa(pesquisa: string){
    return pesquisa.split(';');
}

async function filtrarNome(){
    const nome = (inputNomeElement as HTMLInputElement).value;
    const filtro = dados.filter((receita) => {
        console.log(receita.Name.toLowerCase(), nome.toLowerCase());
        
        receita.Name.toLowerCase().includes(nome.toLowerCase());
    });
    renderReceitas(filtro);
}

async function filtrarIngrediente() {
    const ingrediente = (inputIngredienteElement as HTMLInputElement).value;
    const filtro = dados.filter((receita) => {
        const array = quebraPesquisa(ingrediente);

        const buscaIngrediente = receita.Ingredients.filter((ingredienteReceita) => {
            return array.filter((ingrediente) => {
                return ingredienteReceita.toLowerCase().includes(ingrediente.toLowerCase());
            });
        });
        if(buscaIngrediente.length){
            console.log(1);
            return receita;
        }

    });
    renderReceitas(filtro);
}

function paginarReceitas(dados: Receita[]){
    let inicio = 0;
    let matrizReceitas = [];  
    for(let i = 0; i < paginas; i++){
        matrizReceitas[i] = dados.slice(inicio, inicio + numPorPagina);
        inicio += numPorPagina
    }
    return matrizReceitas;
}

async function renderReceitas(dados: Receita[]){
    
    const matrizReceitas = paginarReceitas(dados);
    if(paginaAtual === 1){
        (fastBackwardButtonElement as HTMLButtonElement).disabled =true;
        (backwardButtonElement as HTMLButtonElement).disabled = true;
    }
    if(rootElement){       
        rootElement.innerHTML = '';
        matrizReceitas[paginaAtual].forEach((dados) => {
            rootElement.innerHTML += `
                <div class="item-wrapper">
                    <div class="img-wrapper">
                        <img src="${dados.urlImage}" alt="Imagem da receita" width="100%" height="225px">
                    </div>
                    <h2 class="main-text-md">${dados.Name}</h2>
                    <p class="main-text-sm">${dados.Author}</p>
                </div>`;
        });
        
    }
}
// filtrarIngrediente('butter');
renderReceitas(dados);