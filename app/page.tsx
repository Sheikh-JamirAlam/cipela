import Image from "next/image";
import HeroText from "./components/HeroText";

export default function Home() {
  return (
    <div className="font-sans">
      <main>
        <section className="flex justify-center items-center">
          <HeroText />
          <Image className="absolute" src="/images/hero-shoe.png" width={800} height={800} alt="Hero Shoe" />
        </section>
        <section className="h-screen"></section>
      </main>
      <footer></footer>
    </div>
  );
}
