
import React, { useState, useReducer } from "react"

const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}


function Counter1() {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        < >
            <div>{count}</div>
<button onClick={()=> dispatch('increment')}>Increment</button>
<button onClick={()=> dispatch('decrement')}>Increment</button>
<button onClick={()=> dispatch('reset')}>Increment</button>

        </>
    )
}

export default Counter1