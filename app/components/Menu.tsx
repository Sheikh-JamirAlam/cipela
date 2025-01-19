"use client";

import { useEffect, useState } from "react";
import { useAnimate } from "motion/react";
import { Help, Orders, Store } from "./Icons";

export default function Menu() {
  const [viewportWidth, setViewportWidth] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [category, setCategory] = useState<string>("men");
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (category === "men") animate(scope.current, { x: 0 }, { ease: [0.08, 0.65, 0.53, 0.96] });
    else if (category === "women") animate(scope.current, { x: "-100vw" }, { ease: [0.08, 0.65, 0.53, 0.96] });
    else if (category === "sale") animate(scope.current, { x: "-200vw" }, { ease: [0.08, 0.65, 0.53, 0.96] });
    else if (category === "world") animate(scope.current, { x: "-300vw" }, { ease: [0.08, 0.65, 0.53, 0.96] });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  useEffect(() => {
    const calculateViewport = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    };
    calculateViewport();
    window.addEventListener("resize", calculateViewport);
    return () => {
      window.removeEventListener("resize", calculateViewport);
    };
  }, []);

  return (
    <nav id="menu" className="w-full h-screen bg-background fixed top-[49px] sm:top-[67px] right-0 z-50 translate-x-[-100%] overflow-x-hidden">
      <ul className={`w-full ${viewportWidth > 465 ? viewportHeight < 550 && "h-[35rem]" : viewportHeight < 780 && "h-[48rem]"} flex`}>
        <div className="flex flex-col">
          <div className="px-6 py-4 text-sm flex gap-6">
            <p onClick={() => setCategory("men")} className={`${category === "men" ? "underline" : "no-underline"}`}>
              Men
            </p>
            <p onClick={() => setCategory("women")} className={`${category === "women" ? "underline" : "no-underline"}`}>
              Women
            </p>
            <p onClick={() => setCategory("sale")} className={`${category === "sale" ? "underline" : "no-underline"}`}>
              Sale
            </p>
            <p onClick={() => setCategory("world")} className={`${category === "world" ? "underline" : "no-underline"}`}>
              Our World
            </p>
          </div>
          <div ref={scope} className="flex">
            <div className="w-dvw flex flex-wrap sm:flex-nowrap sm:gap-20">
              <div className="px-6 py-2 flex flex-col gap-2">
                <h2 className="text-base text-stone-500">Featured</h2>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">New Arrivals</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Bestsellers</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Shop All Sale</p>
              </div>
              <div className="px-6 py-2 flex flex-col gap-2">
                <h2 className="text-base text-stone-500">Shoes</h2>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">All Shoes</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Casuals</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Running</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Football</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Basketball</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Gym and Training</p>
              </div>
              <div className="px-6 py-2 flex flex-col gap-2">
                <h2 className="text-base text-stone-500">Shop By Sport</h2>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Running</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Basketball</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Yoga</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Football</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Tennis</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Skateboarding</p>
              </div>
            </div>
            <div className="w-dvw flex flex-wrap sm:flex-nowrap sm:gap-20">
              <div className="px-6 py-2 flex flex-col gap-2">
                <h2 className="text-base text-stone-500">Featured</h2>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">New Arrivals</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Bestsellers</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Shop All Sale</p>
              </div>
              <div className="px-6 py-2 flex flex-col gap-2">
                <h2 className="text-base text-stone-500">Shoes</h2>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">All Shoes</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Casuals</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Running</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Football</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Basketball</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Gym and Training</p>
              </div>
              <div className="px-6 py-2 flex flex-col gap-2">
                <h2 className="text-base text-stone-500">Shop By Sport</h2>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Running</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Basketball</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Yoga</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Football</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Tennis</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Skateboarding</p>
              </div>
            </div>
            <div className="w-dvw flex flex-wrap sm:flex-nowrap sm:gap-20">
              <div className="px-6 py-2 flex flex-col gap-2">
                <h2 className="text-base text-stone-500">Sale & Offers</h2>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Shop All Sale</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Bestsellers</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Last Chance</p>
              </div>
              <div className="px-6 py-2 flex flex-col gap-2">
                <h2 className="text-base text-stone-500">Men&apos;s Sale</h2>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Casuals</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Running</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Football</p>
              </div>
              <div className="px-6 py-2 flex flex-col gap-2">
                <h2 className="text-base text-stone-500">Women&apos;s Sale</h2>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Casuals</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Running</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Football</p>
              </div>
            </div>
            <div className="w-dvw flex flex-wrap sm:flex-nowrap sm:gap-20">
              <div className="px-6 py-2 flex flex-col gap-2 text-sm">
                <h2 className="text-base text-stone-500">Bridge the Gap</h2>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">About Us</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Quality & Craft</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Responsibility</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Collaborations</p>
              </div>
              <div className="px-6 py-2 w-full sm:w-[50%] lg:w-[30%]">
                <p className="text-stone-500">Stay in the loop</p>
                <div className="w-full py-2 xs:mt-4 flex border-b-[1px] border-foreground has-[:focus]:border-stone-400 transition-colors">
                  <input className="w-full bg-transparent outline-none placeholder:text-foreground" placeholder="Enter your email" type="text" />
                  <p className="text-sm hover:text-stone-400 transition-colors cursor-pointer">Subscribe</p>
                </div>
                <p className="xs:mt-4 text-sm">
                  By signing up, I agree with the{" "}
                  <a href="" className="underline">
                    data protection policy
                  </a>{" "}
                  of Cipela.
                </p>
              </div>
            </div>
          </div>
          <div className="px-6 py-10 flex flex-col gap-5">
            <div className="flex gap-2 items-center text-xl">
              <Help className="text-3xl" /> Help
            </div>
            <div className="flex gap-2 items-center text-xl">
              <Orders className="text-3xl" /> Orders
            </div>
            <div className="flex gap-2 items-center text-xl">
              <Store className="text-3xl" /> Find Stores
            </div>
          </div>
        </div>
      </ul>
    </nav>
  );
}
