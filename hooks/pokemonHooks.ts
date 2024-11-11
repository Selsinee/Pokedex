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

export type PokemonDetail = {
  abilities: Ability[];
  base_experience: number;
  height: number;
  id: number;
  name: string;
  species: Species;
  sprites: Sprite;
  types: Type[];
  weight: number;
}

type Ability = {
  ability: Species;
  is_hidden: boolean;
  slot: number;
}

type Species = {
  name: string;
  url: string;
}

type Sprite = {
  front_default: string;
}

type Type = {
  slot: number;
  type: Species;
}

export const usePokemons = () => {
  const [limit, setLimit] = useState(20)
  const { error, isLoading, data } = useApi<PokemonResponse>(`pokemon?limit=${limit}`, ['pokemons', limit])
  const loadMore = () => {
      setLimit((prev) => prev + 20)
  }

  return { error, isLoading, pokemons: data?.results, loadMore }
}

export const usePokemonDetail = (url: string) => {
  const { error, isLoading, data } = useApi<PokemonDetail>(url, [url])

  return { error, isLoading, detail: data }
}

export const usePokemonSprite = (url: string) => {
  const { error, isLoading, detail } = usePokemonDetail(url)

  return { error, isLoading, sprite: detail?.sprites.front_default }
}
