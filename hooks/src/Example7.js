import React, { useReducer } from "react";

function init(initialCount) {
  return {count: initialCount};
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

export function Example7(props) {
  const [state, dispatch] = useReducer(reducer, props.initialCount, init);
  return (
    <>
      <h1>Example7</h1>
      Count: {state.count}
      <button
        onClick={() => dispatch({type: 'reset', payload: props.initialCount})}>

        Reset
      </button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}