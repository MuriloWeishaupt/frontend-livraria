import React, { useState } from "react";
import "./Login.css";
import api from "../../services/api.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const payload = { email, password };
      const { data } = await api.post("/login", payload);
      const decoded = jwtDecode(data.token);

      sessionStorage.setItem("token-jwt", data.token);
      sessionStorage.setItem("user", JSON.stringify(decoded));

      toast.success("Login efetuado com sucesso!");

      setTimeout(() => navigate("/home"), 1000);
    } catch (error) {
      toast.error("Erro nas credenciais, insira novamente");
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-left">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/pagina-de-login-illustration-svg-png-download-3783954.png"
            alt="Login Illustration"
          />
        </div>
        <div className="login-right">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Insira seu Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Insira sua Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Entrar</button>
          </form>
          <p className="criar-conta">
            Não possui uma conta? <a href="/Register">Cadastre-se</a>
          </p>
        </div>
      </div>
    </div>
  );
}
