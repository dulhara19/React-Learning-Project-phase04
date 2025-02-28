import { newContext } from "./UseContex";
import { useContext } from "react";

const NewFunction = () => {
  const newmood = useContext(newContext);
  return (
    <div>
      <p> changed new value after useContext : {newmood.sad}</p>
    </div>
  );
};
export default NewFunction;
