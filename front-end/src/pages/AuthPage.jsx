import axios from "axios";
import { useState } from "react";

export default function AuthPage({ onAuth }) {
    const [value, setValue] = useState('');
    const [display, setDisplay] = useState(false);

    function onSubmit(e) {
        e.preventDefault();
        if (value === '') return alert("Por favor preencha o campo");
        setDisplay(true);

        const promise = axios.post(
            "http://localhost:5000/authenticate",
            {username: value}
        );
        promise
            .then((r) => 
            {
                onAuth({...r.data, secret: value});
            })
            .catch((e) => console.log(e));
        
        onAuth({ username: value, secret: value });
        setDisplay(false);
    };
    
    return (
        <div className="background">
        <form onSubmit={onSubmit} className="form-card">
            <div className="form-title">Bem vindo(a) 👋</div>

            <div className="form-subtitle">Crie um nome para começar</div>

            <div className="auth">
                <div className="auth-label">Usuário</div>
                <input 
                    className="auth-input" 
                    name="username" 
                    type="text"
                    value={value} 
                    onChange={e => setValue(e.target.value)}/>
                <button className="auth-button" type="submit" disabled={display}>
                    Entrar
                </button>
            </div>
        </form>
        </div>
    );
}