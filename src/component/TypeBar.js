import React, { useState } from "react";
import TypeButton from "./buttons/TypeButton";

const TypeBar = ({ typeList, action }) => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(-1);

  return (
    <div
      style={{
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        top: 0,
        position: "sticky",
        height: "100vmin",
        overflowY: "auto",
      }}
    >
      <TypeButton
        typeName="all"
        active={activeButtonIndex === -1}
        onClick={() => {
          action(null);
          setActiveButtonIndex(-1);
        }}
      />
      {typeList &&
        typeList.map((type, index) => (
          <TypeButton
            key={type.name}
            typeName={type.name}
            active={activeButtonIndex === index}
            onClick={() => {
              action(type.url);
              setActiveButtonIndex(index);
            }}
          />
        ))}
    </div>
  );
};
export default TypeBar;
