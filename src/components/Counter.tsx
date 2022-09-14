import React, {useState} from 'react';
import cl from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div className={cl.btn}>
            <button onClick={() => setCount(count + 1)}>increment</button>
            <button onClick={() => setCount(count - 1)}>decrement</button>
            <h1>{count}</h1>
        </div>
    );
};

export default Counter;
