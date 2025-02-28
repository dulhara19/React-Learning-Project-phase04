import { useState } from "react";

const UseStateFunction = () => {
  //-----USASTATE HOOK------
  const [count, setCount] = useState(0);

  const counter = () => {
    setCount(count + 1);
  };

  const reducer = () => {
    setCount(count - 1);
  };

  const passvalue = () => {
    return count;
  };

  return (
    <div>
      <h2>---useState---</h2>
      <button onClick={counter}>plus</button>
      <button onClick={reducer}>minus</button>
      <button onClick={passvalue}>pass count value to useEffect</button>

      <p>use state value : {count}</p>
    </div>
  );
};

export default UseStateFunction;
