import { FaLock, FaUser, FaEyeSlash, FaRegEye } from "react-icons/fa"
import logo from "../../assets/logoBranca.svg";
import { useState } from "react"
import Lines from "../lines/index";
import "./login.css"


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password)
        console.log("Envio")
    }
    const togglePasswordVisibility = () => { setShowPassword(!showPassword); }

    return (
        <div className="login-wrapper">
            <Lines/>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <img src={logo} alt="Logo do sistema" className="logo" />
                    <h1> Acesse o sistema</h1>
                    <div className="input-field">
                        <input
                            id="email"
                            type="email"
                            placeholder=""
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="email" className="placeholder-label">E-mail</label>
                        <FaUser className="icon2" />
                    </div>
                    <div className="input-field">
                        <input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder=""
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="password" className="placeholder-label">Senha</label>
                        <span onClick={togglePasswordVisibility} className="icon">
                            {showPassword ? <FaRegEye /> : (password.length > 0 ? <FaEyeSlash /> : <FaLock />)}
                        </span>
                    </div>
                    <div className="recall-forget">
                        <a href="a">Esqueceu a senha?</a>
                    </div>
                    <button>Entrar</button>


                </form>
            </div>
        </div>

    )
}

export default Login
