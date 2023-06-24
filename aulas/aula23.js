function diminuir() {
    let numero = document.getElementById("numero")
    if (numero.innerText > 0) {
        numero.innerText --
    }
}

function aumentar() {
    let numero =document.getElementById("numero")
    if (numero.innerText < 5) {
        numero.innerText ++
    }
}