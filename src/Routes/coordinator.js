export const goToPokemonsList = (navigate) => {
    navigate(`/`);
};

export const goToPokedex = (navigate) => {
    navigate(`/pokedex`);
};

export const goToPokemonDetails = (navigate, name) => {
    navigate(`/pokemon/${name}`);
};

export const goBack = (navigate) => {
    navigate(-1);
};