type Jogo = {
    id: number; 
    nome: string;
    img: string; 
    preco: number;
    generos: string[];
}

const JOGOS = [
        {
            id: 1,
            nome: "Bloodborne",
            img: "../../img/jogos/Bloodborne.jpg",
            preco: 79.90,
            generos: ['Soulslike', 'RPG', 'Fantasia Sombria'],
        },
        {
            id: 2,
            nome: "Dark Souls Remastered",
            img: "../../img/jogos/DarkSoulsRemastered.jpg",
            preco: 129.90,
            generos: ['Soulslike', 'RPG', 'Fantasia Sombria'],
        },
        {
            id: 3,
            nome: "Dark Souls 2 Scholar Of The First Sin",
            img: "../../img/jogos/DarkSouls2SOTFS.jpg",
            preco: 79.99,
            generos: ['Soulslike', 'RPG', 'Fantasia Sombria'],
        },
        {
            id: 4,
            nome: "Dark Souls 3",
            img: "../../img/jogos/DarkSouls3.jpg",
            preco: 159.90,
            generos: ['Soulslike', 'RPG', 'Fantasia Sombria'],

        },
        {
            id: 5,
            nome: "Devil May Cry 4: Special Edition",
            img: "../../img/jogos/DevilMayCry4.jpeg",
            preco: 33.56,
            generos: ['Ação', 'Hack and Slash'],
        },
        {
            id: 6,
            nome: "Devil May Cry 5",
            img: "../../img/jogos/DevilMayCry5.webp",
            preco: 32.96,
            generos: ['Ação', 'Hack and Slash'],
        },
        {
            id: 7,
            nome: "Dragon's Dogma: Dark Arisen",
            img: "../../img/jogos/DragonsDogmaDA.jpg",
            preco: 74.99,
            generos: ['RPG', 'Mundo Aberto'],
        },
        {
            id: 8,
            nome: "Elden Ring",
            img: "../../img/jogos/EldenRing.jpg",
            preco: 249.90,
            generos: ['RPG', 'Mundo Aberto', 'Soulslike'],
        },
        {
            id: 9,
            nome: "God Of War",
            img: "../../img/jogos/GodOfWar.webp",
            preco: 159.92,
            generos: ['Ação', 'Aventura', 'RPG'],
        },
        {
            id: 10,
            nome: "TES V: Skyrim Special Edition",
            img: "../../img/jogos/TESVSkyrimSpecialEdition.webp",
            preco: 149.00,
            generos: ['RPG', 'Mundo Aberto', 'Aventura'],
        },
        {
            id: 11,
            nome: "The Witcher 3: Wild Hunt",
            img: "../../img/jogos/TheWitcher3WildHunt.webp",
            preco: 79.99,
            generos: ['RPG', 'Mundo Aberto', 'Atmosférico'],
        },
        {
            id: 12,
            nome: "The Legends Of Zelda Breath Of The Wild",    
            img: "../../img/jogos/TLoZBoTW.jpg",
            preco: 346.89,
            generos: ['RPG', 'Mundo Aberto', 'Ação'],
        },
];

const GENEROS = [
    'Ação',
    'Atmosférico',
    'Aventura',
    'Fantasia Sombria',
    'Hack and Slash',
    'Mundo Aberto', 
    'Soulslike', 
    'RPG', 
]

const rootElement = document.querySelector("#itens");
const menuGroupElement = document.querySelector("#group-checkbox");
const searchButtonElement = document.querySelector("#search-button");
const homeButtonElement = document.querySelector("#home-button");
const inputValueMinElement = document.querySelector("#input-pesquisar-valor-min");
const inputValueMaxElement = document.querySelector("#input-pesquisar-valor-max");
const inputTextElement = document.querySelector("#input-pesquisar-text");
const checkboxElement = Array.from(document.querySelectorAll("input[type=checkbox]"));
console.log(checkboxElement);


