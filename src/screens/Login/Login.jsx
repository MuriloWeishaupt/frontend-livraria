import React, { useState } from "react";
import './Login.css'


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e) {
        e.preventDefault()
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
                        <button>Acessar</button>
                        <p className="criar-conta">Não possui uma conta? <a>cadastre-se</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}