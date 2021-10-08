

import React, { useState, useEffect } from "react"



function Mousecrap() {
  const [x, setX] = useState(null)
  const [y, setY] = useState(null)


  useEffect(()=> {
    const moveHandler = (e)=> {
      setY(e.clientY)
      setX(e.clientX)
    }
    window.addEventListener('mousemove', moveHandler)

    return () => {window.removeEventListener('mousemove', moveHandler); console.log('unmouned')}
  }, [])

  return (
    <div className="App">

     <div> {x} {y}</div>
    </div>
  );
}

export default Mousecrap;
