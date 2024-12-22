import { FaLock, FaUser, FaEyeSlash, FaRegEye } from "react-icons/fa";
import logo from "../../assets/logoBranca.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Lines from "../lines/index";
import "./login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        if (!email || !password) {
            alert("Por favor, preencha todos os campos.");
            return;
        }
        console.log('Dados enviados:', { email, password });
        axios.post("http://localhost:3001/login", { email, password })
            .then((response) => {
                setIsLoading(false);
                console.log('Resposta do servidor:', response.data);
                alert("Acesso concedido");
                navigate("/acesso");
            })
            .catch((error) => {
                setIsLoading(false);
                const errorMessage = error.response?.data?.error || "Erro ao conectar ao servidor.";
                alert(errorMessage);
                console.error('Erro ao logar:', errorMessage);
            });
    };


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className="login-wrapper">
            <Lines />
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <img
                        src={logo}
                        alt="Logo do sistema"
                        className="logo"
                        title="Scapola Comunica"
                    />
                    <h1>Acesse o sistema</h1>
                    <div className="input-field">
                        <input
                            id="email"
                            type="email"
                            placeholder=""
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="email" className="placeholder-label">
                            E-mail
                        </label>
                        <FaUser className="icon2" />
                    </div>
                    <div className="input-field">
                        <input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder=""
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="password" className="placeholder-label">
                            Senha
                        </label>
                        <span onClick={togglePasswordVisibility} className="icon">
                            {showPassword ? <FaRegEye /> : (password.length > 0 ? <FaEyeSlash /> : <FaLock />)}
                        </span>
                    </div>
                    <div className="recall-forget">
                        <a href="#">Esqueceu a senha?</a>
                    </div>
                    <button type="submit" disabled={isLoading}>
                        {isLoading ? "Entrando..." : "Entrar"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
