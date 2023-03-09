import React from "react";
import TypeBar from "../TypeBar";

const TestTypeList = [
  { name: "normal" },
  { name: "fire" },
  { name: "water" },
  { name: "electric" },
  { name: "grass" },
  { name: "ice" },
  { name: "fighting" },
  { name: "poison" },
  { name: "ground" },
  { name: "flying" },
  { name: "psychic" },
  { name: "bug" },
  { name: "rock" },
  { name: "ghost" },
  { name: "dragon" },
  { name: "dark" },
  { name: "steel" },
  { name: "fairy" },
];

export default {
  title: "Buttons/TypeBar",
  component: TypeBar,
  parameters: {
    layout: "fullscreen",
  },
};

export const Basic = () => <TypeBar typeList={TestTypeList} />;
