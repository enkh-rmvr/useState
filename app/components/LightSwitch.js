"use client";
import { useState } from "react";
export const LightSwitch = () => {
  const [isOn, setIsOn] = useState(true);
  return (
    <div
      className={`w-100 h-100 ${isOn ? "bg-gray-800" : "bg-yellow-300"} rounded-xl shadow-md flex flex-col items-center  justify-center gap-5`}
    >
      <h1 className="text-3xl text-black font-bold">Light Switch</h1>
      <h1 className="text-9xl text-black">{isOn ? "🌑" : "💡"}</h1>
      <button
        onClick={() => setIsOn(!isOn)}
        className="text-xl w-40 h-20 rounded-lg bg-yellow-500 text-black shadow-md font-bold"
      >
        {isOn ? "Turn On" : "Turn Off"}
      </button>
    </div>
  );
};
