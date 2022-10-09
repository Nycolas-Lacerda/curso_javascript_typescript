"use strict";
var _a;
const input = document.querySelector('#input-cep');
const button = document.querySelector('#button-cep');
const paragraph = document.querySelector('#endereco');
(_a = (button)) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    if (input) {
        buscaCep();
    }
});
async function buscaCep() {
    const inputValue = input.value;
    const response = await fetch(`https://viacep.com.br/ws/${inputValue}/json/`);
    const dados = await (response.json());
    console.log(dados);
    renderCep(dados);
}
function renderCep(itens) {
    if (paragraph) {
        paragraph.innerHTML = `
            <p>CEP: ${itens.cep}</p>
            <p>BAIRRO: ${itens.bairro}</p>
            <p>COMPLEMENTO: ${itens.complemento}</p>
            <p>DDD: ${itens.ddd}</p>
            <p>LOCALIDADE: ${itens.localidade}</p>
            <p>LOGRADOURO: ${itens.logradouro}</p>
            <p>UF: ${itens.uf}</p>
            <p>IBGE: ${itens.ibge}</p>
            <p>SIAFI: ${itens.siafi}</p>
            <p>GIA: ${itens.gia}</p>
        `;
    }
}
