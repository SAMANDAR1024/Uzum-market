import React, { useEffect, useState } from "react";
import Cards from "./Cards";

function CardMap() {
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
    <>
      <div>
        <div className="max-w-[1440px] m-auto px-24 mt-6">
          <h1 className="font-bold text-3xl">Mashhurlar {">"}</h1>

          <div className="mt-10 flex gap-1 flex-wrap" style={{
            display: 'grid',
            gridTemplateColumns: 'auto auto auto auto auto'
          }}>
            {data.slice(3, 48).map((item, index) => (
              <Cards key={index} product={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CardMap;
