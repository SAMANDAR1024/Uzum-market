import React from "react";
import Yulduz from "../assets/yulduz.png";
import Korzinka from "../assets/korzinka.svg";
import { Link } from "react-router";
function Cards({ product }) {
  return (
    <Link to={`/about/${product.id}`}>
      <div className="w-56 bg-slate-200  rounded-2xl">
        <img src={product.images} alt="" />
        <div className="p-3 ">
          <p>{product.title}</p>
          <div className="flex items-center gap-1">
            <img src={Yulduz} alt="" />
            <span className="text-[#8B8E99]">4.9 (4092 sharsh)</span>
          </div>
          <button className="bg-yellow-300 rounded-lg p-1">
            {product.price}.000 so'm/oyiga{" "}
          </button>
          <div className="flex items-center justify-between top-5">
            <div>
              <del className="text-[#8B8E99] ">3 010 000 so'm</del>
              <p>2 499 000 so'm</p>
            </div>
            <img src={Korzinka} alt="" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Cards;
