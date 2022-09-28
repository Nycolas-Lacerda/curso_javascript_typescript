"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
const input = document.querySelector('#input-cep');
const button = document.querySelector('#button-cep');
const paragraph = document.querySelector('#endereco');
(_a = (button)) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    if (input) {
        buscaCep();
    }
});
function buscaCep() {
    return __awaiter(this, void 0, void 0, function* () {
        const inputValue = input.value;
        const response = yield fetch(`https://viacep.com.br/ws/${inputValue}/json/`);
        const dados = yield (response.json());
        console.log(dados);
        renderCep(dados);
    });
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
