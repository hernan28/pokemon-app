import React, { useState, useEffect } from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import useFetch from "react-fetch-hook";
import InfoCard from "./cards/InfoCard";
import PokemonStats from "./Stats/PokemonStats";

import DetailsButton from "./buttons/DetailsButton";

const PokemonItem = ({ pokemonItem, pokeIndex }) => {
  const [runGetData, setRunGetData] = useState(false);
  const { data: { stats = [], ...restPokemonData } = {} } = useFetch(
    pokemonItem.url,
    { depends: [runGetData] }
  );

  useEffect(() => {
    if (runGetData) return;
    setRunGetData(true);
  }, [runGetData]);

  const pokemonStats = stats.map((pokeStat) => ({
    name: pokeStat.stat.name,
    value: pokeStat.base_stat,
  }));
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: "30px 20px 20px",
        backgroundColor: pokeIndex % 2 === 1 ? "#f8f7f7" : undefined,
      }}
    >
      {Object.keys(restPokemonData).length !== 0 ? (
        <>
          <InfoCard pokemonData={restPokemonData} />
          <PokemonStats statsList={pokemonStats} />
          <DetailsButton />
        </>
      ) : (
        <>
          <Stack spacing={1}>
            <Skeleton variant="rectangular" width={300} height={200} />
          </Stack>
          <Stack spacing={1}>
            <Skeleton width={300} />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </Stack>
        </>
      )}
    </div>
  );
};

const PokemonList = ({ pokemonList }) => {
  return (
    <div>
      {pokemonList &&
        pokemonList.map((pokemonItem, index) => (
          <PokemonItem
            key={pokemonItem.name ?? pokemonItem.pokemon.name}
            pokemonItem={pokemonItem.name ? pokemonItem : pokemonItem.pokemon}
            pokeIndex={index}
          />
        ))}
    </div>
  );
};

export default PokemonList;
