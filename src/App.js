import "./App.css";
import UseStateFunction from "./components/UseState";
import UseEffectFunction from "./components/UseEffect";
import UseContext from "./components/UseContex";
import NewFunction from "./components/UseContextnew";
import Mycomponent from "./components/UseRef";
import BoxA from "./components/UCboxA";

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
      <BoxA />
    </div>
  );
}

export default App;
