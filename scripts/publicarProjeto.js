import { verificarNomeValido } from "./nomeConfig/verificarNomeValido.js";
import verificarSeImagemExiste from "./verificarExistencias/verificarSeImagemExiste.js";
import verificarSeDescricaoExiste from "./verificarExistencias/verificarSeDescricaoExiste.js";
import verificarSeExisteTags from "./verificarExistencias/verificarSeTagsExistem.js";
import { descartarProjeto } from "./descartarProjeto.js";

const botaoPublicarProjeto = document.getElementById("btn-publicar");

async function publicarProjeto(
  imagemDoProjeto,
  nomeDoProjeto,
  descricaoDoProjeto,
  tagsDoProjeto,
) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Projeto publicado com sucesso!");
      } else {
        reject("Falha na publicação do projeto.");
      }
    }, 2000);
  });
}

export function publicarProjetoEvento(
  imagemDoProjeto,
  textoImagemInexistente,
  inputNomeDoProjeto,
  textoNomeDisponibilidade,
  listaNomesIndisponiveis,
  textareaDescricao,
  textoDescricaoVazia,
  listaDeTags,
  listaTagsAdicionadas,
  textoTagInvalida,
) {
  botaoPublicarProjeto.addEventListener("click", async (evento) => {
    evento.preventDefault();
    const projetoValido =
      verificarSeImagemExiste(imagemDoProjeto, textoImagemInexistente) &&
      (await verificarNomeValido(
        inputNomeDoProjeto,
        textoNomeDisponibilidade,
        listaNomesIndisponiveis,
      )) &&
      verificarSeDescricaoExiste(textareaDescricao, textoDescricaoVazia) &&
      verificarSeExisteTags(textoTagInvalida, listaTagsAdicionadas);

    if (!projetoValido) {
      return;
    }

    try {
      const projetoPublicado = await publicarProjeto(
        imagemDoProjeto.src,
        inputNomeDoProjeto.value.trim(),
        textareaDescricao.value.trim(),
        listaTagsAdicionadas,
      );
      listaNomesIndisponiveis.push(inputNomeDoProjeto.value.trim());
      alert(projetoPublicado);
      console.log("O projeto foi publicado com êxito!");
      descartarProjeto(
        imagemDoProjeto,
        listaDeTags,
        listaTagsAdicionadas,
        textoNomeDisponibilidade,
        textoDescricaoVazia,
      );
    } catch (erro) {
      alert(
        "Erro ao tentar publicar o projeto. Verifique o console para mais informações.",
      );
      console.log("Erro de publicação de projeto: " + erro);
    }
  });
}
