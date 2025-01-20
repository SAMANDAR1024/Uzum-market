import { useEffect, useState } from "react";
import Yulduz from "../assets/yulduz.png";
import Korzinka from "../assets/korzinka.svg";

function Input() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((Response) => Response.json())
      .then((data) => {
        setData(data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);
  return (
    <div className="w-[450px] z-30 overflow-auto absolute top-[40px]  rounded-lg p-4 left-[0px] h-[540px] bg-slate-100">
      <h1 className="font-bold text-2xl">Tavsiya Etamiz !</h1>
      <div className="flex flex-wrap gap-5 justify-center mt-5 ">
        {data.slice(3, 49).map((e) => {
          return (
            <div className="w-44  bg-slate-200  rounded-2xl">
              <img src={e.images} alt="" />
              <div className="p-3 ">
                <p>
                  {e.title}
                </p>
                <div className="flex items-center gap-1">
                  <img src={Yulduz} alt="" />
                  <span className="text-[#8B8E99]">4.9 (4092 sharsh)</span>
                </div>
                <button className="bg-yellow-300 rounded-lg p-1">
                {e.price}.000 so'm/oyiga{" "}
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
          );
        })}
      </div>
    </div>
  );
}
export default Input;
