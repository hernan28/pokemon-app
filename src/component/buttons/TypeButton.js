import React from "react";
import pokemonColors from "../../consts/pokemonColors";

const TypeButton = ({ typeName }) => {
  return (
    <button
      style={{
        borderRadius: 5,
        backgroundColor: "#f8f7f7",
        color: pokemonColors[typeName],
        textTransform: "uppercase",
        fontWeight: "bold",
        border: "none",
        fontSize: 13,
        padding: "10px",
        marginTop: "10px",
        letterSpacing: 0.5,
        width: "100%",
      }}
    >
      {typeName}
    </button>
  );
};

export default TypeButton;
