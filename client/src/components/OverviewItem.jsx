import React from "react";

const OverviewItem = ({ image, name, value }) => {
  return (
    <article className="flex flex-col w-[500px] bg-[#f6f6f6] px-4 py-4 justify-between">
      <div className="flex justify-between items-center">
        <img src={image} alt={name} className="w-[70px] h-[70px]" />
        <p className="text-center text-4xl font-extrabold text-[#08590b] pr-8">{name}</p>
      </div>
      <div className="self-end text-[100px] font-extrabold text-[#3b3b3b]">{value}</div>
    </article>
  );
};

export default OverviewItem;
