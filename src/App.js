import TypeBar from "./component/TypeBar";
import useFetch from "react-fetch-hook";
import PokemonDisplay from "./component/PokemonDisplay";
import { useEffect, useState } from "react";

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
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "min-content 90%",
        height: "100vh",
      }}
    >
      {/* Container for left navigation button bar, borderCss just for testing purposes */}
      <div style={{ backgroundColor: "white" }}>
        {/* This buttons are just for test, change when left navigation bar is done */}
        <TypeBar typeList={typeDataList} action={setTypeUrl} />
      </div>
      {/* Container for pokemon rows */}
      <div style={{ backgroundColor: "white" }}>
        {/* This PokemonStats are just for test, real list is done */}
        <PokemonDisplay url={typeUrl} />
      </div>
    </div>
  );
};

export default App;
