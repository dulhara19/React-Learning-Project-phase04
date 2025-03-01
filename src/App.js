import UseStateFunction from "./components/UseState";
import UseEffectFunction from "./components/UseEffect";
import UseContext from "./components/UseContex";
import NewFunction from "./components/UseContextnew";
import Mycomponent from "./components/UseRef";

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
      <Mycomponent />
    </div>
  );
}

export default App;
