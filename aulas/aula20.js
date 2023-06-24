let caixa = document.getElementById("ide");
console.log(ide)

let texto = document.getElementsByClassName("texto");
console.log(texto)

ide.innerHTML = "<h2>Oi<h2><ol><li>abc<li>def<ol>"

function acaobotao1(){
    alert("encomendou pão")
}

function acaobotao2(){
    alert("encomendou arroz")
}

let tarefas = [];

function enviar(){
    let input = document.getElementById("caixatexto")
    tarefas.push(caixatexto.value)
}
function visualizar(){
    console.log(tarefas)
}
function limpar(){
    tarefas = [];
}