    function verificarSeImagemExiste(imagemDoProjeto, textoImagemInexistente) {
    if (imagemDoProjeto.getAttribute("src")) return true;

    textoImagemInexistente.textContent = "Selecione uma imagem para o projeto.";
    textoImagemInexistente.style.color = "red";
    textoImagemInexistente.style.display = "inline-block";

    return false;
    }

    export default verificarSeImagemExiste;