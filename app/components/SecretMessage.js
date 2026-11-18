"use client";
import { useState } from "react";
export const SecretMessage = () => {
  const [isOn, setIsOn] = useState(true);
  return (
    <div
      className={`w-100 h-100 bg-white rounded-xl shadow-md flex flex-col items-center  justify-center gap-5`}
    >
      <h1 className="text-3xl text-black font-bold">Secret Message</h1>
      <h1 className="text-9xl text-black">{isOn ? "🔒" : "🔓"}</h1>
      <button
        onClick={() => setIsOn(!isOn)}
        className="text-xl w-50 h-20 rounded-lg bg-purple-500 text-white shadow-md font-bold"
      >
        {isOn ? "Reveal Message" : "Hide Message"}
      </button>
      <h1 className="text-xl text-white  font-bold w-70 rounded-lg bg-purple-500 text-center ">
        {isOn ? null : "This is a secret message!"}
      </h1>
    </div>
  );
};
