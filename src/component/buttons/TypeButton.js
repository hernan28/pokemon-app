import React, { useState } from "react";
import hexToRgba from "hex-to-rgba";
import pokemonColors from "../../consts/pokemonColors";

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
    <button
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        borderRadius: 5,
        backgroundColor: getBackroundColor(),
        color: active ? "white" : mainColor,
        textTransform: "uppercase",
        fontWeight: "bold",
        border: "none",
        fontSize: 13,
        padding: "10px",
        marginTop: "10px",
        letterSpacing: 0.5,
        width: "100%",
        transition: "0.5s",
      }}
    >
      {typeName}
    </button>
  );
};

export default TypeButton;
