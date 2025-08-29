import React, { useState } from "react";
import './Login.css'


export default function Login() {
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-left">
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/pagina-de-login-illustration-svg-png-download-3783954.png" alt="imagem de login kk" />
                </div>
                <div className="login-right">
                    <h2>LOGIN</h2>
                    <form action="submit">
                        <input type="text"/>
                        <input type="password" />
                        <button>Acessar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}