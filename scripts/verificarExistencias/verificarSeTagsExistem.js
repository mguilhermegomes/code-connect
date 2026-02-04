function verificarSeExisteTags(textoTagInvalida, listaTagsAdicionadas) {
  const listaDeTagsVazia = listaTagsAdicionadas.length;
  if (!listaDeTagsVazia) {
    textoTagInvalida.textContent = "Insira pelo menos uma tag.";
    textoTagInvalida.style.color = "red";
    textoTagInvalida.style.display = "inline-block";

    return false;
  }

  return true;
}

export default verificarSeExisteTags;