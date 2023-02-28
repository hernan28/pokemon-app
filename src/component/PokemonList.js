import React, { useState, useEffect } from "react";
import useFetch from "react-fetch-hook";
import PokemonStats from "./Stats/PokemonStats";

const PokemonItem = ({ pokemonItem }) => {
  const [runGetData, setRunGetData] = useState(false);
  const { data: { stats = [], name, sprites } = {} } = useFetch(
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
      }}
    >
      {/* TODO: REMOVE NAME HERE JUST FOR TEST */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img alt={name} src={sprites?.front_default} />
        {name}
      </div>
      <PokemonStats statsList={pokemonStats} />
    </div>
  );
};

const PokemonList = ({ pokemonList }) => {
  return (
    <div>
      {pokemonList &&
        pokemonList.map((pokemonItem) => (
          <PokemonItem
            key={pokemonItem.name ?? pokemonItem.pokemon.name}
            pokemonItem={pokemonItem.name ? pokemonItem : pokemonItem.pokemon}
          />
        ))}
    </div>
  );
};

export default PokemonList;
