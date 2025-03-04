import { useReducer, useState } from "react";

const Counter = () => {
  function reducer(state, action) {
    // console.log(state);
    //in useReducer, we devide our logic and UI part.
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
        return state;
    }
  }

  //const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 }); // reducer is a function that updates the current.

  //   const plus = () => {
  //     setCount((prevcount) => prevcount + 1);
  //   };
  //   const minus = () => {
  //     setCount((prevcount) => prevcount - 1);
  //   };

  return (
    // <div>
    //   <hr />
    //   <button onClick={plus}>plus</button>
    //   <p>{count}</p>
    //   <button onClick={minus}>minus</button>
    // </div>

    <div>
      <button onClick={() => dispatch({ type: "increment" })}>plus</button>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "decrement" })}>minus</button>
      <button onClick={() => dispatch({ type: "reset" })}> reset </button>
    </div>
  );
};
export default Counter;
