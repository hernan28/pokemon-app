import React from "react";
import AllPokemon from "./AllPokemonList";
import TypePokemonList from "./TypePokemonList";

const PokemonDisplay = ({ url }) => {
  return url ? <TypePokemonList url={url} /> : <AllPokemon />;
};

export default PokemonDisplay;
