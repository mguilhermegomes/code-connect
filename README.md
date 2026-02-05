![Code Connect](/img/Logo.svg)

---

# Code Connect | Gerenciador de Publicação de Projetos
Uma aplicação Front-end desenvolvida em JavaScript Vanilla focada na experiência de upload e cadastro de projetos de programação. O sistema gerencia formulários, validações assíncronas, manipulação de imagens e um sistema de tags interativo.

---

## 📖 Visão Geral
Este projeto simula uma interface de "Dashboard" onde um desenvolvedor pode submeter seus projetos para um portfólio ou rede social. O foco principal do código é a **manipulação do DOM**, o uso de **Módulos ES6** para organização do código e o tratamento de **Promises** para simular interações com um backend (API).

---

## ✨ Funcionalidades

- **Upload de imagem com Preview**
    - Carregamento de imagem local via `FileReader`.
    - Visualização imediata e opção de remover a imagem.
- **Validação de Nome do Projeto:**
    - Verificação assíncrona de disponibilidade do nome.
    - Lista de nomes indisponíveis (mockada).
    - Feedback visual de erro ou sucesso.
- **Sistema de Tags Inteligente:**
    - Adição de tags via tecla `Enter`.
    - Validação contra uma lista permitida (ex: React, Java, Python).
    - Prevenção de duplicatas.
    - Remoção de tags clicando no ícone.
- **Validação de campos:**
    - Verificação de descrição vazia.
    - Bloqueio de submissão com campos inválidos.
- **Simulação de Publicação:**
    - Botão "Publicar" com simulação de delay de rede.
    - Chance aleatória (50/50) de sucesso ou falha na publicação para testar tratamento de erros.
    - Botão "Descartar" que limpa todo o formulário.

---

## 🛠 Tecnologias Utilizadas

- **HTML5** (Estrutura semântica)
- **CSS3**  (Estilização)
- **JavaScript(ES6+):**
    - `import` / `export`
    - `async` / `await`
    - `Promisses`
    - `FileReader API`

---

## 🧠 Conceitos Aplicados e Boas Práticas

- **Modularização (ES Modules)**
    - Separação de Preocupações
    - Reusabilidade
- **Programação Assíncrona**
    - Promises
    - `async` / `await`
    - Tratamento de erros com uso de `try...catch`
- **Manipulação Eficiente do DOM (Event Delegation)**
    - Para a funcionalidade de remover tags, foi aplicada a técnica de Delegação de Eventos (ver `removerTag.js`).
- **Experiência do Usuário (UX) Defensiva**
    - Feedback visual
    - Prevenção de erros
    - Bloqueio de padrões
- **Short-Circuit Evaluation**
    - Na função de publicação (`publicarProjeto.js`), a validação final utiliza operadores lógicos `&&` em cadeia.


---

## 📂 Estrutura do Projeto
O código foi refatorado para seguir o princípio de responsabilidade única, separando a lógica em pastas específicas:
```text

/
├── script.js                  # Arquivo principal
├── bloquearEnterInput.js      # Utilitário para UX de formulários
├── configImagemDoProjeto.js   # Lógica de upload e preview
├── lerArquivo.js              # Encapsulamento do FileReader
├── descartarProjeto.js        # Lógica de reset do formulário
├── publicarProjeto.js         # Orquestrador da submissão final
│
├── nomeConfig/                # Módulo: Configuração do Nome
│   ├── verificarNomeValido.js
│   ├── validarNome.js
│   └── mostrarDisponibilidadeDoNome.js
│
├── tagConfig/                 # Módulo: Configuração de Tags
│   ├── adicionarTag.js
│   ├── removerTag.js
│   ├── validarTag.js
│   └── mostrarMensagemTagInvalida.js
│
└── verificarExistencias/      # Módulo: Validações Gerais
    ├── verificarSeDescricaoExiste.js
    ├── verificarSeImagemExiste.js
    └── verificarSeTagsExistem.js
```
---

## 🌐 Acesso ao Projeto
Você pode visualizar e testar o projeto facilmente pelo link:

- **👉 Deploy no GitHub Pages:**
[Acesse o projeto](https://mguilhermegomes.github.io/code-connect/)

---

## 🚀 Como Executar
Como este projeto utiliza ES Modules (import/export), ele precisa ser servido através de um servidor HTTP local para evitar erros de política de mesma origem (CORS).

### 1. Clone o repositório:
```bash
git clone https://seu-repositorio.com/projeto.git
```

### 2. Abra a pasta do projeto.

### 3. Abra o arquivo `index.html` no navegador ou use o VSCode com a extensão "Live Server".

> Não é necessário dependências ou frameworks.

---

## 🔍 Detalhes da Implementação

### Simulação de API
O projeto não possui um backend real, mas simula o 
comportamento através de `setTimeout` e `Promises`.

- **Validação de nome:** Demora um segundo para verificar se o nome está na lista `listaNomesIndisponíveis`.
- **Validação de tag:** Demora 1 segundo para conferir se a tag existe na whitelist.
- **Publicação:** Demora 2 segundos e usa `Math.random()` para simular sucesso ou falha no servidor.

---

## 📚 Objetivo educacional
Este projeto foi desenvolvido com foco em **aprendizado** e **prática**, servindo como base sólida para evoluir para aplicações mais complexas e frameworks no futuro.

---

## 👨‍💻 Autor
Desenvolvido por **Guilherme Gomes**.

- **Github:** [Acesse meu perfil do Github](https://github.com/mguilhermegomes)
- **LinkedIn:** [Acesse meu perfil do LinkedIn](https://linkedin.com/in/mguilherme-gomes)
