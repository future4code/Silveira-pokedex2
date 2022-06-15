import styled from "styled-components";
import { dark_blue, dark_yellow, light_blue, light_yellow } from "../../constants/colors";
import backgroundPokemonList from "../../assets/pokemon_background.png";
import backgroundPokedex from "../../assets/pokedex_background.png";

export const CardContainer = styled.div`
    border: 2px solid ${dark_yellow};
    display: flex;
    flex-direction: column;
    text-align: center;

    // NOME POKEMONS
    p {
        border-bottom: 1px solid black;
        background-color: ${dark_blue};
        color: ${light_yellow};
        padding: 10px;
        text-transform: capitalize;
    };

    img {
        background-image: ${(props) => props.tela ? `url(${backgroundPokedex}); background-position: center;` : `url(${backgroundPokemonList});`};
        background-size: cover;
        background-repeat: no-repeat;
    };

    // BOTÕES CARD
    button {
        height: 100%;
        border: none;
        padding: 10px;
        background-color: ${light_blue};
        color: ${light_yellow};
        font-weight: bolder;
        width: 50%;

        &:hover {
            cursor: pointer;
            background-color: ${dark_blue};
            transition: 0.2s;
        };
    };

    // BOTAO ADD/REMOVER POKEDEX    
    button:first-of-type {
        border-right: 1px solid black;
    };    
`