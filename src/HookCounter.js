

import React, {useState, useEffect} from "react"


function HookCounter() {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(p => p+1)
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            tick()
        }, 1000)
    }, [])

    return(
        <div>
            {count}
        </div>
    )
}

export default HookCounter