import { UrlBase } from "../../constants/constants"
import { useNavigate } from "react-router"
import useProtectedPage from "../../hooks/useProtectedPage"
import axios from "axios"
import { useRequestGet } from "../../hooks/useRequest"



const AdminHomePage = () => {
    useProtectedPage()

    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    const result = useRequestGet(`${UrlBase}/trips`)

    const listTrips = result.data.trips && result.data.trips.map((trip) => {
        return(
            <div key={trip.id}>
                <h3>{trip.name}</h3>
                <button onClick = {() => goTripDetailsPage(trip.id)}>Detalhes</button>
                <button onClick= {() => deleteTrip(trip.id)}>Excluir</button>
            </div>
        )
    })
    
    const goTripDetailsPage = (id) => {
        navigate(`tripdetails/${id}`)
    }

    const onClickLogout = () => {
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
                window.location.reload() // ajustar isso aqui!!
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
                    {result.isLoading && <p>Carregando...</p>}
                    {!result.isLoading && result.error && <p>Ocorreu um erro!</p>}
                    {!result.isLoading && result.data.trips && result.data.trips.length > 0 && listTrips}
                    {!result.isLoading && result.data.trips && result.data.trips.length === 0 && (<p>Não há viagens cadastradas!</p>)}
                </div>
            </main>            
        </>
    )
}

export default AdminHomePage