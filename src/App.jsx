import './App.css'
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Chat from "./pages/Chat/Chat.jsx";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
    
    </>
  );
}

export default App