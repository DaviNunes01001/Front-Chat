import { useState } from "react";
import { Navigate } from "react-router-dom";
import "./Chat.css";

function Chat() {
  const username = localStorage.getItem("username");

  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  if (!username) {
    return <Navigate to="/" />;
  }

  const handleSend = () => {
    if (!text.trim()) return;

    const newMessage = {
      id: Date.now(),
      user: username,
      content: text,
    };

    setMessages([...messages, newMessage]);
    setText("");
  };

  return (
    <div className="chat">
      <h2>Chat - {username}</h2>

      <div className="messages">
        {messages.map((msg) => (
          <div key={msg.id} className="message">
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
        />
        <button onClick={handleSend}>Enviar</button>
      </div>
    </div>
  );
}

export default Chat;