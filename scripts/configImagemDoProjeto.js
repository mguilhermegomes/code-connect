import lerArquivo from "./lerArquivo.js";

const botaoCarregarImagem = document.getElementById("btn-carregar-imagem");
const inputCarregarImagem = document.getElementById("input-carregar-imagem");
const textoInserirImagem = document.querySelector(
  ".projeto-imagem__container > p",
);
const containerNomeDaImagemDoProjeto = document.querySelector(
  ".projeto-imagem__texto",
);
const nomeDaImagemDoProjeto = document.querySelector(
  ".projeto-imagem__texto > p",
);
const iconRemoverImagem = document.getElementById("icon-remover-imagem");

export function removerImagemDoProjeto(imagem) {
  nomeDaImagemDoProjeto.textContent = "";
  containerNomeDaImagemDoProjeto.style.display = "none";
  imagem.src = "";
  imagem.style.display = "none";
  textoInserirImagem.style.display = "inline-block";
}

export function carregarERemoverImagem(imagem, textoErro) {
  botaoCarregarImagem.addEventListener("click", () => {
    inputCarregarImagem.click();
  });

  inputCarregarImagem.addEventListener("change", async (evento) => {
    const arquivo = evento.target.files[0];
    if (arquivo) {
      try {
        const dadosDoArquivo = await lerArquivo(arquivo);
        textoInserirImagem.style.display = "none";
        imagem.style.display = "block";
        imagem.src = dadosDoArquivo.url;
        nomeDaImagemDoProjeto.textContent = dadosDoArquivo.nome;
        containerNomeDaImagemDoProjeto.style.display = "flex";
        textoErro.textContent = "";
        textoErro.style.color = null;
        textoErro.style.display = "none";
      } catch (erro) {
        console.log("Ocorreu um erro ao tentar ler o arquivo: " + erro);
      }
    }
  });

  iconRemoverImagem.addEventListener("click", (evento) => {
    evento.preventDefault();
    removerImagemDoProjeto(imagem, textoErro);
  });
}
