type CEP = {
    bairro: string;
    cep: string;
    complemento: string;
    ddd: string;
    gia: string;
    ibge: string;
    localidade: string;
    logradouro: string;
    siafi: string;
    uf: string;
}

const input = document.querySelector('#input-cep');
const button = document.querySelector('#button-cep');
const paragraph = document.querySelector('#endereco');

(button)?.addEventListener('click', () => {
    if(input){
        buscaCep();
    }
});

async function buscaCep() {
    const inputValue = (input as HTMLInputElement).value;
        
    const response = await fetch(`https://viacep.com.br/ws/${inputValue}/json/`);
    const dados = await (response.json());
   
    console.log(dados);

    renderCep(dados);
}

function renderCep(itens: CEP){
    if(paragraph){
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