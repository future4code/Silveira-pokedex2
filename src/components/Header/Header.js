import { HeaderContainer, PageTitle, Logo } from "./styled";

import pokedexLogo from "../../assets/pokedex_logo.png";

import { goBack, goToPokedex, goToPokemonsList } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

export function Header({title, currentPage, addOrRemovePokemon}) {
    const navigate = useNavigate();

    const headerButton = () => {
        switch(title) {
            case "Lista de Pokemons":
                return "Ir para Pokedex";
            case "Pokedex":
                return "Voltar para lista de Pokémons";
            default:
                return "Voltar";
        };
    };

    return (
        <HeaderContainer>
                {/* ------- BOTÃO DA PÁGINA ------- */}
            {currentPage === "pokemonsList" && 
            <button onClick={() => goToPokedex(navigate)}>{headerButton()}</button>}

            {currentPage === "pokedex" && 
            <button onClick={() => goToPokemonsList(navigate)}>{headerButton()}</button>}

            {currentPage === "details" && 
            <button onClick={() => goBack(navigate)}>{headerButton()}</button>}


                {/* ------- TÍTULO DA PÁGINA ------- */}
            <h1>{title}</h1>


                {/* ------- LOGO ESTÁTICO ------- */}
            {currentPage === "details" ? <span /* onClick={addOrRemovePokemon} */>Add/Rem Pokedex</span> : <Logo src={pokedexLogo} alt="Logo Pokedex" />}
        </HeaderContainer>
    );
};