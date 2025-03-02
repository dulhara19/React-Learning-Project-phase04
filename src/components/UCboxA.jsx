import { createContext, useState } from "react";
import BoxB from "./UCboxB";

export const namecontext = createContext();

const BoxA = () => {
  const [name, setName] = useState("dulhara");
  const [theme, setTheme] = useState("light");

  const toggle = () => {
    setTheme((prevtheme) => (prevtheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <hr />
      <div className="box">
        <h1>box A</h1>
        <p> name : {name}</p>
        <namecontext.Provider value={{ name, theme, toggle }}>
          <BoxB />
        </namecontext.Provider>
      </div>
    </>
  );
};
export default BoxA;
