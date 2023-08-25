import React from "react";

export default function Nav() {
  return (
    <div className="p-4 gap-5 flex justify-center bg-slate-950">
      <a
        className="text-white border-solid	border-gray-300	border-2 p-1 rounded-md	"
        href="#"
      >
        Home
      </a>
      <a
        className="text-white border-solid	border-gray-300	border-2 p-1 rounded-md	"
        href="#"
      >
        About
      </a>
      <a
        className="text-white border-solid	border-gray-300	border-2 p-1 rounded-md	"
        href="#"
      >
        Contact
      </a>
    </div>
  );
}
