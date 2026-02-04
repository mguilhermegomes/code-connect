import validarNome from "./validarNome.js";
import mostrarDisponibilidadeDoNome from "./mostrarDisponibilidadeDoNome.js";

export async function verificarNomeValido(
  inputNomeDoProjeto,
  textoNomeDisponibilidade,
  listaNomesIndisponiveis
) {
  const nomeDoProjeto = inputNomeDoProjeto.value.trim();
  if (nomeDoProjeto !== "") {
    try {
      const nomeValido = await validarNome(nomeDoProjeto, listaNomesIndisponiveis);
      mostrarDisponibilidadeDoNome(nomeDoProjeto, nomeValido, textoNomeDisponibilidade);

      if (!nomeValido) return false;

      return true;
    } catch (erro) {
      console.log(
        "Erro ao tentar verificar se o nome está disponível: " + erro,
      );
      alert(
        "Ocorreu um erro ao verificar se o nome está disponível. Verifique o console para mais informações.",
      );

      return false;
    }
  } else {
    textoNomeDisponibilidade.textContent = "Insira o nome do projeto.";
    textoNomeDisponibilidade.style.color = "red";
    textoNomeDisponibilidade.style.display = "inline-block";

    return false;
  }
}

export function verificarNomeValidoEvento(inputNomeDoProjeto, textoNomeDisponibilidade, listaNomesIndisponiveis) {
  ["blur", "keydown"].forEach((evento) => {
    inputNomeDoProjeto.addEventListener(evento, async (e) => {
      if (evento === "keydown") {
        if (e.key === "Enter") {
          e.preventDefault();
          await verificarNomeValido(inputNomeDoProjeto, textoNomeDisponibilidade, listaNomesIndisponiveis);
          return;
        } else {
          return;
        }
      }

      await verificarNomeValido(inputNomeDoProjeto, textoNomeDisponibilidade, listaNomesIndisponiveis);
    });
  });
}
