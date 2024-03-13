import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navitem = ({ to, image, altText, name }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? "bg-[#fdffb7] rounded-md text-[#0cb20e]" : "group"
      }
      to={to}
      end
    >
      <div className="flex justify-center items-center gap-x-4 group-hover:bg-[#fdffb7] px-4 py-2 rounded-md transition-all">
        <img
          src={image}
          alt={altText}
          className="w-[25px] h-[25px] text-[#08590b] group-hover:text-[#3b3b3b] transition-all"
        />
        <p className="text-[#08590b] font-bold text-xl group-hover:text-[#0cb20e] transition-all">
          {name}
        </p>
      </div>
    </NavLink>
  );
};

export default Navitem;
