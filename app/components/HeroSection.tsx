"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimate, useMotionValueEvent, useScroll } from "motion/react";
import { Bag, Heart, Logo, Search } from "./Icons";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

export default function HeroSection() {
  const solidNavbar = useRef(null);
  const [scope, animate] = useAnimate();
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(true);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start start", "end start"] });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.6) {
      setIsNavbarVisible(false);
    } else {
      setIsNavbarVisible(true);
    }
  });

  useEffect(() => {
    if (isNavbarVisible) {
      animate(scope.current, { y: 0 }, { duration: 0.4, ease: [0.33, 1, 0.68, 1], delay: 0.2 });
      animate(solidNavbar.current, { y: "-100%" }, { duration: 0.4, ease: [0.33, 1, 0.68, 1] });
    } else {
      animate(scope.current, { y: "-100%" }, { duration: 0.4, ease: [0.33, 1, 0.68, 1], delay: 0.3 });
      animate(solidNavbar.current, { y: 0 }, { duration: 0.4, ease: [0.33, 1, 0.68, 1] });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNavbarVisible]);

  return (
    <>
      <motion.section ref={scope} initial={{ y: 0 }} className="w-full px-16 py-6 fixed top-0 flex items-center justify-between z-50">
        <Logo />
        <div className="flex gap-2">
          <div className="w-10 h-10 bg-gray-200 rounded-sm flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors duration-500 cursor-pointer">
            <Search className="text-2xl" />
          </div>
          <div className="w-10 h-10 bg-gray-200 rounded-sm flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors duration-500 cursor-pointer">
            <Bag className="text-2xl" />
          </div>
        </div>
      </motion.section>
      <motion.section ref={solidNavbar} initial={{ y: "-100%" }} className="w-full px-16 py-2 bg-white border-b-[1px] border-stone-200/60 fixed top-0 flex items-center justify-between z-50">
        <div className="w-52">
          <Logo />
        </div>
        <div className="flex gap-6">
          <p className="link link-underline link-underline-black cursor-pointer">Men</p>
          <p className="link link-underline link-underline-black cursor-pointer">Women</p>
          <p className="text-red-500 link link-underline link-underline-red cursor-pointer">Sale</p>
          <p className="link link-underline link-underline-black cursor-pointer">Our World</p>
        </div>
        <div className="w-52 flex justify-between">
          <div className="flex items-center justify-center link link-underline link-underline-black cursor-pointer">
            <Search className="text-lg" />
            Search
          </div>
          <div className="flex items-center justify-center link link-underline link-underline-black cursor-pointer">
            <Heart className="text-lg" />
            Wishlist
          </div>
          <div className="flex items-center justify-center link link-underline link-underline-black cursor-pointer">
            <Bag className="text-lg" />
            Bag
          </div>
        </div>
      </motion.section>
      <motion.section className="w-full px-16 py-2 bg-white border-b-[1px] border-stone-200/60 fixed top-[67px] flex items-center justify-between z-50">
        <div>Hello</div>
      </motion.section>
      <section ref={container} className="flex justify-center items-center">
        <HeroText />
        <HeroImage />
      </section>
    </>
  );
}
