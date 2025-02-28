import { useEffect, useState } from "react";

const UseEffectFunction = () => {
  //-----USEEFFECT HOOK------

  const [newcount, setNewCount] = useState(0);

  const newcounter = () => {
    setNewCount(newcount + 1);
  };

  useEffect(() => {
    // setTimeout(() => {
    //   console.log("setTimeout exectues after time defined : ");
    // },1000);

    const firstFunction = () => {
      console.log("✅ Effect function runs (Component Mounted)");
    };
    firstFunction();

    return () => console.log("❌ Cleanup function runs (Component Unmounted)");
  }, [newcount]);

  return (
    <div>
      <h2>---useEffect---</h2>
      <button onClick={newcounter}>click me to check use effect</button>
      <p>use effect value : {newcount}</p>
    </div>
  );
};
export default UseEffectFunction;

// First Render:

//     firstFunction() runs → ✅ Effect function logs
//     No cleanup function exists yet.

// When newcount updates:

//     The previous effect is cleaned up before running the new one.
//     ❌ Cleanup function runs first (from the last effect instance).
//     Then ✅ Effect function runs again.
