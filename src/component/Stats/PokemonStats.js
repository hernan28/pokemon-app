import React from "react";
import StatBar from "./StatBar";

const Row = ({ statName, statValue }) => (
  <tr>
    <td align="right">{statName}</td>
    <td
      style={{
        paddingLeft: "20px",
        paddingRight: "20px",
        color: "black",
        fontWeight: "lighter",
      }}
    >
      {statValue}
    </td>
    <td width={180}>
      <StatBar value={statValue} />
    </td>
  </tr>
);

const PokemonStats = ({ statsList }) => (
  <table
    style={{
      color: "gray",
      fontFamily: "Rubik,sans-serif",
      fontWeight: "bold",
      fontSize: "13px",
    }}
    cellPadding="3px"
  >
    {statsList.map((stat) => (
      <Row key={stat.name} statName={stat.name} statValue={stat.value} />
    ))}
  </table>
);
export default PokemonStats;
