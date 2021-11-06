import useRequestData from "../../hooks/useRequestData"
import { UrlBase } from "../../constants/constants"
import { useNavigate } from "react-router"


const AdminHomePage = () => {
    const navigate = useNavigate()
    const [data, isLoading, error] = useRequestData("get", `${UrlBase}/trips`)

    const listTrips = data.trips && data.trips.map((trip) => {
        return(
            <div key={trip.id}>
                <h3>{trip.name}</h3>
                <button>Detalhes</button>
                <button>Excluir</button>
            </div>
        )
    })

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