import React, { useState, useEffect } from "react";
import "./EditaPerfil.css";
import NavBar from "../../components/Navbar";
import api from "../../services/api";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

export default function EditaPerfil() {
  const [imagePreview, setImagePreview] = useState(null);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);

  useEffect(() => {
    async function getUserProfile() {
      const token = sessionStorage.getItem("token-jwt");
      const { data } = await api.get("/user/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setEmail(data.user?.email || "");
      setUsername(data.user?.name || "");
      setRole(data.user?.typeUser || "");
      setProfilePhoto(data.profilePhoto?.url_photo_profile || null);
    }

    getUserProfile();
  }, []);

  function handlePhoto(e) {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      saveImage(file);
    }
  }

  async function saveImage(selectedImage) {
    try {
      const tokenJWT = sessionStorage.getItem("token-jwt");
      if (!tokenJWT) {
        alert("Token JWT não encontrado. Faça Login novamente.");
        return;
      }

      const formData = new FormData();
      formData.append("uploads", selectedImage);

      await api.post("/user/upload", formData, {
        headers: {
          Authorization: `Bearer ${tokenJWT}`,
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Imagem enviada com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar imagem", error);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const token = sessionStorage.getItem("token-jwt");

    if (!token) {
      alert("Token JWT não encontrado. Faça Login novamente.");
      return;
    }

    const decoded = jwtDecode(token);
    const userId = decoded.UserId;

    const payload = {
      id: Number(userId),
      name: username,
      email,
      password,
      typeUser: role,
    };

    try {
      await api.put("/user", payload, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Perfil atualizado com sucesso!");
    } catch (error) {
      toast.error("Erro ao atualizar perfil. Tente novamente.");
    }
  }

  return (
    <>
      <NavBar />
      <div className="profile-container">
        <div className="profile-card">
          <h2>Editar Perfil</h2>

          <div className="profile-image">
            <img src={imagePreview || profilePhoto} alt="Foto de perfil" />
            <label htmlFor="foto-upload" className="btn-upload">
              Alterar foto
            </label>
            <input
              id="foto-upload"
              type="file"
              accept="image/*"
              onChange={handlePhoto}
              style={{ display: "none" }}
            />
          </div>

          <form onSubmit={handleSubmit} className="profile-form">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Nome</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite uma nova senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label>Tipo de Usuário</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="admin">Administrador</option>
              <option value="comum">Comum</option>
            </select>

            <button type="submit" className="btn-salvar">
              Salvar Alterações
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
