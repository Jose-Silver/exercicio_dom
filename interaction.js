let ITENS_LOJA = [{
        nome: "Bola da Copa",
        preco: 86.30,
        url_img: "./img/bola_copa.webp",
        descricao: "Bola utilizada na Copa do Mundo, idela para utilizar em campo e colecionar"
    },
    {
        nome: "Carrinho da Hot Wheels",
        preco: 5.80,
        url_img: "./img/carro_hotwheels.jpeg",
        descricao: "Carrinho para dar de presentes para crianças ou colecionar"
    },
    {
        nome: "Chinelo",
        preco: 19.99,
        url_img: "./img/chinelo.webp",
        descricao: "Chinelo para se utilizar em qualquer lugar"
    },
    {
        nome: "Escorredor de Louça",
        preco: 15.20,
        url_img: "./img/escorredor_louca.webp",
        descricao: "Utilizando para ajudar no processo de secagem dos utensilios"
    },
    {
        nome: "Espada Medieval",
        preco: 200.18,
        url_img: "./img/espada_medieval.png",
        descricao: "Utilizada em batalhar para neutralizar o inimigo ou como item de decoração"
    },
    {
        nome: "Guitarra",
        preco: 1980.99,
        url_img: "./img/guitarra.webp",
        descricao: "Otima para utilizar em bandas de hard rock"
    },
    {
        nome: "Toalha de Banho",
        preco: 9.99,
        url_img: "./img/toalha_banho.webp",
        descricao: "Boa para se secar apos o banho"
    },
    {
        nome: "Vinho",
        preco: 59.90,
        url_img: "./img/vinho.webp",
        descricao: "Vinho que harmoniza muito bem com carnes vermelhas "
    }
]

let section = document.querySelector("#itens_section")
const item = document.createElement("div");
for (x in ITENS_LOJA) {
    let preco = document.createElement("p");
    let descricao = document.createElement("p");
    descricao.innerHTML = "<b> Descricao: </b>" + "<p>" + ITENS_LOJA[x]["descricao"] + "</p>";
    preco.innerHTML = "<b>" + "preco:   R$" + "</b>" + ITENS_LOJA[x]["preco"];
    let item = document.createElement("div");
    let name = document.createElement("h2");
    name.textContent = ITENS_LOJA[x]["nome"];
    let img = document.createElement("img");
    img.src = ITENS_LOJA[x]["url_img"];
    item.append(img);
    item.append(name);
    item.append(preco);
    item.append(descricao);
    descricao.style.wra
    item.style.textAlign = "center";
    section.appendChild(item);



}