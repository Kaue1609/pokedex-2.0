let maça = {
    nome: "maça",
    cor: "vermelha",
    peso: "20g",
    tipo: "fruta",
}

let abacaxi = {
    nome: "abacaxi",
    cor: "amarela",
    peso: "100g",
    tipo: "fruta",
}

let cenoura = {
    nome: "cenoura",
    cor: "laranja",
    peso: "57gg",
    tipo: "legume",
}

let alimentos = [maça, abacaxi, cenoura];

alimentos.forEach(ali => {
    console.log(ali.cor)
} )