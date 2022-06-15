import { useContext } from "react";
import { CardPokemon } from "../../components/CardPokemon/CardPokemon";

import { Header } from "../../components/Header/Header";

import { GlobalStateContext } from "../../global/GlobalStateContext";

import { ContainerList } from "../../components/cardsListStyle/styled";
import { useParams } from "react-router-dom";

export function PokemonsList() {
    const { pokemons } = useContext(GlobalStateContext);

    return (
        <>
      
            <Header title="Lista de Pokemons" currentPage="pokemonsList" />
            
            <ContainerList>
                {pokemons && pokemons.map((pokemon) => {
                    return <CardPokemon pokemon={pokemon} image={pokemon.sprites.front_default} name={pokemon.name} key={pokemon.name} />
                })}
            </ContainerList>
            
        </>
    );
};