import { useEffect } from "react"
import { useNavigate } from "react-router"
import useRequestData from "./useRequestData"


const useProtectedPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if(!token){
            navigate("/login")
        }
    }, [])
}

export default useProtectedPage