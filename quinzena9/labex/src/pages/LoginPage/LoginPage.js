import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router"
import { UrlBase } from "../../constants/constants"

const LoginPage = () => {
    const [inputEmail, setInputEmail] = useState("")
    const [inputPassword, setInputPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const handleChangeEmail = (e) => {
        setInputEmail(e.target.value)
    }

    const handleChangePassword = (e) => {
        setInputPassword(e.target.value)
    }

    const onClickLogin = async () => {
        let token
        let error

        await axios
             .post(`${UrlBase}/login`, {
                "email": inputEmail,
            	"password": inputPassword
            }, {
                "Content-Type": "application/json"
            })
            .then((response) => {
                console.log("login", response.data)
                token = response.data.token
            })
            .catch((err) => {
                console.log("erroLogin", err)
                error = err
            })
        
            if(token){
                navigate("/admin")
                localStorage.setItem("token", token)
            } else{
                alert("Usuário ou senha incorreta!")
            }
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
                    <button onClick= {() => {navigate("/")}}>Voltar</button>
                        <button onClick= {onClickLogin} >Login</button>
                </div>
            </main>

        </>
    )
}

export default LoginPage