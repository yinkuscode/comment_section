import React, { useState } from "react";

const couter = () => {
  const [count, setCount] = useState(10);

  const increment = (amount) => {
    if (typeof amount !== "number") {
    } else {
      setCount(amount);
    }
  };
  return (
    <div>
      <h1>Count value is:{count}</h1>
      <button onClick={() => increment(4)}>increment</button>
    </div>
  );
};

export default couter;
