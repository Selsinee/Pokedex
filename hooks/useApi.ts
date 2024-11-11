import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

const pokeApi = axios.create({
    baseURL: "https://pokeapi.co/api/v2/"
})

export const useApi = <T>(url: string, key: unknown[]) => {
    const { data, isLoading, isError: error } = useQuery({
        queryKey: key,
        queryFn: async () => {
            const response = await pokeApi.get<T>(url);
            return  response.data;
        },
    })

    return { error, isLoading, data }
}
