import React from "react";
import texnologiya from "../../assets/televizor.svg";

function Garderob() {
  return (
    <button className="w-80 flex items-center gap-3 justify-center text-nowrap hover:scale-105 bg-slate-200 p-3 rounded-xl">
      <img className="w-8 rounded-full" src={texnologiya} alt="" />
      Qishgi Garderob
    </button>
  );
}

export default Garderob;
