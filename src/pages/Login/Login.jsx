import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username.trim()) return;

    localStorage.setItem("username", username);
    navigate("/chat");
  };

  return (
    <div className="Login">
      <div className="Container">
        <img
          src="https://media.newyorker.com/photos/5ba177da9eb2f7420aadeb98/master/pass/Cohen-Linus-Torvalds.jpg"
          alt="Profile"
        />

        <input
          type="text"
          placeholder="Digite seu UserName"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button onClick={handleLogin}>Entrar</button>
      </div>
    </div>
  );
}

export default Login;
