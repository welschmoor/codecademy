
import React, { useState, useReducer } from "react"

const initialState = {
    firstCounter: 0,
    secondCounter: 0,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - 1 }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - 1 }
        case 'reset':
            return initialState
        default:
            return state
    }
}

function Counter2() {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <React.Fragment>
            <div>{count.firstCounter}</div>
            <div>{count.secondCounter}</div>
            <button onClick={() => dispatch({type: 'increment', value: 2})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement', value: 2})}>Decrement</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
            <button onClick={() => dispatch({type: 'increment2'})}>increment2</button>
            <button onClick={() => dispatch({type: 'decrement2'})}>Decrement2</button>
        </React.Fragment>
    )
}

export default Counter2