import React, { useState, useEffect, useMemo } from "react";
import useFetch from "react-fetch-hook";
import InfiniteScroll from "react-infinite-scroll-component";
import PokemonList from "./PokemonList";

const LIST_INCREMENT = 20;

const TypePokemonList = ({ url }) => {
  const [runGetData, setRunGetData] = useState(false);
  const [currentDataCutOff, setCurrentDataCutOff] = useState(LIST_INCREMENT);
  const { data: { pokemon: pokemonList = [] } = {} } = useFetch(url, {
    depends: [runGetData],
  });

  const currentPokemonData = useMemo(
    () => pokemonList.slice(0, currentDataCutOff),
    [currentDataCutOff, pokemonList]
  );

  useEffect(() => {
    if (runGetData) return;
    setRunGetData(true);
  }, [runGetData]);

  return (
    <InfiniteScroll
      dataLength={currentPokemonData.length}
      next={() => {
        setCurrentDataCutOff(
          (currentDataCutOff) => currentDataCutOff + LIST_INCREMENT
        );
      }}
      hasMore={true}
    >
      <PokemonList pokemonList={currentPokemonData} />
    </InfiniteScroll>
  );
};

export default TypePokemonList;
