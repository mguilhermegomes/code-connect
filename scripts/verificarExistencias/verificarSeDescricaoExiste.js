function verificarSeDescricaoExiste(textareaDescricao, textoDescricaoVazia) {
  const textoTextareaDescricao = textareaDescricao.value.trim();
  if (textoTextareaDescricao !== "") return true;

  textoDescricaoVazia.textContent = "Insira a descrição do seu projeto.";
  textoDescricaoVazia.style.color = "red";
  textoDescricaoVazia.style.display = "inline-block";

  return false;
}

export default verificarSeDescricaoExiste;