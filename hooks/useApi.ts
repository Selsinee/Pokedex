import axios from "axios";
import { useEffect, useState } from "react";

const pokeApi = axios.create({
    baseURL: "https://pokeapi.co/api/v2/"
})

export const useApi = <T>(url: string) => {
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<T>();

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true)
            try {
                const response = await pokeApi.get<T>(url);
                setData(response.data)
            } catch (error) {
                setError(true)
                console.log(error)
            }
            setIsLoading(false)
        }
        getData()
    }, [url])

    return { error, isLoading, data }
}