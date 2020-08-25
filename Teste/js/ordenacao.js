function ordenacaoPorPrecoCrescente() {
    return JSON.parse(produtos)
        .sort((a, b) => +a.preco.split(' ')[1] - +b.preco.split(' ')[1])
}

function ordenacaoPorPrecoDecrescente() {
    return JSON.parse(produtos)
        .sort((b, a) => +a.preco.split(' ')[1] - +b.preco.split(' ')[1])
}

function ordernaPreco() {
    return document.getElementById("ordemPreco").value === "crescente" ? ordenacaoPorPrecoCrescente() : ordenacaoPorPrecoDecrescente();
}

document.getElementById("ordemPreco").addEventListener("change", function () {
    renderizaProdutos();
})