import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    function changeCount(amount) {
        setCount(prevCount => prevCount + amount);
    }


    return (
        <div className="counter">
            <button onClick={() => changeCount(-1)} className="minus">-</button>
            <span className="value">{count}</span>
            <button onClick={() => changeCount(1)} className="plus">+</button>
        </div>
    )

} 


export default Counter;