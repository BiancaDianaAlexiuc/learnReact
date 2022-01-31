import React, { useState } from "react";

function Counter(props) {
    const [count, setCount] = useState(0);

    function changeCount(amount) {
        setCount(prevCount => prevCount + amount);
    }

    const decrement = () => {
        if(count <= 0) {
            return;
        } else {
            setCount(count - 1)
        }
    }


    return (
        <div className="counter">
            <button onClick={decrement} className="minus">-</button>
            <span className="value">{count}</span>
            <button onClick={() => changeCount(1)} className="plus">+</button>
        </div>
    )

} 


export default Counter;