import React, { useState } from "react";
import './Login.css'
import api from '../../services/api.js'
import { toast } from 'react-toastify';


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [type, setType] = useState("");

    async function handleLogin (e) {
        e.preventDefault()

        try {
            const payload = {email, password, name, type};

            const { data } = await api.post('/login', payload);
            toast.success("Login realizado com sucesso!", {
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
            console.log(error)
        }
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-left">
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/pagina-de-login-illustration-svg-png-download-3783954.png" alt="imagem de login kk" />
                </div>
                <div className="login-right">
                    <h2>LOGIN</h2>
                    <form onSubmit={handleLogin}
                    
                    >
                        <input 
                            type="text" 
                            placeholder ="Insira seu Email: "
                            value={email}
                            onChange={(e) => {setEmail(e.target.value)}}
                            />
                        <input 
                            type="password" 
                            placeholder ="Insira sua Senha: "
                            value={password}
                            onChange={(e) => {setPassword(e.target.value)}}
                            />
                        <input 
                            type="text" 
                            placeholder ="Nome do usuário: "
                            value={name}
                            onChange={(e) => {setName(e.target.value)}}
                            />

                        <select className="select" onChange={(e) => {setType(e.target.value)}}>
                        <option className="select" value="Admin">Administrador</option>
                        <option className="select" value="Comum">Comum</option>
                        </select>
                        <button>Acessar</button>
                        <p className="criar-conta">Não possui uma conta? <a>cadastre-se</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}