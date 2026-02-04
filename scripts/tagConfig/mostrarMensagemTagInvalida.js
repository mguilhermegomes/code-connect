function mostrarMensagemTagInvalida(tagValor, listaTagsAdicionadas, textoErro) {
  textoErro.textContent = listaTagsAdicionadas.includes(tagValor)
    ? `A tag ${tagValor} já existe.`
    : `A tag ${tagValor} não é uma tag válida.`;
  textoErro.style.color = "red";
  textoErro.style.display = "inline-block";

  setTimeout(() => {
    textoErro.style.display = "none";
  }, 4000);
}

export default mostrarMensagemTagInvalida;