import UseStateFunction from "./components/UseState";
import UseEffectFunction from "./components/UseEffect";

function App() {
  return (
    <div className="App">
      {/* -----USASTATE HOOK------ */}
      <UseStateFunction />
      <hr />
      {/* -----USEEFFECT HOOK------ */}
      <UseEffectFunction />
    </div>
  );
}

export default App;
