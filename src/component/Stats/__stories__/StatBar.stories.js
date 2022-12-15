import React from "react";

import StatBar from "../StatBar";

export default {
  title: "Stats/StatBar",
  component: StatBar,
  parameters: {
    layout: "fullscreen",
  },
};

const DefaultBar = ({ value }) => (
  <div style={{ padding: 20 }}>
    <StatBar value={value} />
  </div>
);

export const BarWithLessThan20Per = () => <DefaultBar value={11} />;
export const BarWithLessThan40Per = () => <DefaultBar value={51} />;
export const BarWithLessThan60Per = () => <DefaultBar value={100} />;
export const BarWithLessThan80Per = () => <DefaultBar value={200} />;
export const BarWithLessThan100Per = () => <DefaultBar value={255} />;
