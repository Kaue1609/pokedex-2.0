//let cep = prompt("digite seu cep:")
//let url = "https://viacep.com.br/ws/" + cep + "/json"

//fetch(url)
//.then(response => response.json())
//.then(response => exibir(response))

//function exibir(dados) {
    //console.log(dados)
//}



let paisdigitado = prompt("digite seu país:")
let url = "https://restcountries.com/v3.1/name/" + paisdigitado

fetch(url)
.then(response => response.json())
.then(response => exibirflag(response))

function exibirflag(pais)
let bandeira
    