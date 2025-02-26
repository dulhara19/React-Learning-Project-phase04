import React, { useState } from "react";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [lastcount, setLastCount] = useState(0);

  useEffect(() => {
    // setTimeout(() => {
    //   setCount(count + 1);
    // }, 3000);
    setCount(count + 1);
  }, [lastcount]);

  //-----USASTATE HOOK------
  // const [count, setCount] = useState(0);
  // var x=0;

  // const counter =()=>{
  //   x= x+1;
  //   setCount(count+1);
  // }

  // const reducer =()=>{
  //   setCount(count-1);
  // }
  const newcount = () => {
    setLastCount(lastcount + 1);
  };

  return (
    <div className="App">
      <p> with useState :{count}</p>
      <button onClick={newcount}>click me</button>
      <p> last count value :{lastcount}</p>

      {/* -----USASTATE HOOK------ */}
      {/* <p> without useState :{x}</p>
      <p> with useState :{count}</p>
      <button onClick={counter}>ADD</button>
      <button onClick={reducer}>REDUCE</button> */}
    </div>
  );
}

export default App;
