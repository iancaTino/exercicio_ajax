# 💫 **Exercício AJAX — Consumo de API do GitHub**

> 📚 Um projeto simples, mas poderoso: usando **AJAX com Fetch e async/await** para buscar dados direto da API do GitHub. 💻

---

## 🌸 Visão Geral

Este projeto foi desenvolvido para praticar **requisições assíncronas** e manipulação do **DOM** em JavaScript. Ele consome a API pública do GitHub e exibe informações de um usuário (foto, nome, bio e link pro perfil). ✨

Além de treinar lógica, você aprende boas práticas modernas com `async/await`, tratamento de erros e uma pitada de estilização.

---

## 🧠 Objetivo

O foco é **entender o fluxo da requisição AJAX**:

1. Fazer o fetch → 🛰️
2. Tratar o retorno (promises, erros) → 🧩
3. Renderizar dinamicamente na tela → 🎨

---

## 💻 Tecnologias Utilizadas

| Linguagem / Ferramenta | Função                     |
| ---------------------- | -------------------------- |
| 🧾 HTML5               | Estrutura do conteúdo      |
| 🎀 CSS3                | Estilo e identidade visual |
| ⚡ JavaScript (ES6+)    | Requisições e lógica       |
| 🌐 Fetch API           | Comunicação com a API      |

---

## 📂 Estrutura do Projeto

```
📁 exercicio_ajax
 ┣ 📄 index.html
 ┣ 📁 css
 ┃ ┗ 🎨 style.css
 ┣ 📁 js
 ┃ ┗ ⚙️ main.js
 ┗ 📜 README.md
```

---

## 🚀 Como Executar

1️⃣ Clone o repositório:

```bash
git clone https://github.com/iancaTino/exercicio_ajax.git
cd exercicio_ajax
```

2️⃣ Abra o arquivo `index.html` no navegador (pode usar o Live Server, se preferir).

3️⃣ A mágica acontece! ✨ A página irá buscar os dados direto da API do GitHub e exibir automaticamente.

---

## 🔍 Exemplo de Código (main.js)

```js
async function carregarPerfil(username = 'iancaTino') {
  try {
    const resposta = await fetch(`https://api.github.com/users/${username}`);
    if (!resposta.ok) throw new Error('Erro ao buscar dados do GitHub');

    const dados = await resposta.json();
    docu
```
