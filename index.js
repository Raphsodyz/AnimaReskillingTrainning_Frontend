// function carregamentoPagina() {
//   alert("Abriu!");
// }

function populaTabela(){
    if(localStorage.getItem("produtos")){
        let produtos = JSON.parse(localStorage.getItem("produtos"));

        $("#tblProdutos tbody").html("");

        produtos.forEach((produtos) => {
            $("#tblProdutos tbody").append(`<tr>
                <td>${produtos.nome}</td>
                <td>${produtos.quantidade}</td>
                <td>${produtos.valor}</td>
                <td style="width: 50px"><button type="button" class="btn btn-info">E</button></td>
                <td style="width: 50px"><button type="button" class="btn btn-danger">D</button></td>
            </tr>`)
        });
}
}

$(() => {
    //Código executado no carregamento da página
    populaTabela();

    $("#btnSalvar").click(() => {
        //console.log("Função click funcionou");
        // localStorage.setItem("key", "efetivo valor armazenado");

        let produto = {}
        produto.nome = $("#nmProduto").val();
        produto.quantidade = $("#quantidade").val();
        produto.valor = $("#vlrProduto").val();

        let listaProdutos = [];

        if(localStorage.getItem("produtos")){
            listaProdutos = JSON.parse(localStorage.getItem("produtos"))
        }

        listaProdutos.push(produto);

        localStorage.setItem("produtos", JSON.stringify(listaProdutos));

        alert("Dados salvos com sucesso!");

        $("#nmProduto").val("");
        $("#quantidade").val("");
        $("#vlrProduto").val("");

        populaTabela();
    })
})