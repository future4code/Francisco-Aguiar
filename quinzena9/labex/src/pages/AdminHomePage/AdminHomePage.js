import react from "react";

const AdminHomePage = () => {

    return (
        <>
            <header>
                <h2>Space Trips 🛸</h2>
                <button>Home</button>
                <button>Logout</button>
            </header>
            <main>
                <h1>Área Administrativa</h1>
                <div>
                    <h3>Nome da viagem</h3>
                    <button>Detalhes</button>
                    <button>Excluir</button>
                </div>
            </main>            
        </>
    )
}

export default AdminHomePage