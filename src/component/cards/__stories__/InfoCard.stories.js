import React from "react";

import InfoCard from "../InfoCard";
const pokemonData = {
  name: "bulbasaur",
  height: 7,
  weight: 69,
  id: 1,
  types: [
    {
      type: {
        name: "grass",
      },
    },
    {
      type: {
        name: "poison",
      },
    },
  ],
  abilities: [
    {
      ability: {
        name: "overgrow",
      },
    },
    {
      ability: {
        name: "chlorophyll",
      },
    },
  ],
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
};
export default {
  title: "cards/InfoCard",
  component: InfoCard,
  parameters: {
    layout: "fullscreen",
  },
};

export const Basic = () => (
  <div
    style={{
      margin: 20,
    }}
  >
    <InfoCard pokemonData={pokemonData} />
  </div>
);
