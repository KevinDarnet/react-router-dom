import React, { useState } from "react";

export default function Points() {
  let [Points, setPoints] = useState(0);

  const incrementar = () => {
    if (Points <= 9) {
      setPoints(Points + 1);
    }
  };
  const decrementar = () => {
    if (Points > 0) {
      setPoints(Points - 1);
    }
  };
  return (
    <div className="w-full flex justify-center items-center">
      <button
        onClick={incrementar}
        className="rounded-md border-2 border-white text-slate-200 p-1"
      >
        +
      </button>
      <p className="flex justify-center items-center p-1 w-1/3 text-slate-200">
        Points: {Points}
      </p>
      <button
        onClick={decrementar}
        className="rounded-md border-2 border-white text-slate-200 p-2 "
      >
        -
      </button>
    </div>
  );
}
