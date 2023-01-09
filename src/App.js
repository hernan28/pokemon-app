import DetailsButton from "./component/buttons/DetailsButton";
import PokemonStats from "./component/Stats/PokemonStats";
import useFetch from "react-fetch-hook";

const testStatsList = [
  { name: "Hp", value: 45 },
  { name: "Attack", value: 49 },
  { name: "Defense", value: 49 },
  { name: "Special Attack", value: 65 },
  { name: "Special Defense", value: 65 },
  { name: "Speed", value: 45 },
];

function App() {
  const { data } = useFetch("https://pokeapi.co/api/v2/pokemon");
  console.log(data); // TODO: remove this, just for current testing purposes
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "10% 90%",
        height: "100vh",
      }}
    >
      {/* Container for left navigation button bar, borderCss just for testing purposes */}
      <div style={{ backgroundColor: "white", borderRight: "1px solid black" }}>
        {/* This buttons are just for test, change when left navigation bar is done */}
        <DetailsButton />
        <DetailsButton />
        <DetailsButton />
      </div>
      {/* Container for pokemon rows */}
      <div style={{ backgroundColor: "white" }}>
        {/* This PokemonStats are just for test, real list is done */}
        <PokemonStats statsList={testStatsList} />
        <PokemonStats statsList={testStatsList} />
        <PokemonStats statsList={testStatsList} />
      </div>
    </div>
  );
}

export default App;
