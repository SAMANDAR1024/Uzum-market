import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import yulduz from "../assets/yulduz.svg";
import savat from "../assets/savat.svg";

function About() {
  //   const { id } = useParams();
  const userId = useParams();
  const [about, setAbout] = useState([]);

  useEffect(() => {
    // Ma'lumotni yuklash
    fetch(`https://api.escuelajs.co/api/v1/products/${userId.id}`)
      .then((response) => response.json())
      .then((data) => {
        setAbout(data);
      })
      .catch((e) => {
        console.error("Ma'lumot yuklashda xatolik:", e);
      });
  }, []);

  return (
    <div>
      {about ? (
        <div className="w-full py-10 px-32 ">
          <div className="flex justify-between gap-3">
            <div className="w-[65%]">
              <h1 className="text-4xl mb-4">{about.title}</h1>
              <div className="flex mb-5">
                <div className="flex ">
                  <img className="w-6" src={yulduz} alt="" />
                  <img className="w-6" src={yulduz} alt="" />
                  <img className="w-6" src={yulduz} alt="" />
                  <img className="w-6" src={yulduz} alt="" />
                  <img className="w-6" src={yulduz} alt="" />
                </div>
                <span className="text-[#8B8E99]">
                  4.9 (4092 sharsh) • 100 ta fotosurat • 10000 Buyurtma{" "}
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <div className="flex flex-col gap-3 h-96 overflow-auto">
                  {about.images && about.images.length > 0 ? (
                    <img
                      className="w-28 rounded-lg"
                      src={about.images[0]}
                      alt={about.title}
                    />
                  ) : (
                    <p>Rasm mavjud emas</p>
                  )}
                  {about.images && about.images.length > 0 ? (
                    <img
                      className="w-28 rounded-lg"
                      src={about.images[0]}
                      alt={about.title}
                    />
                  ) : (
                    <p>Rasm mavjud emas</p>
                  )}
                  {about.images && about.images.length > 0 ? (
                    <img
                      className="w-28 rounded-lg"
                      src={about.images[0]}
                      alt={about.title}
                    />
                  ) : (
                    <p>Rasm mavjud emas</p>
                  )}
                  {about.images && about.images.length > 0 ? (
                    <img
                      className="w-28 rounded-lg"
                      src={about.images[0]}
                      alt={about.title}
                    />
                  ) : (
                    <p>Rasm mavjud emas</p>
                  )}
                  {about.images && about.images.length > 0 ? (
                    <img
                      className="w-28 rounded-lg"
                      src={about.images[0]}
                      alt={about.title}
                    />
                  ) : (
                    <p>Rasm mavjud emas</p>
                  )}
                  {about.images && about.images.length > 0 ? (
                    <img
                      className="w-28 rounded-lg"
                      src={about.images[0]}
                      alt={about.title}
                    />
                  ) : (
                    <p>Rasm mavjud emas</p>
                  )}
                  {about.images && about.images.length > 0 ? (
                    <img
                      className="w-28 rounded-lg"
                      src={about.images[0]}
                      alt={about.title}
                    />
                  ) : (
                    <p>Rasm mavjud emas</p>
                  )}
                  {about.images && about.images.length > 0 ? (
                    <img
                      className="w-28 rounded-lg"
                      src={about.images[0]}
                      alt={about.title}
                    />
                  ) : (
                    <p>Rasm mavjud emas</p>
                  )}
                </div>
                {about.images && about.images.length > 0 ? (
                  <img
                    className="w-96 rounded-lg"
                    src={about.images[0]}
                    alt={about.title}
                  />
                ) : (
                  <p>Rasm mavjud emas</p>
                )}
                {about.images && about.images.length > 0 ? (
                  <img
                    className="w-80 h-96 rounded-lg"
                    src={about.images[0]}
                    alt={about.title}
                  />
                ) : (
                  <p>Rasm mavjud emas</p>
                )}
              </div>
              <div>
                <div className="flex items-center gap-2 mt-5">
                  <h2 className="text-2xl font-bold">4.9 </h2>
                  <div className="flex ">
                    <img className="w-6" src={yulduz} alt="" />
                    <img className="w-6" src={yulduz} alt="" />
                    <img className="w-6" src={yulduz} alt="" />
                    <img className="w-6" src={yulduz} alt="" />
                    <img className="w-6" src={yulduz} alt="" />
                  </div>
                  <p className="text-[#8B8E99]">(4092 sharsh)</p>
                </div>

                {/* <p>{about.description}</p>
            <p>Narxi: </p> */}
              </div>
            </div>

            <div className="w-[32%] h-96 p-5 border-gray-300 rounded-xl border">
              <div className="flex items-center gap-2">
                <h2 className="text-3xl font-bold"> {about.price}.000 so'm</h2>
                <del className="text-gray-500">{about.price * 2}.000 so'm</del>
                <button className="bg-slate-200 rounded-2xl px-1 text-[#7000FF]">
                  -47%
                </button>
              </div>
              <button className=" my-2  bg-slate-200 rounded-2xl px-3 text-[#7000FF]">
                Foyda
              </button>
              <div className="w-full flex justify-between items-center gap-2 bg-slate-200 p-2 my-5 rounded-lg">
                <div className="flex items-center gap-2">
                  <button className="bg-yellow-300 p-1 text-sm rounded-lg">
                    Oyiga {about.price / 8}00 So'm
                  </button>
                  <p className="text-sm">muddatli to'lov</p>
                </div>
                <p className="text-2xl">»</p>
              </div>
              <div className="w-full flex items-center gap-3 mb-2">
                <button className="w-[80%] bg-slate-200 p-2 rounded-lg">
                  1 klikda xarid qilish
                </button>
                <button className="w-[20%] bg-slate-200 p-2 rounded-lg">
                  ❤
                </button>
              </div>
              <button className="w-full p-3 bg-[#7000FF] rounded-lg text-white mb-3">
                Savatga Qoshish
              </button>
              <div className="flex gap-2 items-center mb-3">
                <button className="bg-slate-200  px-4 py-1">▷</button>
                <p>3 dona xarid qilish mumkun</p>
              </div>
              <div className="flex gap-2 items-center">
                <button className="bg-red-100 px-3 py-1">
                  <img src={savat} />
                </button>
                <p>3 dona xarid qilish mumkun</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Yuklanmoqda...</p>
      )}
    </div>
  );
}

export default About;
