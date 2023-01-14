import React from "react";
import useFetch from "react-fetch-hook";
import PokemonList from "./PokemonList";

const AllPokemon = () => {
  const { data: { results: pokemonList } = {} } = useFetch(
    "https://pokeapi.co/api/v2/pokemon"
  );
  return <PokemonList pokemonList={pokemonList} />;
};

export default AllPokemon;
