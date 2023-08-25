import React from "react";

export default function ImgCard({ img }) {
  return (
    <div className="w-full h-3/4">
      <img className="w-full p-2 h-full" src={img} alt="" />
    </div>
  );
}
