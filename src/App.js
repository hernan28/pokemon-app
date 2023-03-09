import TypeBar from "./component/TypeBar";
import useFetch from "react-fetch-hook";
import PokemonDisplay from "./component/PokemonDisplay";
import ContainerWithBgColor from "./component/commons/ContainerWithBgColor";
import { useEffect, useState } from "react";
import styled from "styled-components";

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: min-content 90%;
  height: 100vh;
`;

const App = () => {
  const [typeUrl, setTypeUrl] = useState(null);
  const [runGetData, setRunGetData] = useState(false);
  const { data: { results: typeDataList } = {} } = useFetch(
    "https://pokeapi.co/api/v2/type",
    { depends: [runGetData] }
  );

  useEffect(() => {
    if (runGetData) return;
    setRunGetData(true);
  }, [runGetData]);
  return (
    <AppWrapper>
      <ContainerWithBgColor bgColor="white">
        <TypeBar typeList={typeDataList} action={setTypeUrl} />
      </ContainerWithBgColor>
      <ContainerWithBgColor bgColor="white">
        <PokemonDisplay url={typeUrl} />
      </ContainerWithBgColor>
    </AppWrapper>
  );
};

export default App;
