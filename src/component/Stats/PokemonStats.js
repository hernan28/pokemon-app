import React from "react";
import StatBar from "./StatBar";
import styled from "styled-components";

const StatsStyle = styled.td`
  padding-left: 20px;
  padding-right: 20px;
  color: black;
  font-weight: lighter;
`;

const TableStyle = styled.table`
  color: gray;
  font-family: Rubik, sans-serif;
  font-weight: bold;
  font-size: 13px;
`;

const Row = ({ statName, statValue }) => (
  <tr>
    <td align="right">{statName}</td>
    <StatsStyle>{statValue}</StatsStyle>
    <td width={180}>
      <StatBar value={statValue} />
    </td>
  </tr>
);

const PokemonStats = ({ statsList }) => (
  <TableStyle cellPadding="3px">
    <tbody>
      {statsList.map((stat) => (
        <Row key={stat.name} statName={stat.name} statValue={stat.value} />
      ))}
    </tbody>
  </TableStyle>
);
export default PokemonStats;
