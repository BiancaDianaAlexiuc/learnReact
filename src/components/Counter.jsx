import React from "react";

const Counter = ({ count, increment, decrement }) => {
  return (
    <div className="counter">
      <button onClick={decrement} className="minus">
        -
      </button>
      <span className="value">{count}</span>
      <button onClick={increment} className="plus">
        +
      </button>
    </div>
  );
};

export default Counter;
