import React from "react";
import TypeButton from "./buttons/TypeButton";

const TypeBar = ({ typeList, action }) => (
  <div
    style={{
      backgroundColor: "white",
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 10,
    }}
  >
    <TypeButton typeName="all" onClick={() => action(null)} />
    {typeList &&
      typeList.map((type) => (
        <TypeButton
          key={type.name}
          typeName={type.name}
          onClick={() => action(type.url)}
        />
      ))}
  </div>
);
export default TypeBar;
