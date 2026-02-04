import { removerImagemDoProjeto } from "./configImagemDoProjeto.js";

const formInfo = document.getElementById("form-info");
const botaoDescartarProjeto = document.getElementById("btn-descartar");

export function descartarProjeto(
  imagemDoProjeto,
  listaDeTags,
  listaTagsAdicionadas,
  textoNomeDisponibilidade,
  textoDescricaoVazia,
) {
  formInfo.reset();
  removerImagemDoProjeto(imagemDoProjeto);
  listaDeTags.replaceChildren();
  listaTagsAdicionadas.length = 0;
  textoNomeDisponibilidade.style.display = "none";
  textoNomeDisponibilidade.textContent = "";
  textoNomeDisponibilidade.style.color = null;
  textoDescricaoVazia.style.display = "none";
  textoDescricaoVazia.textContent = "";
  textoDescricaoVazia.style.color = null;
}

export function descartarProjetoEvento(
  imagemDoProjeto,
  listaDeTags,
  listaTagsAdicionadas,
  textoNomeDisponibilidade,
  textoDescricaoVazia,
) {
  botaoDescartarProjeto.addEventListener("click", (evento) => {
    evento.preventDefault();
    descartarProjeto(
      imagemDoProjeto,
      listaDeTags,
      listaTagsAdicionadas,
      textoNomeDisponibilidade,
      textoDescricaoVazia,
    );
  });
}
