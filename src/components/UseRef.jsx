import { useState, useEffect, useRef } from "react";

function Mycomponent() {
  //----CREATING USE STATE----
  //let [number, setNumber] = useState(0);

  const ref = useRef(0);
  console.log(ref); // when react is on strict mode,this will automatically print twice in console

  useEffect(() => {
    console.log("component rendered");
  });

  function handleClick() {
    //----USIN USESTATE UPDATE THE STATE----
    // setNumber((n) => n + 1);
    // console.log(number);

    //----REF OBJ INCREASE VALUE BY ONE-----
    // ref.current = ref.current + 1;
    // console.log(ref.current);

    ref.current.focus();
    ref.current.style.background = "red";
  }
  return (
    <div>
      <hr /> <h3>----useRef----</h3>
      <button onClick={handleClick}>click to check useRef</button>
      <input ref={ref} />
    </div>
  );
}
export default Mycomponent;
