import React, { useState } from "react";
import hexToRgba from "hex-to-rgba";
import pokemonColors from "../../consts/pokemonColors";
import styled from "styled-components";

const TypeButtonStyle = styled.button`
  border-radius: 5px;
  background-color: ${(props) => props.getBackroundColor()};
  color: ${(props) => (props.active ? "white" : props.mainColor)};
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  font-size: 13px;
  padding: 10px;
  margin-top: 10px;
  letter-spacing: 0.5;
  width: 100%;
  transition: 0.5s;
`;

const TypeButton = ({ typeName, onClick, active }) => {
  const [isHover, setIsHover] = useState(false);

  const mainColor = pokemonColors[typeName] ?? "#000000";

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const getBackroundColor = () => {
    let color;
    if (!active) {
      color = isHover ? hexToRgba(mainColor, 0.3) : "#f8f7f7";
    } else {
      color = mainColor;
    }
    return color;
  };

  return (
    <TypeButtonStyle
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      getBackroundColor={getBackroundColor}
      mainColor={mainColor}
      active={active}
    >
      {typeName}
    </TypeButtonStyle>
  );
};

export default TypeButton;
