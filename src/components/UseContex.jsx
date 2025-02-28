import { createContext } from "react";

const moods = {
  happy: "haha",
  sad: "hmm",
};

export const newContext = createContext(moods);

const UseContext = () => {
  return (
    <div>
      <hr />
      <h2>---useContext---</h2>
      <newContext.Provider value={{ happy: "haha", sad: "hmm" }}>
        <p> this value is from : createContext {moods.happy}</p>
      </newContext.Provider>
    </div>
  );
};

export default UseContext;
