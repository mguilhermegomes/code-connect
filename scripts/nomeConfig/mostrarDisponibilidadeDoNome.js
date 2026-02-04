function mostrarDisponibilidadeDoNome(nomeDoProjeto, nomeValido, textoNomeDisponibilidade) {
  if (nomeValido) {
    textoNomeDisponibilidade.textContent = `O nome ${nomeDoProjeto} está disponível.`;
    textoNomeDisponibilidade.style.color = "chartreuse";
  } else {
    textoNomeDisponibilidade.textContent = `O nome ${nomeDoProjeto} não está disponível.`;
    textoNomeDisponibilidade.style.color = "red";
  }
  textoNomeDisponibilidade.style.display = "inline-block";
}

export default mostrarDisponibilidadeDoNome;