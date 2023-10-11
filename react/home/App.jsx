import React, { useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>React Counter</h1>
            <h4>Counter: {count}</h4>
            <button onClick={() => setCount(prev => prev + 1)}>Add</button>
        </>
    )
}

export default App;