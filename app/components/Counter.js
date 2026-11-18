"use client";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="w-100 h-100 bg-white rounded-xl shadow-md flex flex-col items-center  justify-center gap-5">
      <h1 className="text-3xl text-black font-bold">Counter</h1>
      <h1 className="text-9xl text-black">{count}</h1>
      <div className="flex gap-5">
        <button
          onClick={() => setCount(count - 1)}
          className="text-7xl w-20 h-20 rounded-full bg-black"
        >
          -
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="text-7xl w-20 h-20 rounded-full bg-black"
        >
          +
        </button>
      </div>
    </div>
  );
};