function render(itens: Jogo[]){
    if(rootElement){   
        rootElement.innerHTML = '';    
        itens.forEach((item) => {          
            rootElement.innerHTML += `
                <div class="item-wrapper">
                    <div class="box-front-img">
                        <img src="${item.img}" width="100%" heigth="415px" alt="${item.nome}" title="${item.nome}" />
                    </div>
                    <div class="box-back-info">
                        <div class="item-wrapper-name">
                            <h3 class="main-text-lg">${item.nome}</h3>
                        </div>
                        <div"item-wrapper-value">
                            <h3 class="main-text-lg">${new Intl.NumberFormat('pt-BR',  { style: 'currency', currency: 'BRL' }).format(item.preco)}</h3>
                            <div>
                                <p class="main-text-sm" >${item.generos.join(', ')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    window.scrollTo({top: 0, behavior: "smooth"});
}

function renderMenu(itens: string[]){
    let id;
    if(menuGroupElement){
        itens.forEach((item) => {    
            menuGroupElement.innerHTML += `
                <div id="unit-checkbox" class="lateral-menu-wrapper">
                    <input type="checkbox" id="${item.toLowerCase().normalize('NFD').replace(/[^a-zA-Z0-9s]/g, "")}" name="${item.toLowerCase().normalize('NFD').replace(/[^a-zA-Z0-9s]/g, "")}">
                    <label for="${item.toLowerCase().normalize('NFD').replace(/[^a-zA-Z0-9s]/g, "")}" class="main-text-sm-white">${item}</label>
                </div>
            `;   
        })
    }
}

function searchPrice(){
    const searchInputValueMin = (inputValueMinElement as HTMLInputElement).value;
    const searchInputValueMax = (inputValueMaxElement as HTMLInputElement).value;
    let newJogos: Jogo[] = JOGOS;
    let generos: string[] = [];

    // if(filterTypeValue === 'generos'){
    //     newJogos = JOGOS.filter((jogo) => {
    //         generos = jogo['generos'].map((genero) => {
    //             return genero.toLowerCase().normalize('NFD').replace(/[^a-zA-Z0-9s]/g, "");
    //         });
    //         return generos.includes(searchInputText.toLowerCase().normalize('NFD').replace(/[^a-zA-Z0-9s]/g, ""));
    //     });        
    // }
    if(searchInputValueMin !== '' || searchInputValueMax !== ''){
        newJogos = JOGOS.filter((jogo) => {
            if(searchInputValueMin && searchInputValueMax){
                // console.log(searchInputValueMin, searchInputValueMin);
                
                if(jogo.preco >= Number.parseFloat(searchInputValueMin) && jogo.preco <= Number.parseFloat(searchInputValueMax)){
                    return true;
                }
            }
            if(searchInputValueMin && !searchInputValueMax){
                return jogo.preco >= Number.parseFloat(searchInputValueMin);
            }
            if(!searchInputValueMin && searchInputValueMax){
                return jogo.preco <= Number.parseFloat(searchInputValueMax);
            }
        });
    }
    // const newJogos = jogos.filter((jogo) => jogo[filterTypeValue].toLowerCase().includes(searchInputText.toLowerCase()));
    render(newJogos);
}

function searchName(){
    const searchInputText = (inputTextElement as HTMLInputElement).value;
    let newJogos: Jogo[] = JOGOS;

    if(searchInputText !== ''){
        newJogos = JOGOS.filter((jogo) => {
            return jogo['nome'].toLowerCase().normalize('NFD').replace(/[^a-zA-Z0-9s]/g, "").includes(searchInputText.toLowerCase().normalize('NFD').replace(/[^a-zA-Z0-9s]/g, ""))
        });
    }
    render(newJogos);
}
function searchGender(){
    const searchInputText = (inputTextElement as HTMLInputElement).value;
    let newJogos: Jogo[] = JOGOS;

    if(searchInputText !== ''){
        newJogos = JOGOS.filter((jogo) => {
            return jogo['nome'].toLowerCase().normalize('NFD').replace(/[^a-zA-Z0-9s]/g, "").includes(searchInputText.toLowerCase().normalize('NFD').replace(/[^a-zA-Z0-9s]/g, ""))
        });
    }
    render(newJogos);
}

function search(){
    searchName();
    searchPrice();
    searchGender();
}
function reset(){
    const inputValueMinElement = document.querySelector("#input-pesquisar-valor-min");
    const inputValueMaxElement = document.querySelector("#input-pesquisar-valor-max");
    const inputTextElement = document.querySelector("#input-pesquisar-text");
    (inputValueMinElement as HTMLInputElement)?.setAttribute('value', '1');
    (inputValueMaxElement as HTMLInputElement)?.setAttribute('value', '400');
    (inputTextElement as HTMLInputElement)?.setAttribute('value', '');
    render(JOGOS);
}



function eventListenerHandle(){
    (searchButtonElement as HTMLButtonElement)?.addEventListener('click', search);
    (homeButtonElement as HTMLDivElement)?.addEventListener('click', reset);
    (inputValueMinElement as HTMLInputElement)?.addEventListener('input', searchPrice);
    (inputValueMaxElement as HTMLInputElement)?.addEventListener('input', searchPrice);
    (inputTextElement as HTMLInputElement)?.addEventListener('input', searchName);
    
    (checkboxElement as HTMLInputElement[])?.forEach((e)=>{        
        console.log(checkboxElement);
        e.addEventListener('change', searchGender);        
    });
}

renderMenu(GENEROS);

render(JOGOS);

eventListenerHandle();