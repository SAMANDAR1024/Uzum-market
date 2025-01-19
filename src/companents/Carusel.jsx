
// import React, { useState } from "react";

// const Carusel = ({ items }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === items.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? items.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="relative w-full mt-4 max-w-7xl  mx-auto">
  
//       <div className="overflow-hidden rounded-lg">
//         <div
//           className="flex transition-transform duration-500"
//           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//         >
//           {items.map((item, index) => (
//             <div
//               key={index}
//               className="w-full flex-shrink-0"
//               style={{ width: "100%" }}
//             >
//               <img
//                 src={item.image}
//                 alt={item.alt || `Slide ${index + 1}`}
//                 className="w-full h-96 object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </div>


//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none"
//       >
//         ❮
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none"
//       >
//         ❯
//       </button>

    
//       <div className="flex justify-center mt-4 space-x-2">
//         {items.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-3 h-3 rounded-full ${
//               currentIndex === index ? "bg-gray-800" : "bg-gray-400"
//             }`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carusel;
