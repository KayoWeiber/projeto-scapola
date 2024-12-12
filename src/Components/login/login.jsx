import {FaLock, FaUser,FaEyeSlash} from "react-icons/fa"

import { useState } from "react"
import "./login.css"

const Login = () => {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const handleSubmit=(e) =>{
        e.preventDefault()
        console.log(username,password)
        console.log("Envio")
    }

    return (

        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1> Acesse o sistema</h1>
                <div className="input-field">
                    <input type="text" placeholder='Usuário' onChange={(e)=>setUsername(e.target.value)} />
                    <FaUser className="icon"/>
                </div>
                <div className="input-field">
                    <input type="password" placeholder='Senha'onChange={(e)=>setPassword(e.target.value)}/>
                    <FaLock className="icon"/>
                   {/* <FaEyeSlash className="icon"/> */}
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
