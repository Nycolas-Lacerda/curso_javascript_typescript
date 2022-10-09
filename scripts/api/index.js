const rootElement = document.querySelector("#main-wrapper");
const inputNomeElement = document.querySelector("#nome-pesquisa");
const inputIngredienteElement = document.querySelector("#ingrediente-pesquisa");
const searchIngredientesButtonElement = document.querySelector("#search-button");
inputNomeElement === null || inputNomeElement === void 0 ? void 0 : inputNomeElement.addEventListener('input', filtrarNome);
searchIngredientesButtonElement === null || searchIngredientesButtonElement === void 0 ? void 0 : searchIngredientesButtonElement.addEventListener('click', filtrarIngrediente);
const response = await fetch(`https://receitas-server.vercel.app/api`);
const dados = await (response.json());
const numPorPagina = 30;
let paginaAtual = 1;
const textPageElement = document.querySelector("#actual-page");
const fastBackwardButtonElement = document.querySelector("#fast-backward");
const backwardButtonElement = document.querySelector("#backward");
const forwardButtonElement = document.querySelector("#forward");
const fastForwardButtonElement = document.querySelector("#fast-forward");
textPageElement.innerText = `${paginaAtual}`;
function quebraPesquisa(pesquisa) {
    return pesquisa.trim().split(';');
}
async function filtrarNome() {
    const nome = inputNomeElement.value;
    const filtro = dados.filter((receita) => receita.Name.toLowerCase().includes(nome.toLowerCase()));
    renderizarReceitas(filtro);
}
async function filtrarIngrediente() {
    const ingrediente = inputIngredienteElement.value;
    const array = quebraPesquisa(ingrediente);
    console.log(array);
    const filtro = dados.filter((receita) => {
        const buscaIngrediente = receita.Ingredients.filter((ingredienteReceita) => {
            const arrayBusca = array.filter((ingredientePesquisa) => {
                return ingredienteReceita.toLowerCase().includes(ingredientePesquisa.toLowerCase());
            });
            if (arrayBusca.length === array.length) {
                return receita;
            }
        });
        if (buscaIngrediente.length) {
            console.log(receita);
            return receita;
        }
    });
    // const filtro = dados.filter((receita) => {
    //     const buscaIngrediente = receita.Ingredients.filter((ingredienteReceita) => {
    //         return array.filter((ingrediente) => {
    //             console.log(ingredienteReceita, ' -> ', ingrediente);
    //             return ingredienteReceita.toLowerCase().includes(ingrediente.toLowerCase());
    //         });
    //     });
    //     if(buscaIngrediente.length){
    //         return receita;
    //     }
    // });
    renderizarReceitas(filtro);
}
function calcularPaginas(totalDados) {
    let calculo = Math.floor(totalDados / numPorPagina);
    return calculo > 0 ? calculo : 1;
}
function paginarReceitas(dados, totalPaginas) {
    let inicio = 0;
    let matrizReceitas = [];
    for (let i = 0; i < totalPaginas; i++) {
        matrizReceitas[i] = dados.slice(inicio, inicio + numPorPagina);
        inicio += numPorPagina;
    }
    return matrizReceitas;
}
async function renderizarReceitas(dados) {
    console.log(dados);
    const matrizReceitas = paginarReceitas(dados, calcularPaginas(dados.length));
    try {
        if (calcularPaginas(dados.length) > 1) {
            fastBackwardButtonElement === null || fastBackwardButtonElement === void 0 ? void 0 : fastBackwardButtonElement.addEventListener('click', () => {
                paginaAtual = 1;
                renderizarReceitas(dados);
            });
            backwardButtonElement === null || backwardButtonElement === void 0 ? void 0 : backwardButtonElement.addEventListener('click', () => {
                if (paginaAtual > 1) {
                    paginaAtual--;
                }
                renderizarReceitas(dados);
            });
            forwardButtonElement === null || forwardButtonElement === void 0 ? void 0 : forwardButtonElement.addEventListener('click', () => {
                if (paginaAtual < calcularPaginas(dados.length) - 1) {
                    paginaAtual++;
                }
                renderizarReceitas(dados);
            });
            fastForwardButtonElement === null || fastForwardButtonElement === void 0 ? void 0 : fastForwardButtonElement.addEventListener('click', () => {
                paginaAtual = calcularPaginas(dados.length) - 1;
                renderizarReceitas(dados);
            });
        }
        if (rootElement) {
            textPageElement.innerText = `${paginaAtual}`;
            rootElement.innerHTML = '';
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
    catch (_a) {
        if (rootElement) {
            rootElement.innerHTML = `<h2>Erro ao carregar as receitas...</h2>`;
        }
    }
}
// filtrarIngrediente('butter');
renderizarReceitas(dados);
export {};
