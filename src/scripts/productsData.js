// JavaScript code goes here

const products = [
  {
    title: "Magnetite",
    category: 8,
    price: 89.0,
    img: "./src/assets/img/1.jpg",
    band: "Scalene",
    year: 2017,
    id: 0,
  },
  {
    title: "Acabou o Chorare",
    category: 2,
    price: 66.0,
    img: "./src/assets/img/2.jpg",
    band: "Novos Baianos",
    year: 1972,
    id: 1,
  },
  {
    title: "Nirvana Discografia",
    category: 8,
    price: 50.0,
    img: "./src/assets/img/3.jpg",
    band: "Nirvana",
    year: 1990,
    id: 2,
  },
  {
    title: "Both Sides",
    category: 1,
    price: 22.0,
    img: "./src/assets/img/4.jpg",
    band: "Phil Collins",
    year: 1993,
    id: 3,
  },
];


const buttonsContainer = document.querySelector('.buttonsContainer');
const buttons = buttonsContainer.querySelectorAll("button");
const inputPrice = document.querySelector('#inputPrice');
const selectedPrice = document.querySelector('#selectedPrice');
const listCards = document.querySelector('.listContainer');

function renderCards(filteredProducts) {
  listCards.innerHTML
  = "";

filteredProducts.forEach((product) => {
const cardContainer = document.createElement("div");
cardContainer.classList.add("cardContainer");

const img = document.createElement("img");
img.src = product.img;
const divInfo = document.createElement("div");
divInfo.className = "albumInfo";

const banda = document.createElement("p");
banda.textContent = product.band;
banda.className = "band";

const ano = document.createElement("p");
ano.textContent = product.year;
ano.className = "year";

const album = document.createElement("p");
album.textContent = product.title;
album.className = "album";

const divBuy = document.createElement("div");
divBuy.className = "buy";

const preco = document.createElement("p");
preco.textContent = "R$" + product.price.toFixed(2).replace(".", ",");
preco.className = "price";

const button = document.createElement("button");
button.className = "button";
button.textContent = "Comprar";

cardContainer.append(img, divInfo, album, divBuy);

divInfo.append(banda, ano);
divBuy.append(preco, button);

listCards.appendChild(cardContainer);
});
}

