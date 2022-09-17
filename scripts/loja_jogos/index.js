"use strict";
const jogos = [
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
const rootElement = document.querySelector("#root");
const searchButtonElement = document.querySelector("#search-button");
const homeButtonElement = document.querySelector("#home-button");
const searchInputElement = document.querySelector("#input-pesquisar");
const searchSelectElement = document.querySelector("#filter-type-select");
function render(itens) {
    if (rootElement) {
        rootElement.innerHTML = '';
        itens.forEach((item) => {
            rootElement.innerHTML += `
                <div class="item-wrapper">
                    <h3>${item.nome}</h3>
                    <img src="${item.img}" width="100%" height="125px" alt="${item.nome}" title="${item.nome}" >
                    <h3>${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.preco)}</h3>
                    <div class="genders">
                        <p>${item.generos.join(', ')}</p>
                    </div>
                </div>
            `;
        });
    }
}
function search() {
    const searchInputValue = searchInputElement.value;
    const filterTypeValue = searchSelectElement.value;
    // const filterTypeValue2 = (searchSelectElement as HTMLSelectElement).value as keyof Omit<Jogo, 'id' | 'preco'>;
    let newJogos = [];
    if (filterTypeValue === 'nome') {
        newJogos = jogos.filter((jogo) => jogo[filterTypeValue].toLowerCase().includes(searchInputValue.toLowerCase()));
    }
    if (filterTypeValue === 'generos') {
        newJogos = jogos.filter((jogo) => {
            return jogo[filterTypeValue].filter((genero) => {
                console.log(genero.toLowerCase().includes(searchInputValue.toLowerCase()));
                return genero.toLowerCase().includes(searchInputValue.toLowerCase());
            });
        });
    }
    // const newJogos = jogos.filter((jogo) => jogo[filterTypeValue].toLowerCase().includes(searchInputValue.toLowerCase()));
    render(newJogos);
}
function reset() {
    render(jogos);
}
function eventListenerHandle() {
    searchButtonElement === null || searchButtonElement === void 0 ? void 0 : searchButtonElement.addEventListener('click', search);
    homeButtonElement === null || homeButtonElement === void 0 ? void 0 : homeButtonElement.addEventListener('click', reset);
}
render(jogos);
eventListenerHandle();
