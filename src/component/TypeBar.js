import React, { useState } from "react";
import TypeButton from "./buttons/TypeButton";
import styled from "styled-components";

const TypeBarStyle = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  top: 0;
  position: sticky;
  height: 100vmin;
  overflow-y: auto;
`;

const TypeBar = ({ typeList, action }) => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(-1);

  return (
    <TypeBarStyle>
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
    </TypeBarStyle>
  );
};
export default TypeBar;
