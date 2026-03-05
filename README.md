## 💬 LAN Chat - Alternativa ao Discord (Rede Local)

Uma aplicação de chat em tempo real para rede local (LAN), construída com:

- ⚛ React (Frontend)

- 🐍 FastAPI + WebSockets (Backend)

- 🌐 Comunicação em rede local

## 🚀 Funcionalidades

- Mensagens em tempo real (WebSocket)

- Conexão via IP do servidor

- Indicador de servidor Online / Offline

- Histórico de mensagens (em memória)

- Funciona entre dispositivos na mesma rede

- Interface personalizada com CSS

- Simples e leve

## 🔧 Configuração do Backend (Servidor Python)

1. Instalar dependências
```bash
pip install fastapi "uvicorn[standard]" websockets
```

2. Rodar o servidor
```bash
python server.py
```

O servidor irá rodar em: `http://0.0.0.0:8000`


## 💻 Configuração do Frontend (React)

Dentro da pasta do frontend:
```bash
npm install
npm run dev
```

A aplicação abrirá em: `http://localhost:3000`

## 🌐 Como Usar Entre Computadores

1. Inicie o servidor Python em um computador.

2. Descubra o IP local da máquina, abra o terminal:

- Linux:
```bash
ip a | grep inet
```

- Windows:
```bash
ipconfig
```

Exemplo de IP: `192.168.1.23`

3. Nos outros dispositivos da mesma rede, abra o app React.
4. Digite o IP do servidor.
5. Conecte e comece a conversar.

> ⚠ Todos os dispositivos devem estar na mesma rede Wi-Fi ou LAN.

## 🧠 Como Funciona

- React conecta ao servidor usando WebSocket.

- servidor transmite (broadcast) as mensagens para todos os clientes conectados.

- histórico de mensagens é armazenado em memória.

- Quando um novo usuário entra, ele recebe todo o histórico atual.
