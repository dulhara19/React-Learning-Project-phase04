import { useContext } from "react";
import { namecontext } from "./UCboxA";

const BoxD = () => {
  const { name, theme, toggle } = useContext(namecontext);
  return (
    <div className="box">
      <h1>box D</h1>
      <p> name : {name}</p>
      <p> theme : {theme}</p>
      <button onClick={toggle}>change theme</button>
    </div>
  );
};
export default BoxD;
