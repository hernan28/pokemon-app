import React from "react";
import PokemonStats from "../PokemonStats";

export default {
    title: "Stats/PokemonStats",
    component: PokemonStats,
    parameters: {
      layout: "fullscreen",
    },
  };

  export const TestPokemonStats = () => <PokemonStats/>;