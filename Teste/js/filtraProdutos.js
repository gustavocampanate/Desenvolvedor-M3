function filtraProdutos(parametro) {

    const textoFiltro = document.getElementById("filtro").value;

    return textoFiltro != "" ? parametro.toUpperCase().includes(textoFiltro.toUpperCase()) : true;

}

function filtraNomeProduto(nome) {

}

function filtraCor(cor) {
    return document.getElementById(cor).checked;
}

function filtraPreco(preco) {

}

document.querySelectorAll(".filtroCor").forEach(elementoFiltroCor => {
    elementoFiltroCor.addEventListener("change", function () {
        renderizaProdutos();
    })
})