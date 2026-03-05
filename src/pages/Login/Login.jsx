import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [serverIP, setServerIP] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!serverIP.trim()) return alert("Enter server IP!");
    localStorage.setItem("serverIP", serverIP.trim());
    navigate("/chat");
  };

  return (
    <div className="Login">
      <div className="Container">
        <img src="https://media.newyorker.com/photos/5ba177da9eb2f7420aadeb98/master/pass/Cohen-Linus-Torvalds.jpg" alt="deus" />
        <input
          type="text"
          placeholder="Enter server IP"
          value={serverIP}
          onChange={(e) => setServerIP(e.target.value)}
        />

        <button onClick={handleLogin}>
          Connect
        </button>

      </div>
    </div>
  );
}

export default Login;
