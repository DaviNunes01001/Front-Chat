# Front-Chat

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![CSS](https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=white)
![Python](https://img.shields.io/badge/Python%20Backend-3776AB?logo=python&logoColor=white)

---

## Sobre o projeto

Interface front-end de uma aplicação de chat em tempo real desenvolvida em dupla.

O back-end foi construído em **Python** pelo meu colega, e minha responsabilidade foi criar a **interface visual** que se conecta ao servidor — garantindo uma experiência de uso fluida e organizada.

> ⚠️ Projeto em andamento. A versão atual cobre o fluxo principal de chat. Novas funcionalidades estão planejadas.

---

## Divisão do projeto

| Camada | Responsável | Tecnologia |
|---|---|---|
| Front-end (interface) | Davi Nunes | React + Vite |
| Back-end (servidor e lógica) | Colega | Python |

---

## Tecnologias

- React
- Vite
- JavaScript
- CSS

---

## Estrutura do projeto

```
Front-Chat
│
├── public
├── src
├── index.html
├── vite.config.js
└── package.json
```

---

## Como executar localmente

> O front-end depende do servidor Python rodando localmente. Certifique-se de que o back-end está ativo antes de iniciar o front.

```bash
# Clonar o repositório
git clone https://github.com/DaviNunes01001/Front-Chat.git

# Entrar na pasta
cd Front-Chat

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev
```

Disponível em `http://localhost:5173`

---

## Próximos passos

- [ ] Melhorar UI/UX da interface
- [ ] Adicionar suporte a múltiplas salas de chat
- [ ] Implementar indicador de usuário digitando
- [ ] Histórico de mensagens persistente
- [ ] Autenticação de usuário

---

## O que aprendi

Neste projeto pratiquei integração real entre front-end e back-end desenvolvidos por pessoas diferentes — o que exigiu comunicação sobre contratos de API e formatos de dados. Também exercitei construção de interface com React focando em usabilidade, sem depender de bibliotecas de UI prontas.
