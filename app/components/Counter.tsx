"use client"; // use client directive is needed for components that use React hooks or state or any interactive features

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col p-4 items-center justify-center">
      <button onClick={() => setCount(count - 1)} className="cursor-pointer">
        Decrement
      </button>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)} className="cursor-pointer">
        Increment
      </button>
    </div>
  );
}
