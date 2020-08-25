renderizaProdutos();

function renderizaProdutos() {
    let numeroColuna = 0;

    limpaColunas();

    ordernaPreco().forEach(produto => {

        if (!filtraCor(produto.cor)) return;

        let htmlDosProdutos =
            `   <div class="card">
                    <img src="` + produto.imgSrc + `" alt="Avatar" style="width:100%">
                    <div class="container">
                        <h4>` + produto.nomeProduto + `</h4>
                        <span class="valor"><b>` + produto.preco + `</b></span>
                        <small><br>` + produto.parcelas + `</br></small>
                        <button class="adicionar">COMPRAR</button>
                    </div>
                </div>`

        document.getElementById("coluna" + (+(numeroColuna % 3) + 1)).innerHTML += htmlDosProdutos;

        numeroColuna++;

    });
}

function limpaColunas() {
    for (let index = 1; index < 4; index++) {
        document.getElementById("coluna" + index).innerHTML = "";
    }
}