import { useState } from "react";
import uzb from "./assets/uzb.svg";
import lakatsiya from "./assets/lakatsiya.svg";
import logo from "./assets/uzumMarket.svg";
import btnDrop from "./assets/btn-drop.svg";
import poisk from "./assets/poisk.svg";
import user from "./assets/user.svg";
import layk from "./assets/layk.svg";
import savat from "./assets/savat.svg";
import gul from "./assets/gul.svg";
import x from "./assets/x.svg";
import Katalog from "./Katalog";
import Input from "./companents/InpuT";
import Carusel from "./companents/Carusel";
import Buttons from "./companents/buttons/Buttons";
import Isitgichlar from "./companents/buttons/Isitgichlar";
import Texnika from "./companents/buttons/Texnika";
import Avto from "./companents/buttons/Avto";
import Garderob from "./companents/buttons/Garderob";
import Cards from "./companents/Cards";
import CardMap from "./companents/CardMap";
function App() {
  const items = [
    {
      image:
        " https://image.winudf.com/v2/image1/dXoudXp1bS5hcHBfYmFubmVyXzE2NjcxOTk5NTRfMDY5/banner.jpg?fakeurl=1",
      alt: "Slide 1",
    },
    {
      image:
        " https://image.winudf.com/v2/image1/dXoudXp1bS5hcHBfYmFubmVyXzE2NjcxOTk5NTRfMDY5/banner.jpg?fakeurl=1",
      alt: "Slide 2",
    },
    {
      image:
        " https://image.winudf.com/v2/image1/dXoudXp1bS5hcHBfYmFubmVyXzE2NjcxOTk5NTRfMDY5/banner.jpg?fakeurl=1",
      alt: "Slide 3",
    },
  ];
  return (
    <>
      <Uzum>
        <Row />
        <TwoRow />
        <ThreeRow />
        <Carusel items={items} />
        <Buttons>
          <Isitgichlar />
          <Texnika />
          <Avto />
          <Garderob />
        </Buttons>
        <CardMap />
      </Uzum>
    </>
  );
}

function Uzum({ children }) {
  return <div className="container w-[1519px] mx-auto">{children}</div>;
}

function Row() {
  return (
    <div className="flex items-center justify-between mb-2 py-2  bg-gray-200 px-32">
      <Location />
      <CenterText />
      <From />
    </div>
  );
}

function Location() {
  return (
    <div className="flex items-center gap-2">
      <img src={lakatsiya} alt="" />
      <div className="flex items-center gap-5 ">
        <p>
          Shahar: <b className=" font-bold underline">Toshkent</b>
        </p>
        <p>Topshirish punktlari</p>
      </div>
    </div>
  );
}

function CenterText() {
  return (
    <div>
      <p className="text text-gray-400">
        Buyurtmangizni 1 kunda bepul yetkazib beramiz!
      </p>
    </div>
  );
}
function From() {
  const [lang, setLang] = useState(false);
  const [lang2, setlang2] = useState("ozb");
  return (
    <div className="flex items-center gap-5">
      <div className="flex items-center gap-3 text-gray-500">
        <p>Savol-javoblar</p>
        <p>Buyurtmalarim</p>
      </div>
      <div
        className="lang-box relative"
        onClick={() => {
          lang ? setLang(false) : setLang(true);
        }}
      >
        <div className="flex items-center gap-1 cursor-pointer">
          <img src={uzb} alt="" />
          <p>{lang2 === "ozb" ? "O'zbekcha" : "Ruscha"}</p>
        </div>
        {lang2 === "ozb" ? (
          <div
            className="flex items-center gap-1 w-24 p-2 top-8 cursor-pointer absolute bg-white"
            style={{
              display: lang ? "flex" : "none",
            }}
            onClick={() => {
              setlang2("rus");
            }}
          >
            <img src={uzb} alt="" />
            <span>Russian</span>
          </div>
        ) : (
          <div
            className="flex items-center gap-1 w-24 p-2 top-8 cursor-pointer absolute bg-white"
            style={{
              display: lang ? "flex" : "none",
            }}
            onClick={() => {
              setlang2("ozb");
            }}
          >
            <img src={uzb} alt="" />
            <span>Uzbek</span>
          </div>
        )}
      </div>
    </div>
  );
}

function TwoRow() {
  return (
    <div className="flex items-center justify-between  px-32 mb-3">
      <LogoImg />
      <BtnInputs />
      <Karzina />
    </div>
  );
}

function LogoImg() {
  return <img src={logo} alt="logo" />;
}

function SearchInput() {
  const [inpuT, setInpuT] = useState(false);

  return (
    <div className="flex items-center relative">
      {inpuT ? (
        <div
          onClick={() => setInpuT(false)}
          className="fixed left-0 top-0 w-full h-full bg-black opacity-0 z-10"
        ></div>
      ) : (
        <></>
      )}
      <input
        onClick={(e) => {
          // e.stopPropagation();
          setInpuT(true);
        }}
        className=" w-[450px]   z-10 border-gray-200 border-2  p-2 rounded-lg bg-white "
        type="text"
        placeholder="Mahsulotlar va turkumlar izlash"
      />
      <button
        onClick={() => setInpuT(false)}
        className="w-20 z-20  bg-[#F2F4F7] p-[12px] px-8 absolute right-0  rounded-lg"
      >
        <img src={poisk} alt="" />
      </button>
      {inpuT && <Input />}
    </div>
  );
}

function BtnInputs() {
  const [katalog, setKatalog] = useState(false);
  return (
    <div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => {
            setKatalog(katalog === false ? true : false);
          }}
          className="w-28 flex items-center gap-2 justify-center text-center bg-slate-200 py-2 rounded-xl text-[#7000FF]"
        >
          {katalog === true ? (
            <img src={x} alt="" />
          ) : (
            <img src={btnDrop} alt="" />
          )}
          Katalog
        </button>
        <SearchInput />
      </div>
      {katalog && <Katalog />}
    </div>
  );
}

function Karzina() {
  return (
    <div className="flex items-center gap-5">
      <div className="flex items-center gap-2">
        <img src={user} alt="user" />
        <p>Kirish</p>
      </div>
      <div className="flex items-center">
        <img src={layk} alt="Layk" />
        <p>Saralangan</p>
      </div>
      <div className="flex items-center gap-2">
        <img src={savat} alt="Savat" />
        <p>Savat</p>
      </div>
    </div>
  );
}

function ThreeRow() {
  return (
    <div className="flex items-center justify-between  px-32">
      <TextThree />
      <DropDown />
    </div>
  );
}

function TextThree() {
  return (
    <div className="flex items-center gap-4 text-[#595B66] ">
      <div className="flex items-center gap-1">
        <img src={gul} alt="" />
        <b className=" font-bold">Muddatli to'lov</b>
      </div>
      <p>Elektronika</p>
      <p>Maishiy texnika</p>
      <p>Kiyim</p>
      <p>Poyabzallar</p>
      <p>Aksessuarlar</p>
      <p>Goʻzallik va parvarish</p>
      <p>Salomatlik</p>
      <p>Uy-roʻzgʻor buyumlari</p>
      <p>Qurilish va taʼmirlash</p>
    </div>
  );
}
function DropDown() {
  return (
    <div>
      <p>Yana ▽</p>
    </div>
  );
}

export default App;
