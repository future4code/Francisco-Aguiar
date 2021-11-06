import axios from "axios"
import { useState, useEffect } from "react"

const useRequestData = (method, url, body, header ) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    let exec
    useEffect(() => {
        
        if (method === "get"){
            // setIsLoading(true)
            // exec = () => {
            //     axios
            //         .get(url, header)
            //         .then((res) => {
            //             setIsLoading(false)
            //             setData(res.data)
            //         })
            //         .catch((err) => {
            //             setIsLoading(false)
            //             setError(err)
            //         })
            // }


            setIsLoading(true)
            axios
                .get(url, header)
                .then((res) => {
                    setIsLoading(false)
                    setData(res.data)
                })
                .catch((err) => {
                    setIsLoading(false)
                    setError(err)
                })
        }
        else if (method === "post"){
            // setIsLoading(true)
            // exec = () => {
            //     axios
            //         .post(url, body, header)
            //         .then((res) => {
            //             setIsLoading(false)
            //             setData(res.data)
            //             alert("ok")
            //         })
            //         .catch((err) => {
            //             setIsLoading(false)
            //             setError(err)
            //             alert("deu ruim-")
            //         })
            // }

            setIsLoading(true)
            axios
                .post(url, body, header)
                .then((res) => {
                    setIsLoading(false)
                    setData(res.data)
                    alert("ok")
                })
                .catch((err) => {
                    setIsLoading(false)
                    setError(err)
                    alert("deu ruim-")
                })
        }
        else if (method === "delete"){
            // setIsLoading(true)
            // exec = () => {
            //     axios
            //         .delete(url, header)
            //         .then((res) => {
            //             setIsLoading(false)
            //             setData(res.data)
            //         })
            //         .catch((err => {
            //             setIsLoading(false)
            //             setError(err)
            //         }))    
            // }

            setIsLoading(true)
            axios
                .delete(url, header)
                .then((res) => {
                    setIsLoading(false)
                    setData(res.data)
                })
                .catch((err => {
                    setIsLoading(false)
                    setError(err)
                }))
        }
        else if (method === "put"){
            // setIsLoading(true)
            // exec = () => {
            //     axios
            //         .put(url, body, header)
            //         .then((res) => {
            //             setIsLoading(false)
            //             setData(res.data)
            //         })
            //         .catch((err) => {
            //             setIsLoading(false)
            //             setError(err)
            //         })
    
            // }

            setIsLoading(true)
            axios
                .put(url, body, header)
                .then((res) => {
                    setIsLoading(false)
                    setData(res.data)
                })
                .catch((err) => {
                    setIsLoading(false)
                    setError(err)
                })
        }

        
    }, [url])
    
    return [data, isLoading, error]
}

export default useRequestData