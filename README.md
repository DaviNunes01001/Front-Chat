# LAN Chat — Alternativa ao Discord (Rede Local)

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?logo=fastapi&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)
![WebSocket](https://img.shields.io/badge/WebSocket-010101?logo=socketdotio&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=white)

---

## Sobre o projeto

Aplicação de chat em tempo real para rede local (LAN), construída com **React** no front-end e **FastAPI + WebSockets** no back-end.

---

## Funcionalidades

- Mensagens em tempo real via WebSocket
- Conexão via IP do servidor
- Indicador de servidor Online / Offline
- Histórico de mensagens em memória
- Funciona entre dispositivos na mesma rede
- Interface personalizada com CSS

---

## Como funciona

```
React (cliente)
     │
     │  WebSocket
     ▼
FastAPI (servidor)
     │
     ├── broadcast para todos os clientes conectados
     └── envia histórico completo ao novo usuário
```

O histórico de mensagens é armazenado em memória — ao reiniciar o servidor, o histórico é perdido.

---

## Configuração

### Back-end (Python)

```bash
# Instalar dependências
pip install fastapi "uvicorn[standard]" websockets

# Rodar o servidor
python server.py
```

Servidor disponível em `http://0.0.0.0:8000`

### Front-end (React)

```bash
npm install
npm run dev
```

Aplicação disponível em `http://localhost:3000`

---

## Uso em rede local

1. Inicie o servidor Python em um computador
2. Descubra o IP local da máquina:

```bash
# Linux
ip a | grep inet

# Windows
ipconfig
```

Exemplo: `192.168.1.23`

3. Nos outros dispositivos da mesma rede, abra o app React
4. Digite o IP do servidor e conecte

> ⚠️ Todos os dispositivos devem estar na mesma rede Wi-Fi ou LAN.
