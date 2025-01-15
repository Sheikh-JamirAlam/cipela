"use client";

export default function Carousel({ imgUrl }: { imgUrl: string }) {
  return (
    <div className="pl-4 md:pl-10 flex-auto" style={{ transform: "translate3d(0,0,0)" }}>
      <div style={{ backgroundImage: `url(${imgUrl})` }} className={`w-[25rem] h-[25rem] bg-cover bg-center`}></div>
    </div>
  );
}
