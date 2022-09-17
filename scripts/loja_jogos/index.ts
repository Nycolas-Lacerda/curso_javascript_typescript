type Jogo = {
    id: number; 
    nome: string;
    img: string; 
    preco: number;
}

const jogos = [
        {
            id: 1,
            nome: "Bloodborne",
            img: "../../img/Bloodborne.jpg",
            preco: 79.90,
        },
        {
            id: 2,
            nome: "Dark Souls 2 Scholar Of Thge First Sin",
            img: "../../img/DarkSouls2SOTFS.jpg",
            preco: 79.90,
        },
        {
            id: 3,
            nome: "Dark Souls 3",
            img: "../../img/DarkSouls3.jpg",
            preco: 12.5,
        },
        {
            id: 4,
            nome: "Dark Souls Remastered",
            img: "../../img/DarkSoulsRemastered.jpg",
            preco: 12.5,
        },
        {
            id: 5,
            nome: "Devil May Cry 4",
            img: "../../img/DevilMayCry4.jpeg",
            preco: 12.5,
        },
        {
            id: 6,
            nome: "Devil May Cry 5",
            img: "../../img/DevilMayCry5.webp",
            preco: 12.5,
        },
        {
            id: 7,
            nome: "Dragon's Dogma: Dark Arisen",
            img: "../../img/DragonsDogmaDA.jpg",
            preco: 12.5,
        },
        {
            id: 8,
            nome: "Elden Ring",
            img: "../../img/EldenRing.jpg",
            preco: 12.5,
        },
        {
            id: 9,
            nome: "God Of War",
            img: "../../img/GodOfWar.webp",
            preco: 12.5,
        },
        {
            id: 10,
            nome: "The Elder Scrolls V: Skyrim",
            img: "../../img/TESVSkyrim.jpg",
            preco: 12.5,
        },
        {
            id: 11,
            nome: "The Witcher 3: Wild Hunt",
            img: "../../img/TheWitcher3WildHunt.webp",
            preco: 12.5,
        },
        {
            id: 12,
            nome: "The Legends Of Zelda Breath Of The Wild",
            img: "../../img/TLoZBoTW.jpg",
            preco: 12.5,
        },
];

const rootElement = document.querySelector("#root");
const searchButtonElement = document.querySelector("#search-button");
const searchInputElement = document.querySelector("#input-pesquisar");
const searchSelectElement = document.querySelector("#filter-type-select");


function render(itens: Jogo[]){
    if(rootElement){   
        rootElement.innerHTML = '';    
        itens.forEach((item) => {
            rootElement.innerHTML += `
                <div class="item-wrapper">
                    <img src="${item.img}" width="100%" height="125px" alt="${item.nome}" title="${item.nome}" >
                    <h3>${new Intl.NumberFormat('pt-BR',  { style: 'currency', currency: 'BRL' }).format(item.preco)}</h3>
                </div>
            `;
        });
    }
}

function search(){
    const searchInputValue = (searchInputElement as HTMLInputElement).value;
    const filterTypeValue = (searchSelectElement as HTMLSelectElement).value as keyof Pick<Jogo, 'nome'>;
    // const filterTypeValue2 = (searchSelectElement as HTMLSelectElement).value as keyof Omit<Jogo, 'id' | 'preco'>;
   
    const newJogos = jogos.filter((jogo) => jogo[filterTypeValue].toLowerCase().includes(searchInputValue.toLowerCase()));
    console.log(newJogos);
    render(newJogos);
}

function eventListenerHandle(){
    (searchButtonElement as HTMLButtonElement)?.addEventListener('click',search)
}

render(jogos);
eventListenerHandle();