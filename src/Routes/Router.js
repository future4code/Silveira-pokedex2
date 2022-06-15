import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PokemonsList } from "../pages/PokemonsList/PokemonsList";
import { Pokedex } from "../pages/Pokedex/Pokedex";
import { PokemonDetails } from "../pages/PokemonDetails/PokemonDetails";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>

                <Route index element={<PokemonsList />} />
                <Route path="/pokedex" element={<Pokedex />} />
                <Route path="/pokemon/:name" element={<PokemonDetails />} />

            </Routes>
        </BrowserRouter>
    );
};