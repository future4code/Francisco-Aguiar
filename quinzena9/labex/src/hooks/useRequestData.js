import axios from "axios"
import { useState, useEffect } from "react"

const useRequestData = (method, url, body, header ) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const [exec, setExec] = useState()

    useEffect(() => {
        
        if (method === "get"){
            // setIsLoading(true)
            // axios
            //     .get(url, header)
            //     .then((res) => {
            //         setIsLoading(false)
            //         setData(res.data)
            //     })
            //     .catch((err) => {
            //         setIsLoading(false)
            //         setError(err)
            //     })

            setIsLoading(true)
            setExec(() => () => {
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
            })

        }
        else if (method === "post"){

            // setIsLoading(true)
            // axios
            //     .post(url, body, header)
            //     .then((res) => {
            //         setIsLoading(false)
            //         setData(res.data)
            //         alert("ok")
            //     })
            //     .catch((err) => {
            //         setIsLoading(false)
            //         setError(err)
            //         alert("deu ruim-")
            //     })

            setIsLoading(true)
            setExec(() => () => {
                axios
                    .post(url, body, header)
                    .then((res) => {
                        setIsLoading(false)
                        setData(res.data)
                    })
                    .catch((err) => {
                        setIsLoading(false)
                        setError(err)
                    })
            })

        }
        else if (method === "delete"){
            setIsLoading(true)
            setExec(() => () => {
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

            })

            // axios
            //     .delete(url, header)
            //     .then((res) => {
            //         setIsLoading(false)
            //         setData(res.data)
            //     })
            //     .catch((err => {
            //         setIsLoading(false)
            //         setError(err)
            //     }))
        }
        else if (method === "put"){
            setIsLoading(true)
            setExec(() => () => {
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
            })

            // axios
            //     .put(url, body, header)
            //     .then((res) => {
            //         setIsLoading(false)
            //         setData(res.data)
            //     })
            //     .catch((err) => {
            //         setIsLoading(false)
            //         setError(err)
            //     })
        }

        
    }, [url])
    
    return [data, isLoading, error, exec]
}

export default useRequestData