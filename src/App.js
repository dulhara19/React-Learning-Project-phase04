
import React, {useState} from 'react';



function App() {

  const [count, setCount] = useState(0);

  var x=0;


  const counter =()=>{
    x= x+1;
    setCount(count+1);
  }

  const reducer =()=>{
    setCount(count-1);
  }

  return (
    <div className="App">
      <p> without useState :{x}</p>
      <p> with useState :{count}</p>
      <button onClick={counter}>ADD</button>
      <button onClick={reducer}>REDUCE</button>
    </div>
  );
}

export default App;
