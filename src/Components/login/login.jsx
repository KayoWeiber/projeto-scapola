import {FaLock, FaUser,FaEyeSlash,FaRegEye } from "react-icons/fa"
import logo from "../../assets/logoPreta.svg";
import { useState } from "react"
import "./login.css"


const Login = () => {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [showPassword, setShowPassword] = useState(false);
    const handleSubmit=(e) =>{
        e.preventDefault()
        console.log(username,password)
        console.log("Envio")
    }
    const togglePasswordVisibility = () => { setShowPassword(!showPassword);}

    return (

        <div className="container">
            <form onSubmit={handleSubmit}>

                <img src={logo} alt="Logo do sistema" className="logo" />
                <h1> Acesse o sistema</h1>
                <div className="input-field">
                    <input type="text" placeholder='' onChange={(e)=>setUsername(e.target.value)} />
                    <label htmlFor="username" className="placeholder-label">Usuário</label>
                    <FaUser className="icon2"/>
                </div>
                <div className="input-field">
                <input 
                    type={showPassword ? 'text' : 'password'} 
                    placeholder='' 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <label htmlFor="password" className="placeholder-label">Senha</label>
                <span onClick={togglePasswordVisibility} className="icon">
                {showPassword ? <FaRegEye /> : (password.length > 0 ? <FaEyeSlash /> : <FaLock />)}
                </span>
                </div>
                <div className="recall-forget">
                    <label htmlFor="">
                        <input type="checkbox"/>
                        Lembre de mim
                    </label>
                    <a href="a">Esqueceu a senha?</a>
                </div>
                <button>Entrar</button>


            </form>
        </div>

    )
}

export default Login
