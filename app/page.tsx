import HeroText from "./components/HeroText";
import HeroImage from "./components/HeroImage";
import { Bag, Logo, Search } from "./components/Icons";
import CategoryBox from "./components/CategoryBox";
import CarouselContainer from "./components/CarouselContainer";
import RevealText from "./components/RevealText";
import { menshoes, spotlights, womenshoes } from "./data/ShoeImages";
import Image from "next/image";
import FeaturedBackground from "./components/FeaturedBackground";

export default function Home() {
  return (
    <div className="font-sans select-none">
      <main>
        <section className="w-full px-16 py-6 fixed top-0 flex items-center justify-between z-50">
          <Logo />
          <div className="flex gap-2">
            <div className="w-10 h-10 bg-gray-200 rounded-sm flex items-center justify-center">
              <Search className="text-2xl" />
            </div>
            <div className="w-10 h-10 bg-gray-200 rounded-sm flex items-center justify-center">
              <Bag className="text-2xl" />
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center">
          <HeroText />
          <HeroImage />
        </section>
        <section className="pt-32">
          <div className="w-full px-16 pb-6 flex justify-between">
            <RevealText text="Classics&nbsp;Spotlight" />
            <div className="px-6 py-2 bg-gray-200 rounded cursor-pointer transition-all duration-500 hover:bg-gray-900 hover:text-white">FIND MORE</div>
          </div>
          <CarouselContainer carousels={spotlights} />
        </section>
        <section className="pt-32">
          <div className="w-full px-16 pb-6 flex justify-between">
            <RevealText text="Shop&nbsp;Men" />
          </div>
          <div className="flex gap-[2px]">
            <CategoryBox imgUrl="/images/men-casual.jpg" imgText="Men's Casual" />
            <CategoryBox imgUrl="/images/men-sports.jpg" imgText="Men's Sports" />
          </div>
        </section>
        <section className="pt-12">
          <div className="w-full px-16 pb-6 flex justify-end">
            <div className="px-6 py-2 bg-gray-200 rounded cursor-pointer transition-all duration-500 hover:bg-gray-900 hover:text-white">FIND MORE</div>
          </div>
          <CarouselContainer carousels={menshoes} />
        </section>
        <section className="pt-32">
          <div className="w-full px-16 pb-6 flex justify-between">
            <RevealText text="Shop&nbsp;Women" />
          </div>
          <div className="flex gap-[2px]">
            <CategoryBox imgUrl="/images/women-casual.jpg" imgText="Women's Casual" />
            <CategoryBox imgUrl="/images/women-sports.jpg" imgText="Women's Sports" />
          </div>
        </section>
        <section className="pt-12">
          <div className="w-full px-16 pb-6 flex justify-end">
            <div className="px-6 py-2 bg-gray-200 rounded cursor-pointer transition-all duration-500 hover:bg-gray-900 hover:text-white">FIND MORE</div>
          </div>
          <CarouselContainer carousels={womenshoes} />
        </section>
        <section className="mt-28 flex flex-col justify-start items-center overflow-hidden">
          <div className="w-full">
            <Image className="w-full" src="/images/vini-poster.jpeg" width={1500} height={1500} alt="Vini Poster" />
          </div>
          <FeaturedBackground />
        </section>
        <section className="h-screen"></section>
      </main>
      <footer></footer>
    </div>
  );
}
