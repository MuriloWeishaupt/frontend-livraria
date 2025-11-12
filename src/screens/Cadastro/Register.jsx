import React, { useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import "./Register.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  async function handleCadastro(e) {
    e.preventDefault();

    if (!email || !password || !name || !type) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const payload = { email, password, name, typeUser: type };

      const { data } = await api.post("/user", payload);

      toast.success("Cadastro realizado com sucesso!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      sessionStorage.setItem("token-jwt", data.token);
    } catch (error) {
      console.error(error);
      toast.error("Erro ao cadastrar. Tente novamente.");
    }
  }

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="register-left">
          <img
            src="https://t4.ftcdn.net/jpg/05/58/06/81/360_F_558068185_sZmfyrWuzHTfzLdwJuj1ALQcBtbKAtbA.jpg"
            alt="Cadastro Ilustração"
          />
        </div>
        <div className="register-right">
          <h2>Cadastro</h2>
          <form onSubmit={handleCadastro}>
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
            <input
              type="text"
              placeholder="Nome do Usuário"
              value={name}
              onChange={(e) => setName(e.target.value.toLowerCase())}
              required
            />
            <select
              className="select"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option value="">Selecione o tipo de usuário</option>
              <option value="admin">Administrador</option>
              <option value="comum">Comum</option>
            </select>
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
