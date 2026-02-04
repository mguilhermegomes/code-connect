function bloquearEnterInput() {
  const todosInputs = document.querySelectorAll("input");

  todosInputs.forEach((input) => {
    input.addEventListener("keydown", (evento) => {
      if (evento.key === "Enter") {
        evento.preventDefault();
      }
    });
  });
}

export default bloquearEnterInput;