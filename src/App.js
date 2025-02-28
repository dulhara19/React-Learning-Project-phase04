import UseStateFunction from "./components/UseState";
import UseEffectFunction from "./components/UseEffect";
import UseContext from "./components/UseContex";
import NewFunction from "./components/UseContextnew";

function App() {
  return (
    <div className="App">
      {/* -----USASTATE HOOK------ */}
      <UseStateFunction />
      <hr />
      {/* -----USEEFFECT HOOK------ */}
      <UseEffectFunction />
      {/* -----USECONTEXT HOOK------ */}
      <UseContext />
      <NewFunction />
    </div>
  );
}

export default App;
