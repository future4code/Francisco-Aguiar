import useRequestData from "../../hooks/useRequestData"
import { UrlBase } from "../../constants/constants"
import { useNavigate } from "react-router"
import useProtectedPage from "../../hooks/useProtectedPage"
import { useEffect } from "react"


const AdminHomePage = () => {
    useProtectedPage()

    const navigate = useNavigate()
    const [data, isLoading, error, exec] = useRequestData("get", `${UrlBase}/trips`)

    const listTrips = data.trips && data.trips.map((trip) => {
        return(
            <div key={trip.id}>
                <h3>{trip.name}</h3>
                <button onClick = {() => goTripDetailsPage(trip.id)}>Detalhes</button>
                <button>Excluir</button>
            </div>
        )
    })
    
    useEffect(() => {
        exec && exec()
    }, [exec])

    const goTripDetailsPage = (id) => {
        navigate(`tripdetails/${id}`)
    }

    return (
        <>
            <header>
                <h2>Space Trips 🛸</h2>
                <button onClick= {() => {navigate("/")}}>Home</button>
                <button>Logout</button>
            </header>
            <main>
                <h1>Área Administrativa</h1>
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