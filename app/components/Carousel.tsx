"use client";

import { useState } from "react";

export default function Carousel({ imgUrl, hoverUrl, name, price }: { imgUrl: string; hoverUrl?: string; name?: string; price?: string }) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="pl-4 md:pl-10 flex-auto cursor-pointer active:cursor-grab"
      style={{ transform: "translate3d(0,0,0)" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{ backgroundImage: hoverUrl ? (!isHovered ? `url(${imgUrl})` : `url(${hoverUrl})`) : `url(${imgUrl})` }}
        className={`w-[25rem] h-[25rem] bg-cover bg-center transition-all duration-200 bg-stone-100/60`}
      ></div>
      {name && (
        <div className="pt-2 flex flex-col text-center text-sm select-none">
          <p>{name}</p>
          <p>{price}</p>
        </div>
      )}
    </div>
  );
}
