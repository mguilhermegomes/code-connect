const tagsDisponiveis = [
  "Front-end",
  "Back-end",
  "Banco de dados",
  "UI & UX",
  "IA",
  "Full-stack",
  "JavaScript",
  "TypeScript",
  "Java",
  "React",
  "Node.js",
  "Python",
  "Swift",
  "Kotlin",
  ".Net",
  "HTML5",
  "CSS3",
];

async function validarTag(tagValor) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tagsDisponiveis.includes(tagValor));
    }, 1000);
  });
}

export default validarTag;