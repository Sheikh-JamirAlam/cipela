import HeroText from "./components/HeroText";
import HeroImage from "./components/HeroImage";
import { Bag, Logo, Search } from "./components/Icons";
import CategoryBox from "./components/CategoryBox";
import CarouselContainer from "./components/CarouselContainer";

export default function Home() {
  return (
    <div className="font-sans">
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
            <h1 className="text-3xl">Classics Spotlight</h1>
            <div className="px-6 py-2 bg-gray-200 rounded">FIND MORE</div>
          </div>
          <CarouselContainer />
        </section>
        <section className="py-32">
          <h1 className="px-16 pb-6 text-3xl">Shop Men</h1>
          <div className="flex gap-[2px]">
            <CategoryBox imgUrl="/images/men-casual.jpg" imgText="Men's Casual" />
            <CategoryBox imgUrl="/images/men-sports.jpg" imgText="Men's Sports" />
          </div>
        </section>
        <section className="h-screen"></section>
      </main>
      <footer></footer>
    </div>
  );
}
