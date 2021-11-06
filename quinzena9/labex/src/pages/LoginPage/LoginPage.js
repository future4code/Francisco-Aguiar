import { useState } from "react"
import { useNavigate } from "react-router"

const LoginPage = () => {
    const [inputEmail, setInputEmail] = useState("")
    const [inputPassword, setInputPassword] = useState("")

    const navigate = useNavigate()

    const handleChangeEmail = (e) => {
        setInputEmail(e.target.value)
    }

    const handleChangePassword = (e) => {
        setInputPassword(e.target.value)
    }

    return(
        <>
            <header>
                <h2>Space Trips 🛸</h2>
            </header>
            <main>
                <div>
                    <h1>Login</h1>
                    <input placeholder= "Email" value= {inputEmail} onChange= {handleChangeEmail} />
                    <input placeholder= "Senha" type= "password" value= {inputPassword} onChange= {handleChangePassword}/>
                    <button onClick= {() => {navigate(-1)}}>Voltar</button>
                    <button>Login</button>
                </div>
            </main>

        </>
    )
}

export default LoginPage