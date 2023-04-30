import axios from "axios";

export default function AuthPage({ onAuth }) {
    
    function onSubmit(e) {
        e.preventDefault();
        const { value } = e.target[0];

        const promise = axios.post(
            `${process.env.BACKEND_BASE_URL}/authenticate`,
            {username: value}
        );

        promise
            .then((r) => onAuth({...r.data, secret: value}))
            .catch((e) => console.log(e));
        onAuth({ username: value, secret: value });
    };
    
    return (
        <div className="background">
        <form onSubmit={onSubmit} className="form-card">
            <div className="form-title">Bem vindo(a) 👋</div>

            <div className="form-subtitle">Crie um nome para começar</div>

            <div className="auth">
                <div className="auth-label">Usuário</div>
                <input className="auth-input" name="username" />
                <button className="auth-button" type="submit">
                    Entrar
                </button>
            </div>
        </form>
        </div>
    );
}