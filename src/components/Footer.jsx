import React from "react";
import FirstTitle from "./FirstTitle";
export default function Nav({ title }) {
  return (
    <div className="rounded border-2 border-slate-800 p-4 gap-5 flex justify-center bg-slate-950">
      <p className="text-white">{title}</p>
    </div>
  );
}
