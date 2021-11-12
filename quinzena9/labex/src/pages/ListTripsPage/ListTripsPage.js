import { useNavigate } from "react-router"
import { UrlBase } from "../../constants/constants"
import { useRequestGet } from "../../hooks/useRequest"

const ListTripsPage = () =>{
    const navigate = useNavigate()
    let result = useRequestGet(`${UrlBase}/trips`)

    const listTrips = result.data.trips && result.data.trips.map((trip) => {
        return(
            <div key={trip.id}>
                <p><b>Nome:</b> {trip.name}</p>
                <p><b>Descrição:</b> {trip.description}</p>
                <p><b>Planeta:</b> {trip.planet}</p>
                <p><b>Duração:</b> {trip.durationInDays}</p>
                <p><b>Data:</b> {trip.date}</p>                
            </div>
        )
    })

    return(
        <>
            <header>
                <h2>Space Trips 🛸</h2>
                <button onClick = {() => navigate(-1)}>Voltar</button>
                <button onClick = {() => navigate("/applicationforme")}>Increver-se</button>
                <button onClick = {() => navigate("/")}>Home</button>
            </header>
            <main>
                <h1>Viagens Disponíveis</h1>
                <div>
                    {result.isLoading && <p>Carregando...</p>}
                    {!result.isLoading && result.error && <p>Ocorreu um erro!</p>}
                    {!result.isLoading && result.data.trips && result.data.trips.length > 0 && listTrips}
                    {!result.isLoading && result.data.trips && result.data.trips.length === 0 && (<p>Não há viagens disponíveis!</p>)}
                </div>
            </main>
        </>
    )
}

export default ListTripsPage