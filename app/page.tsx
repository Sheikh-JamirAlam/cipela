import HeroText from "./components/HeroText";
import HeroImage from "./components/HeroImage";

export default function Home() {
  return (
    <div className="font-sans">
      <main>
        <section className="flex justify-center items-center">
          <HeroText />
          <HeroImage />
        </section>
        <section className="h-screen"></section>
      </main>
      <footer></footer>
    </div>
  );
}
