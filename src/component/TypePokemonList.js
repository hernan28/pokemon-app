import React from "react";
import useFetch from "react-fetch-hook";
import PokemonList from "./PokemonList";

const TypePokemonList = ({ url }) => {
  const { data: { pokemon: pokemonList = [] } = {} } = useFetch(url);
  return <PokemonList pokemonList={pokemonList} />;
};

export default TypePokemonList;
