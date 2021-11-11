import { useNavigate } from "react-router-dom"

const HomePage = () => {
    const navigate = useNavigate()

    return (
        <>
            <h1>Space Trips 🛸</h1>
            <button onClick={() => navigate("/listtrips")}>Viagens</button>
            <button onClick= {() => navigate("/admin")}>Área Admin</button>
        </>
    )
}

export default HomePage