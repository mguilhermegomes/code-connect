import validarTag from "./validarTag.js";
import mostrarMensagemTagInvalida from "./mostrarMensagemTagInvalida.js";

function adicionarTag(inputTags, listaDeTags, listaTagsAdicionadas, textoErro) {
  inputTags.addEventListener("keydown", async (evento) => {
    if (evento.key === "Enter") {
      evento.preventDefault();

      inputTags.disabled = true;

      const inputTagsValor = inputTags.value.trim();
      const tagExiste = listaTagsAdicionadas.includes(inputTagsValor);

      if (inputTagsValor !== "" && !tagExiste) {
        try {
          const tagDisponivel = await validarTag(inputTagsValor);

          if (tagDisponivel) {
            const tagItem = document.createElement("li");
            tagItem.classList.add("tags__item");
            tagItem.title = inputTagsValor;
            tagItem.innerHTML = `<p>${inputTagsValor}</p><img id="icon-remover-tag" src="img/close-black.svg" alt="ícone de remoção" style="cursor: pointer;">`;
            listaDeTags.appendChild(tagItem);
            inputTags.value = "";
            listaTagsAdicionadas.push(inputTagsValor);
          } else {
            mostrarMensagemTagInvalida(inputTagsValor, listaTagsAdicionadas, textoErro);
          }
        } catch (erro) {
          console.log("Erro ao tentar validar a tag. Erro: " + erro);
          alert("Erro ao tentar validar a tag. Verifique o console");
        }
      } else {
        if (inputTagsValor !== "") mostrarMensagemTagInvalida(inputTagsValor, listaTagsAdicionadas, textoErro);
      }

      inputTags.disabled = false;
    }
  });
}

export default adicionarTag;