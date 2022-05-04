import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/url";
import { GlobalStateContext } from "./GlobalStateContext";

export function GlobalState({children}) {
    const [pokemonNames, setPokemonNames] = useState([]);
    const [pokemons, setPokemons] = useState([]);
    const [pokedex, setPokedex] = useState([]);

    useEffect(() => {
        getPokemonNames();
    }, []);

    const getPokemons = () => {
        const newPokemonsList = [...pokemons];

        pokemonNames.forEach((pokemon) => {
            axios.get(`${BASE_URL}/pokemon/${pokemon.name}`)
            .then((response) => {
                newPokemonsList.push(response.data);
                setPokemons(newPokemonsList);
            }).catch(error => console.log(error))
        });
    };

    useEffect(() => {
        getPokemons();
    }, [pokemonNames]);

    const getPokemonNames = () => {
        axios.get(`${BASE_URL}/pokemon?limit=20`)
        .then((response) => {
            setPokemonNames(response.data.results);
        }).catch(error => console.log(error));
    };

    const data = {
        pokemonNames,
        pokemons,
        setPokemons,
        pokedex,
        setPokedex
    };

    return (
        <GlobalStateContext.Provider value={data}>
            {children}
        </GlobalStateContext.Provider>
    );
};