import React from 'react'

function Buttons({ children }) {
    return (
      <div className=" flex px-32  items-center  gap-3 mt-5  p-3 rounded-xl  ">
        {children}
      </div>
    );
  }
  export default Buttons;