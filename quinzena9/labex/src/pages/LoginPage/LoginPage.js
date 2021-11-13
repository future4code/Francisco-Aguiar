import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router"
import { UrlBase } from "../../constants/constants"

const LoginPage = () => {
    const [informations, setInformations] = useState({
        email: "",
        password: "",
    })
    const navigate = useNavigate()

    const onClickLogin = async () => {
        let token
        let error

        await axios
             .post(`${UrlBase}/login`, {
                "email": informations.email,
            	"password": informations.password
            }, {
                "Content-Type": "application/json"
            })
            .then((response) => {
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
                    <input 
                        placeholder= "Email" 
                        value= {informations.email} 
                        onChange= {(e)=> setInformations({...informations, email: e.target.value})} 
                    />
                    <input 
                        placeholder= "Senha"   
                        type= "password" 
                        value= {informations.password} 
                        onChange= {(e)=> setInformations({...informations, password: e.target.value})}
                    />
                    <button onClick= {() => {navigate("/")}}>Voltar</button>
                    <button onClick= {onClickLogin} >Login</button>
                </div>
            </main>

        </>
    )
}

export default LoginPage