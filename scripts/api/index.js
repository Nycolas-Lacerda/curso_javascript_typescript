const rootElement = document.querySelector("#main-wrapper");
const inputNomeElement = document.querySelector("#nome-pesquisa");
const inputIngredienteElement = document.querySelector("#ingrediente-pesquisa");
inputNomeElement === null || inputNomeElement === void 0 ? void 0 : inputNomeElement.addEventListener('input', filtrarNome);
inputIngredienteElement === null || inputIngredienteElement === void 0 ? void 0 : inputIngredienteElement.addEventListener('input', filtrarIngrediente);
const response = await fetch(`https://receitas-server.vercel.app/api`);
const dados = await (response.json());
const numPorPagina = 30;
const paginas = Math.floor(dados.length / numPorPagina);
let paginaAtual = 1;
const textPageElement = document.querySelector("#actual-page");
const fastBackwardButtonElement = document.querySelector("#fast-backward");
const backwardButtonElement = document.querySelector("#backward");
const forwardButtonElement = document.querySelector("#forward");
const fastForwardButtonElement = document.querySelector("#fast-forward");
fastBackwardButtonElement === null || fastBackwardButtonElement === void 0 ? void 0 : fastBackwardButtonElement.addEventListener('click', () => { });
backwardButtonElement === null || backwardButtonElement === void 0 ? void 0 : backwardButtonElement.addEventListener('click', () => { });
forwardButtonElement === null || forwardButtonElement === void 0 ? void 0 : forwardButtonElement.addEventListener('click', () => { });
fastForwardButtonElement === null || fastForwardButtonElement === void 0 ? void 0 : fastForwardButtonElement.addEventListener('click', () => { });
textPageElement.innerText = `${paginaAtual}`;
function quebraPesquisa(pesquisa) {
    return pesquisa.split(';');
}
async function filtrarNome() {
    const nome = inputNomeElement.value;
    const filtro = dados.filter((receita) => {
        console.log(receita.Name.toLowerCase(), nome.toLowerCase());
        receita.Name.toLowerCase().includes(nome.toLowerCase());
    });
    renderReceitas(filtro);
}
async function filtrarIngrediente() {
    const ingrediente = inputIngredienteElement.value;
    const filtro = dados.filter((receita) => {
        const array = quebraPesquisa(ingrediente);
        const buscaIngrediente = receita.Ingredients.filter((ingredienteReceita) => {
            return array.filter((ingrediente) => {
                return ingredienteReceita.toLowerCase().includes(ingrediente.toLowerCase());
            });
        });
        if (buscaIngrediente.length) {
            console.log(1);
            return receita;
        }
    });
    renderReceitas(filtro);
}
function paginarReceitas(dados) {
    let inicio = 0;
    let matrizReceitas = [];
    for (let i = 0; i < paginas; i++) {
        matrizReceitas[i] = dados.slice(inicio, inicio + numPorPagina);
        inicio += numPorPagina;
    }
    return matrizReceitas;
}
async function renderReceitas(dados) {
    const matrizReceitas = paginarReceitas(dados);
    if (paginaAtual === 1) {
        fastBackwardButtonElement.disabled = true;
        backwardButtonElement.disabled = true;
    }
    if (rootElement) {
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
export {};
