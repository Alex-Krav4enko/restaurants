import { useState } from "react";

export const Dish = ({ dish }) => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        if (count < 5) {
            setCount(prevCount => prevCount + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
        }
    };

    return (
        <li key={dish.id}>
            <div>{dish.name}</div>
            <div>
                <button onClick={handleDecrement} disabled={count === 0}>-</button>
                <span>{count}</span>
                <button onClick={handleIncrement} disabled={count === 5}>+</button>
            </div>
        </li>
    );
};
