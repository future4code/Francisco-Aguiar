import { useNavigate } from "react-router"
import useRequestData from "../../hooks/useRequestData"
import { UrlBase } from "../../constants/constants"

const ListTripsPage = () =>{
    const navigate = useNavigate()
    const [data, isLoading, error] = useRequestData("get", `${UrlBase}/trips`)
    
    const listTrips = data.trips && data.trips.map((trip) => {
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
                    {isLoading && <p>Carregando...</p>}
                    {!isLoading && error && <p>Ocorreu um erro!</p>}
                    {!isLoading && data.trips && data.trips.length > 0 && listTrips}
                    {!isLoading && data.trips && data.trips.length === 0 && (<p>Não há viagens disponíveis!</p>)}
                </div>
            </main>
        </>
    )
}

export default ListTripsPage