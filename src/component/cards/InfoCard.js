import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import pokemonColors from "../../consts/pokemonColors";
import useFetch from "react-fetch-hook";
import { titleCase } from "../../utils";

const Card = styled.div`
  height: 200px;
  width: 300px;
  border: 1px solid white;
  border-radius: 10px;
  font-family: Rubik, sans-serif;
  font-weight: bold;
  font-size: 13px;
  position: relative;
  background-color: white;
  box-shadow: 10px 10px 60px #e9e8e7;
`;

const CirculeHolder = styled.div`
  position: relative;
  height: 20%;
  width: 100%;
  font=family: Rubik, sans-serif;
  font-weight: bold;
  font-size: 13px;
`;

const Circule = styled.div`
  display: flex;
  height: 55px;
  justify-content: center;
  position: absolute;
  width: 55px;
  top: -25%;
  left: ${(props) => props.left ?? "unset"};
  right: ${(props) => props.right ?? "unset"};
  border: 1px solid white;
  border-radius: 100px;
  z-index: 2;
  background-color: white;
  box-shadow: 10px 10px 60px #e9e8e7;
`;

const CirculeContent = styled.div`
  display: flex;
  align-items: center;
  margin: 15%;
`;

const CardTopHolder = styled.div`
  display: flex;
  height: 50%;
  width: 100%;
  font-family: Rubik, sans-serif;
  font-weight: bold;
  color: #e9e8e7;
  font-size: 80px;
  justify-content: center;
  position: absolute;
  top: 0%;
  z-index: 1;
`;

const CardSimpleText = styled.div`
  display: flex;
  justify-content: center;
  height: 10%;
  width: 100%;
  font-family: Rubik, sans-serif;
  color: #66625c;
  font-weight: bold;
  font-size: ${(props) => props.fontSize};
  position: absolute;
  top: ${(props) => props.top};
  align-items: center;
`;

const TextDividerDot = styled.div`
  background-color: #a39f99;
  border-radius: 50%;
  height: 5px;
  margin-right: 5px;
  width: 5px;
`;

const InfoCard = ({ pokemonData }) => {
  const [runGetData, setRunGetData] = useState(false);
  const { data: pokemonGenus } = useFetch(pokemonData?.species?.url, {
    depends: [runGetData, !!pokemonData?.species?.url],
  });

  const pokemonNumber = `#${pokemonData?.species?.url
    ?.split("/")[6]
    .toString()
    .padStart(3, "0")}`;

  useEffect(() => {
    if (runGetData) return;
    setRunGetData(true);
  }, [runGetData]);

  return (
    <Card>
      <CirculeHolder>
        <Circule left="-5%">
          <CirculeContent>
            {(pokemonData?.height * 0.1).toFixed(1)}m
          </CirculeContent>
        </Circule>
        <Circule right="-5%">
          <CirculeContent>
            {(pokemonData?.weight * 0.1).toFixed(1)}kg
          </CirculeContent>
        </Circule>
      </CirculeHolder>
      <CardTopHolder>
        {pokemonNumber}
        <div
          style={{
            position: "absolute",
          }}
        >
          <img
            src={pokemonData?.sprites?.front_default}
            alt={pokemonData?.name}
          ></img>
        </div>
      </CardTopHolder>
      <CardSimpleText top="50%" fontSize="20px">
        {titleCase(pokemonData?.name)}
      </CardSimpleText>
      <CardSimpleText top="60%" fontSize="13px">
        {pokemonGenus?.genera[7]?.genus}
      </CardSimpleText>
      <CardSimpleText top="70%" fontSize="13px">
        {pokemonData?.types?.map(({ type: { name } }, index, originalArray) => (
          <Fragment key={name}>
            <span
              style={{
                marginRight: 5,
                color: pokemonColors[name],
                textTransform: "uppercase",
              }}
            >
              {name}
            </span>
            {index !== originalArray.length - 1 && <TextDividerDot />}
          </Fragment>
        ))}
      </CardSimpleText>
      <CardSimpleText top="80%" fontSize="13px">
        {pokemonData?.abilities?.map(({ ability: { name }, is_hidden }) => (
          <span
            key={`${name}-${pokemonData?.name}-${is_hidden}}`}
            style={{
              marginRight: 5,
            }}
          >
            {titleCase(name)}
          </span>
        ))}
      </CardSimpleText>
    </Card>
  );
};

export default InfoCard;
