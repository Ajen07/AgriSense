import React from "react";
import { Link } from "react-router-dom";

const Navitem = ({ to, image, altText, name }) => {
  return (
    <li>
      <div className="flex justify-center items-center gap-x-4">
        <img src={image} alt={altText} className="w-[25px] h-[25px] text-[#08590b]" />
        <Link to={to} className="text-[#08590b] font-bold text-xl">{name}</Link>
      </div>
    </li>
  );
};

export default Navitem;
