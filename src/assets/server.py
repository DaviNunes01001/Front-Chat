# server.py
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI()

origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

connected_clients = []
message_history = []


async def broadcast(message: dict):
    for client in connected_clients:
        await client.send_json(message)


@app.websocket("/ws/chat")
async def chat_endpoint(websocket: WebSocket):
    await websocket.accept()
    connected_clients.append(websocket)

    # Send history to new client
    await websocket.send_json({
        "type": "history",
        "messages": message_history
    })

    try:
        while True:
            data = await websocket.receive_json()

            chat_message = {
                "type": "chat",
                "user": "user",
                "content": data.get("content")
            }

            message_history.append(chat_message)
            await broadcast(chat_message)

    except WebSocketDisconnect:
        connected_clients.remove(websocket)


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
