"use strict";
const JOGOS = [
    {
        id: 1,
        nome: "Bloodborne",
        img: "../../img/jogos/Bloodborne.jpg",
        preco: 79.90,
        generos: ['Soulslike', 'RPG', 'Fantasia Sombria'],
        comprado: true,
    },
    {
        id: 2,
        nome: "Dark Souls Remastered",
        img: "../../img/jogos/DarkSoulsRemastered.jpg",
        preco: 129.90,
        generos: ['Soulslike', 'RPG', 'Fantasia Sombria'],
        comprado: true,
    },
    {
        id: 3,
        nome: "Dark Souls 2 Scholar Of The First Sin",
        img: "../../img/jogos/DarkSouls2SOTFS.jpg",
        preco: 79.99,
        generos: ['Soulslike', 'RPG', 'Fantasia Sombria'],
        comprado: true,
    },
    {
        id: 4,
        nome: "Dark Souls 3",
        img: "../../img/jogos/DarkSouls3.jpg",
        preco: 159.90,
        generos: ['Soulslike', 'RPG', 'Fantasia Sombria'],
        comprado: true,
    },
    {
        id: 5,
        nome: "Devil May Cry 4: Special Edition",
        img: "../../img/jogos/DevilMayCry4.jpeg",
        preco: 33.56,
        generos: ['Ação', 'Hack and Slash'],
        comprado: false,
    },
    {
        id: 6,
        nome: "Devil May Cry 5",
        img: "../../img/jogos/DevilMayCry5.webp",
        preco: 32.96,
        generos: ['Ação', 'Hack and Slash'],
        comprado: false,
    },
    {
        id: 7,
        nome: "Dragon's Dogma: Dark Arisen",
        img: "../../img/jogos/DragonsDogmaDA.jpg",
        preco: 74.99,
        generos: ['RPG', 'Mundo Aberto'],
        comprado: true,
    },
    {
        id: 8,
        nome: "Elden Ring",
        img: "../../img/jogos/EldenRing.jpg",
        preco: 249.90,
        generos: ['RPG', 'Mundo Aberto', 'Soulslike'],
        comprado: false,
    },
    {
        id: 9,
        nome: "God Of War",
        img: "../../img/jogos/GodOfWar.webp",
        preco: 159.92,
        generos: ['Ação', 'Aventura', 'RPG'],
        comprado: true,
    },
    {
        id: 10,
        nome: "TES V: Skyrim Special Edition",
        img: "../../img/jogos/TESVSkyrimSpecialEdition.webp",
        preco: 149.00,
        generos: ['RPG', 'Mundo Aberto', 'Aventura'],
        comprado: true,
    },
    {
        id: 11,
        nome: "The Witcher 3: Wild Hunt",
        img: "../../img/jogos/TheWitcher3WildHunt.webp",
        preco: 79.99,
        generos: ['RPG', 'Mundo Aberto', 'Atmosférico'],
        comprado: true,
    },
    {
        id: 12,
        nome: "The Legends Of Zelda Breath Of The Wild",
        img: "../../img/jogos/TLoZBoTW.jpg",
        preco: 346.89,
        generos: ['RPG', 'Mundo Aberto', 'Ação'],
        comprado: false,
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
];
const rootElement = document.querySelector("#itens");
const menuGroupElement = document.querySelector("#group-checkbox");
const searchButtonElement = document.querySelector("#search-button");
const homeButtonElement = document.querySelector("#home-button");
const inputValueMinElement = document.querySelector("#input-search-valor-min");
const inputValueMaxElement = document.querySelector("#input-search-valor-max");
const inputTextElement = document.querySelector("#input-search-text");
const selectElement = document.querySelector("#header-select-filter");
const buyButtonElement = document.querySelector("#buy-button");
renderMenu(GENEROS);
const checkboxElement = Array.from(document.querySelectorAll('input[type="checkbox"]'));
const checkboxCheckedElement = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map((e) => e.getAttribute('id'));
function render(itens) {
    if (rootElement) {
        rootElement.innerHTML = '';
        itens.forEach((item) => {
            rootElement.innerHTML += `
                <div class="item-wrapper ${item.comprado === true ? "item-wrapper-buy-true" : "item-wrapper-buy-false"}">
                    <div class="box-img">
                        <img src="${item.img}" width="100%" heigth="415px" alt="${item.nome}" title="${item.nome}" />
                    </div>
                    <div class="box-info">
                        <div class="item-wrapper-name">
                            <h3 class="main-text-lg">${item.nome}</h3>
                        </div>
                        <div class="buy ${item.comprado === true ? "remove" : "add"}" >
                            <button id="buy-button">
                                <img src="${item.comprado === false ? "./img/icons/buy.png" : "./img/icons/remove.png"}" width="100%" title="${item.comprado === true ? "Remover compra" : "Comprar Jogo"}" />
                            </button>
                        </div>
                        <div"item-wrapper-value">
                            <h3 class="main-text-lg">${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.preco)}</h3>
                            <div>
                                <p class="main-text-sm" >${item.generos.join(', ')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
}
function renderMenu(itens) {
    let id;
    if (menuGroupElement) {
        itens.forEach((item) => {
            menuGroupElement.innerHTML += `
                <div id="unit-checkbox" class="lateral-menu-wrapper">
                    <input type="checkbox" id="${item.toLowerCase().normalize('NFD').replace(/[^a-zA-Z0-9s]/g, "")}" name="checkbox">
                    <label for="${item.toLowerCase().normalize('NFD').replace(/[^a-zA-Z0-9s]/g, "")}" class="main-text-sm-white">${item}</label>
                </div>
            `;
        });
    }
}
function searchPrice() {
    const searchInputValueMin = inputValueMinElement.value;
    const searchInputValueMax = inputValueMaxElement.value;
    let newJogos = JOGOS;
    if (searchInputValueMin !== '' || searchInputValueMax !== '') {
        newJogos = JOGOS.filter((jogo) => jogo.preco >= Number.parseFloat(searchInputValueMin) && jogo.preco <= Number.parseFloat(searchInputValueMax));
    }
    render(newJogos);
}
function searchName() {
    const searchInputText = inputTextElement.value;
    let newJogos = JOGOS;
    if (searchInputText !== '') {
        newJogos = JOGOS.filter((jogo) => jogo['nome'].toLowerCase().normalize('NFD').replace(/[^a-zA-Z0-9s]/g, "")
            .includes(searchInputText.toLowerCase().normalize('NFD').replace(/[^a-zA-Z0-9s]/g, "")));
    }
    render(newJogos);
}
function searchBought() {
    const selectElementSelected = selectElement.value;
    let newJogos = JOGOS;
    let comprado;
    if (selectElementSelected !== 'todos') {
        comprado = selectElementSelected === 'true' ? true : false;
        newJogos = JOGOS.filter((jogo) => jogo.comprado === (comprado));
    }
    render(newJogos);
}
function searchGender() {
    const checkboxElementChecked = (checkboxCheckedElement);
    let newJogos = JOGOS;
    if ((checkboxElementChecked).length > 0) {
        newJogos = JOGOS.filter((jogo) => {
            return checkboxElementChecked.some((genero) => {
                console.log(genero);
                return jogo.generos.indexOf(genero.toLowerCase().normalize('NFD').replace(/[^a-zA-Z0-9s]/g, "")) >= 0;
            });
            // .some(r=> arr2.indexOf(r) >= 0)
        });
        // console.log(newJogos);
    }
    render(newJogos);
}
function search() {
    searchName();
    searchPrice();
    searchGender();
}
// function setBuy(){
//     console.log(buyButtonElement);
// }
function reset() {
    console.log(1);
    render(JOGOS);
}
function eventListenerHandle() {
    searchButtonElement === null || searchButtonElement === void 0 ? void 0 : searchButtonElement.addEventListener('click', search);
    homeButtonElement === null || homeButtonElement === void 0 ? void 0 : homeButtonElement.addEventListener('click', reset);
    // (buyButtonElement as HTMLDivElement)?.addEventListener('click', setBuy);
    inputValueMinElement === null || inputValueMinElement === void 0 ? void 0 : inputValueMinElement.addEventListener('input', searchPrice);
    inputValueMaxElement === null || inputValueMaxElement === void 0 ? void 0 : inputValueMaxElement.addEventListener('input', searchPrice);
    inputTextElement === null || inputTextElement === void 0 ? void 0 : inputTextElement.addEventListener('input', searchName);
    selectElement === null || selectElement === void 0 ? void 0 : selectElement.addEventListener('change', searchBought);
    checkboxElement === null || checkboxElement === void 0 ? void 0 : checkboxElement.forEach((e) => e.addEventListener('change', searchGender));
}
render(JOGOS);
eventListenerHandle();
