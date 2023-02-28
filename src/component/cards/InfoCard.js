import React from "react";
import pokemonColors from "../../consts/pokemonColors";
import { titleCase } from "../../utils";
const InfoCard = ({ pokemonData }) => {
  return (
    <div
      style={{
        height: 200,
        width: 250,
        border: "1px solid white",
        borderRadius: 10,
        fontFamily: "Rubik,sans-serif",
        fontWeight: "bold",
        fontSize: "13px",
        position: "relative",
        backgroundColor: "white",
        boxShadow: "10px 10px 60px #e9e8e7",
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
            height: "55px",
            justifyContent: "center",
            position: "absolute",
            width: "55px",
            top: "-25%",
            left: "-5%",
            border: "1px solid white",
            borderRadius: 100,
            zIndex: 2,
            backgroundColor: "white",
            boxShadow: "10px 10px 60px #e9e8e7",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "15%",
            }}
          >
            {(pokemonData.height * 0.1).toFixed(1)}m
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "55px",
            position: "absolute",
            width: "55px",
            top: "-25%",
            right: "-5%",
            border: "1px solid white",
            borderRadius: 100,
            zIndex: 2,
            backgroundColor: "white",
            boxShadow: "10px 10px 60px #e9e8e7",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "15%",
            }}
          >
            {(pokemonData.weight * 0.1).toFixed(1)}kg
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
          color: "#E9E8E7",
          fontSize: "80px",
          justifyContent: "center",
          position: "absolute",
          top: "0%",
          zIndex: 1,
        }}
      >
        {`#${pokemonData.id.toString().padStart(3, "0")}`}
        <div
          style={{
            zIndex: 2,
            position: "absolute",
          }}
        >
          <img
            src={pokemonData.sprites.front_default}
            alt={pokemonData.name}
          ></img>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "10%",
          width: "100%",
          fontFamily: "Rubik,sans-serif ",
          color: "#66625c",
          fontWeight: "bold",
          fontSize: "20px",
          position: "absolute",
          top: "50%",
        }}
      >
        {titleCase(pokemonData.name)}
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
          alignItems: "center",
        }}
      >
        {pokemonData.types.map(({ type: { name } }, index, originalArray) => (
          <>
            <span
              style={{
                marginRight: 5,
                color: pokemonColors[name],
                textTransform: "uppercase",
              }}
            >
              {name}
            </span>
            {index !== originalArray.length - 1 && (
              <div
                style={{
                  backgroundColor: "#a39f99",
                  borderRadius: "50%",
                  height: "5px",
                  marginRight: "5px",
                  width: "5px",
                }}
              ></div>
            )}
          </>
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
            {titleCase(name)}
          </span>
        ))}
      </div>
    </div>
  );
};

export default InfoCard;
