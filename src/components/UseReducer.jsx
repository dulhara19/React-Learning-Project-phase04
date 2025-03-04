import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount((prevcount) => prevcount + 1);
  };
  const minus = () => {
    setCount((prevcount) => prevcount - 1);
  };

  return (
    <div>
      <hr />
      <button onClick={plus}>plus</button>
      <p>{count}</p>
      <button onClick={minus}>minus</button>
    </div>
  );
};
export default Counter;
