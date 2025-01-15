import Image from "next/image";

export default function CategoryBox({ imgUrl, imgText }: { imgUrl: string; imgText: string }) {
  return (
    <div className="w-1/2 aspect-[4/3.25] flex items-center justify-center cursor-pointer group">
      <div className="w-full h-full block overflow-hidden">
        <Image className="min-w-full min-h-full flex-shrink-0 object-cover transition-all duration-1000 group-hover:scale-110 brightness-75" src={imgUrl} width={1000} height={1000} alt={imgUrl} />
      </div>
      <div className="absolute flex flex-col items-center justify-center gap-4">
        <p className="text-3xl text-white">{imgText}</p>
        <div className="py-3 px-8 bg-background text-xs rounded-md transition-all duration-1000 group-hover:text-white group-hover:bg-black">DISCOVER</div>
      </div>
    </div>
  );
}
