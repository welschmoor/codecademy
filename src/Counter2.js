
import React, { useState, useReducer } from "react"

const initialState = {
    firstCounter: 0,
}

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return { state.firstCounter + 3 }

        case 'decrement':
            return { state.firstCounter - 3 }
        case 'reset':
            return initialState
        default:
            return state
    }
}


function Counter2() {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        < >
            <div>{count.firstCounter}</div>
            <div>{count.firstCounter}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Increment</button>
            <button onClick={() => dispatch('reset')}>Increment</button>

        </>
    )
}

export default Counter2