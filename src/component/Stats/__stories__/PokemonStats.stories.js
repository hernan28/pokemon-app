import React from "react";
import PokemonStats from "../PokemonStats";

const testStatsList = [
  { name: "Hp", value: 45 },
  { name: "Attack", value: 49 },
  { name: "Defense", value: 49 },
  { name: "Special Attack", value: 65 },
  { name: "Special Defense", value: 65 },
  { name: "Speed", value: 45 },
];

export default {
  title: "Stats/PokemonStats",
  component: PokemonStats,
  parameters: {
    layout: "fullscreen",
  },
};

export const TestPokemonStats = () => (
  <PokemonStats statsList={testStatsList} />
);
