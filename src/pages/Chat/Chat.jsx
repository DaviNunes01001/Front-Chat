import { useState, useEffect, useRef } from "react";
import { Navigate } from "react-router-dom";
import "./Chat.css";

function Chat() {
  const serverIP = localStorage.getItem("serverIP");

  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const ws = useRef(null);

  if (!serverIP) return <Navigate to="/" />;

  useEffect(() => {
    ws.current = new WebSocket(`ws://${serverIP}:8000/ws/chat`);

    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === "history") {
        setMessages(data.messages);
      } else {
        setMessages((prev) => [...prev, data]);
      }
    };

    return () => ws.current.close();
  }, [serverIP]);

  const handleSend = () => {
    if (!text.trim()) return;

    ws.current.send(JSON.stringify({
      content: text
    }));

    setText("");
  };

  return (
    <div className="chat">
      <h2>Chat</h2>

      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <strong>{msg.user}:</strong> {msg.content}
          </div>
        ))}
      </div>

      <div className="input-area">
        <input
          type="text"
          placeholder="Digite sua mensagem..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Enviar</button>
      </div>
    </div>
  );
}

export default Chat;
