

import React, { useState, useEffect } from "react"
import Mousecrap from './Mousecrap';
import HookCouter from './HookCounter'
import DataFetching from './DataFetching'
import FirstChild from "./SecondChild.js"

import Counter2 from "./CounterTwo.js"


export const UserContext = React.createContext()
export const CrapContext = React.createContext()


function App() {
  const [show, setShow] = useState(false)

  return (
    <div className="App">
      {/* <button onClick={() => setShow(p=>!p)}>Show/Hide</button>
     {show && <Mousecrap/>} */}
    
    <Counter2 />

    </div>
  );
}

export default App;
