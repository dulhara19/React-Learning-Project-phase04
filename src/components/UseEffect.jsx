import { useEffect, useState } from "react";

const UseEffectFunction = () => {
  //-----USEEFFECT HOOK------
  const [newcount, setNewCount] = useState(0);

  const newcounter = () => {
    setNewCount(newcount + 1);
  };

  useEffect(() => {
    setTimeout(() => {
      <p> new counte : {newcount}</p>;
      console.log("use effect value after triggered : ", newcount);
    });
  }, []);

  return (
    <div>
      <h2>---useEffect---</h2>
      <button onClick={newcounter}>click me to check use effect</button>
      <p>use effect value : {newcount}</p>
    </div>
  );
};
export default UseEffectFunction;
