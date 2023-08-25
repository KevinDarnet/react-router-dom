import React from "react";

export default function FirstTitle({ title }) {
  return (
    <>
      <h1 className="text-4xl text-white font-medium flex justify-center p-6">
        {title}
      </h1>
    </>
  );
}
