import useRequestData from "../../hooks/useRequestData"
import { UrlBase } from "../../constants/constants"
import { useNavigate } from "react-router"
import useProtectedPage from "../../hooks/useProtectedPage"
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react/cjs/react.development"


const AdminHomePage = () => {
    useProtectedPage()

    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const [data, isLoading, error, exec] = useRequestData("get", `${UrlBase}/trips`)
    const [updatePage, setUpdatePage] = useState(false)

    const listTrips = data.trips && data.trips.map((trip) => {
        return(
            <div key={trip.id}>
                <h3>{trip.name}</h3>
                <button onClick = {() => goTripDetailsPage(trip.id)}>Detalhes</button>
                <button onClick= {() => deleteTrip(trip.id)}>Excluir</button>
            </div>
        )
    })
    
    useEffect(() => {
        exec && exec()
    }, [exec, updatePage])

    const goTripDetailsPage = (id) => {
        navigate(`tripdetails/${id}`)
    }

    const onClickLogout = () => {
        console.log("clicou")
        localStorage.removeItem("token")
        navigate("/login")
    }

    const deleteTrip = (tripId) => {
         
        if(window.confirm("Tem certeza que deseja excluir essa viagem?")){
            axios
            .delete(`${UrlBase}/trips/${tripId}`, {
                headers: {
                    "Content-Type": "application/json",
                    "auth" : token
                }
            })
            .then((res) => {
                alert("Viagem excluida com sucesso!")
                setUpdatePage(!updatePage)
            })
            .catch((err) => {
                alert("Erro! Não foi possível excluir esta viagem.")
            })
        
        }
    }

    return (
        <>
            <header>
                <h2>Space Trips 🛸</h2>
                <button onClick= {() => {navigate("/")}}>Home</button>
                <button onClick = {onClickLogout}>Logout</button>
            </header>
            <main>
                <h1>Área Administrativa</h1>
                <button onClick={() => navigate("/admin/createtrip")}>Criar Viagem</button>
                <div>
                    {isLoading && <p>Carregando...</p>}
                    {!isLoading && error && <p>Ocorreu um erro!</p>}
                    {!isLoading && data.trips && data.trips.length > 0 && listTrips}
                    {!isLoading && data.trips && data.trips.length === 0 && (<p>Não há viagens cadastradas!</p>)}
                </div>
            </main>            
        </>
    )
}

export default AdminHomePage