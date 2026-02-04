async function validarNome(nomeDoProjeto, listaNomesIndisponiveis) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(!listaNomesIndisponiveis.includes(nomeDoProjeto));
    }, 1000);
  });
}

export default validarNome;