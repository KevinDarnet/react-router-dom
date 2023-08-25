import React from "react";
import InfoCard from "./InfoCard";
import Points from "./Points";
import ImgCard from "./ImgCard";

export default function Card({ text, description, img }) {
  return (
    <div className="bg-slate-800	 w-9/12 lg:w-1/4  md:w-1/3 sm:w-7/12 min-h-60 border-solid border-black rounded-lg p-2 font-medium flex  items-center flex-col justify-between">
      <div className="w-full flex flex-col justify-center items-center">
        <ImgCard img={img} />
        <div className="flex flex-col items-center justify-center">
          <InfoCard info={text} />
          <InfoCard info={description} />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Points />
      </div>
    </div>
  );
}
