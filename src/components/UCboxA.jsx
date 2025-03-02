import { useState } from "react";
import BoxB from "./UCboxB";
const BoxA = () => {
  const [name, setName] = useState(null);
  return (
    <>
      <hr />
      <div className="box">
        <h1>box A</h1>
        <p> name : {name}</p>
        <BoxB />
      </div>
    </>
  );
};
export default BoxA;
