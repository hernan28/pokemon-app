import React from "react";

const InfoCard = ({ pokemonData }) => {
  return (
    <div
      style={{
        height: 200,
        width: 200,
        border: "1px solid black",
        borderRadius: 10,
        fontFamily: "Rubik,sans-serif",
        fontWeight: "bold",
        fontSize: "13px",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "relative",
          height: "20%",
          width: "100%",
          fontFamily: "Rubik,sans-serif",
          fontWeight: "bold",
          fontSize: "13px",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "100%",
            position: "absolute",
            width: "20%",
            top: "-25%",
            left: "-5%",
            border: "1px solid black",
            borderRadius: 100,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "15%",
            }}
          >
            {pokemonData.height}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100%",
            position: "absolute",
            width: "20%",
            top: "-25%",
            right: "-5%",
            border: "1px solid black",
            borderRadius: 100,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "15%",
            }}
          >
            {pokemonData.weight}
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          height: "50%",
          width: "100%",
          fontFamily: "Rubik,sans-serif",
          fontWeight: "bold",
          fontSize: "13px",
          justifyContent: "center",
          position: "absolute",
          top: "0%",
        }}
      >
        <img
          src={pokemonData.sprites.front_default}
          alt={pokemonData.name}
        ></img>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "10%",
          width: "100%",
          fontFamily: "Rubik,sans-serif",
          fontWeight: "bold",
          fontSize: "13px",
          position: "absolute",
          top: "50%",
        }}
      >
        {pokemonData.name}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "10%",
          width: "100%",
          fontFamily: "Rubik,sans-serif",
          fontWeight: "bold",
          fontSize: "13px",
          position: "absolute",
          top: "60%",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "10%",
          width: "100%",
          fontFamily: "Rubik,sans-serif",
          fontWeight: "bold",
          fontSize: "13px",
          position: "absolute",
          top: "70%",
        }}
      >
        {pokemonData.types.map(({ type: { name } }) => (
          <span
            style={{
              marginRight: 5,
              textTransform: "uppercase",
            }}
          >
            {name}
          </span>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "10%",
          width: "100%",
          fontFamily: "Rubik,sans-serif",
          fontWeight: "bold",
          fontSize: "13px",
          position: "absolute",
          top: "80%",
        }}
      >
        {pokemonData.abilities.map(({ ability: { name } }) => (
          <span
            style={{
              marginRight: 5,
            }}
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default InfoCard;
