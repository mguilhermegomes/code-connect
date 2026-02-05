import bloquearEnterInput from "./bloquearEnterInput.js";
import { carregarERemoverImagem } from "./configImagemDoProjeto.js";
import adicionarTag from "./tagConfig/adicionarTag.js";
import removerTag from "./tagConfig/removerTag.js";
import { verificarNomeValidoEvento } from "./nomeConfig/verificarNomeValido.js";
import verificarSeDescricaoExiste from "./verificarExistencias/verificarSeDescricaoExiste.js";
import { descartarProjetoEvento } from "./descartarProjeto.js";
import { publicarProjetoEvento } from "./publicarProjeto.js";

const imagemDoProjeto = document.querySelector(
  ".projeto-imagem__container > img",
);

const textoImagemInexistente = document.getElementById("imagem-inexistente");
const inputTags = document.getElementById("form-info-campo-tags");
const listaDeTags = document.getElementById("form-info-tags-lista");

const textoTagInvalida = document.getElementById("tag-erro");
const listaTagsAdicionadas = [];
const inputNomeDoProjeto = document.getElementById("form-info-campo-nome");
const textoNomeDisponibilidade = document.getElementById(
  "disponibilidade-do-nome",
);
const listaNomesIndisponiveis = [
  "Carrinho de compras",
  "Lista de produtos",
  "Jogo da cobrinha",
  "Sandbox",
];
const textareaDescricao = document.getElementById("form-info-campo-descricao");
const textoDescricaoVazia = document.getElementById("descricao-vazia");

inputNomeDoProjeto.addEventListener("input", () => {
  textoNomeDisponibilidade.textContent = "";
  textoNomeDisponibilidade.style.color = null;
  textoNomeDisponibilidade.style.display = "none";
});

textareaDescricao.addEventListener("blur", () => {
  verificarSeDescricaoExiste(textareaDescricao, textoDescricaoVazia);
});

textareaDescricao.addEventListener("input", () => {
  textoDescricaoVazia.textContent = "";
  textoDescricaoVazia.style.color = null;
  textoDescricaoVazia.style.display = "none";
});

inputTags.addEventListener("input", () => {
  textoTagInvalida.textContent = "";
  textoTagInvalida.style.color = null;
  textoTagInvalida.style.display = "none";
});

bloquearEnterInput();
carregarERemoverImagem(imagemDoProjeto, textoImagemInexistente);
adicionarTag(inputTags, listaDeTags, listaTagsAdicionadas, textoTagInvalida);
removerTag(listaDeTags, listaTagsAdicionadas);
verificarNomeValidoEvento(
  inputNomeDoProjeto,
  textoNomeDisponibilidade,
  listaNomesIndisponiveis,
);
descartarProjetoEvento(
  imagemDoProjeto,
  listaDeTags,
  listaTagsAdicionadas,
  textoNomeDisponibilidade,
  textoDescricaoVazia,
);
publicarProjetoEvento(
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
);
