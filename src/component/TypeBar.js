import React from "react";
import TypeButton from "./buttons/TypeButton";

const TypeBar = ({ typeList }) => (
  <div
    style={{
      backgroundColor: "white",
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 10,
    }}
  >
    <TypeButton typeName="all" />
    {typeList.map((type) => (
      <TypeButton key={type.name} typeName={type.name} />
    ))}
  </div>
);
export default TypeBar;
