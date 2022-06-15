import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { BASE_URL } from "../../constants/url"
import { ContainerDatails, Collumn, ContainerImage,  ContainerStats, ContainerTypes, ContainerMoves, Titulo } from "./styled";
import { Header } from "../../components/Header/Header";

export function PokemonDetails() {
    const params = useParams();
    const [selectedPokemon, setSelectedPokemon] = useState({});
    const {pokemons, setPokemons, pokedex, setPokedex} = useContext(GlobalStateContext);

    useEffect(() => {
        axios.get(`${BASE_URL}/pokemon/${params.name}`)
            .then((res) => {
            setSelectedPokemon(res.data);
        }).catch(error => console.log(error));
    }, []);

    // const addOrRemoveFromPokedex = () => {
    //     const foundSelectedPokemon = pokedex && pokedex.findIndex((pokemon) => {
    //         return selectedPokemon.id === pokemon.id;
    //     });

    //     const pokemonsCopy = [...pokemons];
    //     const pokedexCopy = [...pokedex];

    //     if(foundSelectedPokemon > 0) {
    //         pokemonsCopy.push(selectedPokemon)
    //         const addAndOrdered = pokemonsCopy.sort((a, b) => a.id - b.id);
    //         pokedexCopy.splice(foundSelectedPokemon, 1);
    //         const remAndOrdered = pokedexCopy.sort((a, b) =>  a.id - b.id);
    //         pokedexCopy.push(remAndOrdered);
    //         setPokemons(addAndOrdered);
    //         setPokedex(remAndOrdered);
    //     } else {
    //         pokedexCopy.push(selectedPokemon);
    //         const addAndOrdered = pokedexCopy.sort((a, b) => a.id - b.id);
    //         pokemonsCopy.splice(foundSelectedPokemon, 1);
    //         const remAndOrdered = pokemonsCopy.sort((a, b) => a.id - b.id);
    //         pokemons.push(pokemonsCopy);
    //         setPokedex(addAndOrdered);
    //         setPokemons(remAndOrdered);
    //     };
    // };

    return (
        <div>
            <Header title="Detalhes" currentPage="details" /* addOrRemovePokemon={addOrRemoveFromPokedex} */ />

            <Titulo>
             <h1>{params.name}</h1>   
            </Titulo>
            <ContainerDatails>
                <Collumn>
                    <ContainerImage>
                        <img src={selectedPokemon.sprites && selectedPokemon.sprites.front_default} />
                    </ContainerImage>

                    <ContainerImage>
                        <img src={selectedPokemon.sprites && selectedPokemon.sprites.back_default} />
                    </ContainerImage>
                </Collumn>

                <Collumn>
                    <ContainerStats>
                         <h2><strong>Poderes</strong></h2>
                        {selectedPokemon.stats &&
                            selectedPokemon.stats.map((stat) => {
                                return (
                                    <p key={stat.stat.name}>
                                        <strong>{stat.stat.name}: </strong>
                                        {stat.base_stat}
                                    </p>
                                );
                            })}
                    </ContainerStats>
                </Collumn>

                <Collumn>
                    <ContainerTypes>
                        <h2><strong>Tipo</strong></h2>
                        {selectedPokemon.types && selectedPokemon.types.map((type) => {
                            return <p key={type.type.name}><strong>{type.type.name}</strong></p>;
                        })}

                    </ContainerTypes>

                    <ContainerMoves>
                        <h2><strong>Principais Ataques</strong></h2>
                        {selectedPokemon.moves &&
                            selectedPokemon.moves.map((move, index) => {
                                return (
                                    index < 5 && <p key={move.move.name}>{move.move.name}</p>
                                );
                            })}
                    </ContainerMoves>
                </Collumn>
            </ContainerDatails>
        </div>
    )


}