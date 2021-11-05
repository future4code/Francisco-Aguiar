import { useNavigate } from "react-router"

const ListTripsPage = () =>{
    const navigate = useNavigate()

    return(
        <>
            <header>
                <h2>Space Trips 🛸</h2>
                <button onClick = {() => navigate(-1)}>Voltar</button>
                <button>Increver-se</button>
            </header>
            <main>
                <h1>Viagens Disponíveis</h1>
                <div>
                    lista de viagens
                </div>
            </main>
        </>
    )
}

export default ListTripsPage