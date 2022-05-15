import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)

    function increm() {
        setCount(count + 1)
    }

    function decrem() {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increm}>Increment</button>
            <button onClick={decrem}>Dicrement</button>
        </div>
    );
}

export default Counter;