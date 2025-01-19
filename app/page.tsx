import Image from "next/image";
import CategoryBox from "./components/CategoryBox";
import CarouselContainer from "./components/CarouselContainer";
import RevealText from "./components/RevealText";
import FeaturedBackground from "./components/FeaturedBackground";
import ShowcaseContainer from "./components/ShowcaseContainer";
import HeroSection from "./components/HeroSection";
import { Facebook, Instagram, Linkedin, Logo } from "./components/Icons";
import { menshoes, spotlights, womenshoes } from "./data/ShoeImages";

export default function Home() {
  return (
    <div className="font-sans select-none">
      <main>
        <HeroSection />
        <section className="pt-[30rem] lg:pt-[20rem] xl:pt-32">
          <div className="w-full px-6 lg:px-16 pb-6 flex justify-between">
            <RevealText text="Classics&nbsp;Spotlight" />
            <div className="px-3 xs:px-4 sm:px-6 py-2 bg-gray-200 rounded text-xs xs:text-sm sm:text-base cursor-pointer transition-all duration-500 hover:bg-gray-900 hover:text-white">FIND MORE</div>
          </div>
          <CarouselContainer carousels={spotlights} />
        </section>
        <section className="pt-32">
          <div className="w-full px-6 lg:px-16 pb-6 flex justify-between">
            <RevealText text="Shop&nbsp;Men" />
          </div>
          <div className="flex flex-col sm:flex-row gap-[1px] sm:gap-[2px]">
            <CategoryBox imgUrl="/images/men-casual.jpg" imgText="Men's Casual" />
            <CategoryBox imgUrl="/images/men-sports.jpg" imgText="Men's Sports" />
          </div>
        </section>
        <section className="pt-12">
          <div className="w-full px-6 lg:px-16 pb-6 flex justify-end">
            <div className="px-3 xs:px-4 sm:px-6 py-2 bg-gray-200 rounded text-xs xs:text-sm sm:text-base cursor-pointer transition-all duration-500 hover:bg-gray-900 hover:text-white">FIND MORE</div>
          </div>
          <CarouselContainer carousels={menshoes} />
        </section>
        <section className="pt-32">
          <div className="w-full px-6 lg:px-16 pb-6 flex justify-between">
            <RevealText text="Shop&nbsp;Women" />
          </div>
          <div className="flex flex-col sm:flex-row gap-[1px] sm:gap-[2px]">
            <CategoryBox imgUrl="/images/women-casual.jpg" imgText="Women's Casual" />
            <CategoryBox imgUrl="/images/women-sports.jpg" imgText="Women's Sports" />
          </div>
        </section>
        <section className="pt-12">
          <div className="w-full px-6 lg:px-16 pb-6 flex justify-end">
            <div className="px-3 xs:px-4 sm:px-6 py-2 bg-gray-200 rounded text-xs xs:text-sm sm:text-base cursor-pointer transition-all duration-500 hover:bg-gray-900 hover:text-white">FIND MORE</div>
          </div>
          <CarouselContainer carousels={womenshoes} />
        </section>
        <section className="mt-28 flex flex-col justify-start items-center">
          <div className="w-full">
            <Image className="w-full brightness-75" src="/images/vini-poster.jpeg" width={1500} height={1500} alt="Vini Poster" />
          </div>
          <FeaturedBackground />
        </section>
        <section className="pb-32 overflow-x-hidden">
          <ShowcaseContainer />
        </section>
      </main>
      <footer className="select-text">
        <div className="relative h-[50rem]" style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
          <div className="relative h-[calc(100vh+50rem)] -top-[100vh]">
            <div className="h-[50rem] sticky top-[calc(100vh-50rem)]">
              <div className="py-4 xs:py-16 px-6 lg:px-40 h-full w-full flex flex-col justify-between bg-dark text-background">
                <div className="flex justify-between items-center flex-wrap md:flex-nowrap">
                  <div className="w-40 md:w-auto">
                    <Logo className="w-[8vw] h-[8vw] fill-background" />
                    <h1 className="text-[10vw] leading-none">Cipela</h1>
                  </div>
                  <div className="w-full xs:w-48 md:w-[50%] lg:w-[30%] mt-4 xs:mt-0">
                    <p className="text-stone-200/60">Stay in the loop</p>
                    <div className="w-full py-2 xs:mt-4 flex border-b-[1px] border-stone-200/60 has-[:focus]:border-background transition-colors">
                      <input className="w-full bg-transparent outline-none placeholder:text-background" placeholder="Enter your email" type="text" />
                      <p className="text-sm text-stone-200/60 hover:text-background transition-colors cursor-pointer">Subscribe</p>
                    </div>
                    <p className="xs:mt-4 text-sm">
                      By signing up, I agree with the{" "}
                      <a href="" className="underline">
                        data protection policy
                      </a>{" "}
                      of Cipela.
                    </p>
                    <div className="mt-6 flex gap-4 text-2xl">
                      <Facebook className="text-stone-200/60 hover:text-background transition-colors cursor-pointer" />
                      <Instagram className="text-stone-200/60 hover:text-background transition-colors cursor-pointer" />
                      <a href="https://www.linkedin.com/in/sheikhjamiralam/">
                        <Linkedin className="text-stone-200/60 hover:text-background transition-colors cursor-pointer" />
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-wrap lg:flex-nowrap shrink-0 gap-10 lg:gap-40">
                    <div className="flex flex-col gap-2">
                      <h3 className="mb-2 uppercase text-stone-200/60 text-sm">Company</h3>
                      <p className="link link-underline link-underline-white cursor-pointer">About Cipela</p>
                      <p className="link link-underline link-underline-white cursor-pointer">News</p>
                      <p className="link link-underline link-underline-white cursor-pointer">Careers</p>
                      <p className="link link-underline link-underline-white cursor-pointer">Contact Us</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="mb-2 uppercase text-stone-200/60 text-sm">Help</h3>
                      <p className="link link-underline link-underline-white cursor-pointer">Get Help</p>
                      <p className="link link-underline link-underline-white cursor-pointer">Order Status</p>
                      <p className="link link-underline link-underline-white cursor-pointer">Delivery</p>
                      <p className="link link-underline link-underline-white cursor-pointer">Returns</p>
                      <p className="link link-underline link-underline-white cursor-pointer">Payment Options</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="mb-2 uppercase text-stone-200/60 text-sm">Resources</h3>
                      <p className="link link-underline link-underline-white cursor-pointer">Find A Store</p>
                      <p className="link link-underline link-underline-white cursor-pointer">Become A Member</p>
                      <p className="link link-underline link-underline-white cursor-pointer">Send Us Feedback</p>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[1px] bg-stone-200/60"></div>
                <div className="flex sm:gap-16 justify-between sm:justify-start flex-wrap sm:flex-nowrap text-sm text-stone-200/60">
                  <p className="w-full xs:w-auto shrink">© 2025 Cipela. All rights reserved</p>
                  <p className="link link-underline link-underline-grey cursor-pointer">Terms of Use</p>
                  <p className="link link-underline link-underline-grey cursor-pointer">Privacy Policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
