import React, { useEffect, useState } from "react";
import useFetch from "react-fetch-hook";
import InfiniteScroll from "react-infinite-scroll-component";
import PokemonList from "./PokemonList";

const AllPokemon = () => {
  const [runGetData, setRunGetData] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [pokemonList, setPokemonList] = useState([]);
  const { data: { results: newPokemons = [], next } = {}, isLoading } =
    useFetch(currentUrl, { depends: [runGetData] });

  useEffect(() => {
    if (runGetData) return;
    setRunGetData(true);
  }, [runGetData]);

  useEffect(() => {
    if (
      !isLoading &&
      pokemonList[pokemonList?.length - 1]?.name !==
        newPokemons[newPokemons?.length - 1]?.name
    ) {
      setPokemonList((statePokemonList) => [
        ...statePokemonList,
        ...newPokemons,
      ]);
    }
  }, [newPokemons, isLoading, pokemonList]);

  return (
    <InfiniteScroll
      dataLength={pokemonList.length}
      next={() => {
        setCurrentUrl(next);
      }}
      hasMore={!!next && !isLoading}
    >
      <PokemonList pokemonList={pokemonList} />
    </InfiniteScroll>
  );
};

export default AllPokemon;
