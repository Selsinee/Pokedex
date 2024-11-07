import { useState } from "react";
import { useApi } from "./useApi";

type PokemonResponse = {
    count: number;
    next: string;
    previous: string;
    results: Pokemon[]
}

export type Pokemon = {
    name: string;
    url: string
}

type PokemonDetail = {
    id: number;
    height: number;
    name: string,
    species: Pokemon;
    sprites: Sprite;
    types: Pokemon[];
    weight: number;
}

type Sprite = {
    front_default: string;
}

export const usePokemons = () => {
    const [limit, setLimit] = useState(20)
    const { error, isLoading, data } = useApi<PokemonResponse>(`pokemon?limit=${limit}`)
    const loadMore = () => {
        setLimit((prev) => prev + 20)
    }

    return { error, isLoading, pokemons: data?.results, loadMore }
}

export const usePokemonDetail = (url: string) => {
    const { error, isLoading, data } = useApi<PokemonDetail>(url)
 
    return { error, isLoading, detail: data }
}

export const usePokemonSprite = (url: string) => {
    const { error, isLoading, detail } = usePokemonDetail(url)
 
    return { error, isLoading, sprite: detail?.sprites.front_default }
}