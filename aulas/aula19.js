function LerMais() {
    var trespontos=document.getElementById("trespontos");
    let maisTexto=document.getElementById("mais");
    let botaoLeiaMais=document.getElementById("btn-LeiaMais");

    if(trespontos.style.display == "none") {
        trespontos.style.display = "inline";
        maisTexto.style.display = "none";
        botaoLeiaMais.innerHTML = "Leia Mais";
    }
    else {
        trespontos.style.display = "none";
        maisTexto.style.display = "inline";
        botaoLeiaMais.innerText = "Ler Menos"
    }
}