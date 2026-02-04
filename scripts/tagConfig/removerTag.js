function removerTag(listaDeTags, listaTagsAdicionadas) {
  listaDeTags.addEventListener("click", (evento) => {
    evento.preventDefault();
    if (evento.target.id === "icon-remover-tag") {
      const tagParaRemover = evento.target.parentElement;
      const nomeTagParaRemover =
        evento.target.previousElementSibling.textContent;
      listaDeTags.removeChild(tagParaRemover);

      const indexTagParaRemover =
        listaTagsAdicionadas.indexOf(nomeTagParaRemover);
      if (indexTagParaRemover !== -1) {
        listaTagsAdicionadas.splice(indexTagParaRemover, 1);
      }
    }
  });
}

export default removerTag;