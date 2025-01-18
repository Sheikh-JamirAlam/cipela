/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimate, useMotionValueEvent, useScroll } from "motion/react";
import { Bag, Heart, Logo, Plus, Search } from "./Icons";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
import Link from "next/link";
import Lenis from "lenis";

export default function HeroSection() {
  const solidNavbar = useRef(null);
  const [scope, animate] = useAnimate();
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(true);
  const [navImage, setNavImage] = useState<string>("https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1e6da1bc-5a9f-4959-9121-35d7ff62b016/NIKE+COURT+VISION+MID+NN.png");
  const navText = useRef(null);
  const container = useRef(null);
  const slideNavbarDetails = useRef(null);
  const searchRef = useRef(null);
  const lenisRef = useRef<Lenis>(null);
  const [isSlideNavbarVisible, setIsSlideNavbarVisible] = useState<string>("none");
  const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start start", "end start"] });

  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true });
    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.6) {
      setIsNavbarVisible(false);
    } else {
      setIsNavbarVisible(true);
      setIsSlideNavbarVisible("none");
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
  }, [isNavbarVisible]);

  const mouseEnterChangeImage = (image: string) => {
    animate(navText.current, { y: 25, opacity: 0 }, { duration: 0.4, ease: [0.33, 1, 0.68, 1] });
    setNavImage(image);
  };

  const mouseLeaveChangeImage = () => {
    animate(navText.current, { y: 0, opacity: 1 }, { duration: 0.4, ease: [0.33, 1, 0.68, 1] });
    if (isSlideNavbarVisible === "men") setNavImage("https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1e6da1bc-5a9f-4959-9121-35d7ff62b016/NIKE+COURT+VISION+MID+NN.png");
    else if (isSlideNavbarVisible === "women") setNavImage("https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/30bd5d65-8178-47c2-85c5-ee5d205c4b21/W+AIR+MAX+97+FUTURA.png");
  };

  useEffect(() => {
    const changeSlideNavbarVisibility = async () => {
      if (isSlideNavbarVisible === "men") {
        setNavImage("https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1e6da1bc-5a9f-4959-9121-35d7ff62b016/NIKE+COURT+VISION+MID+NN.png");
        await animate(slideNavbarDetails.current, { y: "calc(-100% - 67px)", opacity: 0 }, { duration: 0.1, ease: [0.33, 1, 0.68, 1] });
        animate(slideNavbarDetails.current, { y: 0, opacity: 1 }, { duration: 0.2, ease: [0.33, 1, 0.68, 1] });
      } else if (isSlideNavbarVisible === "women") {
        setNavImage("https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/30bd5d65-8178-47c2-85c5-ee5d205c4b21/W+AIR+MAX+97+FUTURA.png");
        await animate(slideNavbarDetails.current, { y: "calc(-100% - 67px)", opacity: 0 }, { duration: 0.1, ease: [0.33, 1, 0.68, 1] });
        animate(slideNavbarDetails.current, { y: 0, opacity: 1 }, { duration: 0.2, ease: [0.33, 1, 0.68, 1] });
      } else if (isSlideNavbarVisible === "sale") {
        setNavImage("https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/30bd5d65-8178-47c2-85c5-ee5d205c4b21/W+AIR+MAX+97+FUTURA.png");
        await animate(slideNavbarDetails.current, { y: "calc(-100% - 67px)", opacity: 0 }, { duration: 0.1, ease: [0.33, 1, 0.68, 1] });
        animate(slideNavbarDetails.current, { y: 0, opacity: 1 }, { duration: 0.2, ease: [0.33, 1, 0.68, 1] });
      } else if (isSlideNavbarVisible === "world") {
        setNavImage("https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/30bd5d65-8178-47c2-85c5-ee5d205c4b21/W+AIR+MAX+97+FUTURA.png");
        await animate(slideNavbarDetails.current, { y: "calc(-100% - 67px)", opacity: 0 }, { duration: 0.1, ease: [0.33, 1, 0.68, 1] });
        animate(slideNavbarDetails.current, { y: 0, opacity: 1 }, { duration: 0.2, ease: [0.33, 1, 0.68, 1] });
      } else if (isSlideNavbarVisible === "none") {
        animate(slideNavbarDetails.current, { y: "calc(-100% - 67px)", opacity: 0 }, { duration: 0.2, ease: [0.33, 1, 0.68, 1] });
      }
    };
    changeSlideNavbarVisibility();
  }, [isSlideNavbarVisible]);

  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    if (isSearchVisible) {
      lenis.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis.start();
      document.body.style.overflow = "auto";
    }

    if (isSearchVisible) {
      animate(searchRef.current, { y: 0 }, { duration: 0.4, ease: [0.33, 1, 0.68, 1] });
    } else {
      animate(searchRef.current, { y: "-100%" }, { duration: 0.4, ease: [0.33, 1, 0.68, 1] });
    }
  }, [isSearchVisible]);

  return (
    <>
      <motion.section ref={scope} initial={{ y: 0 }} className="w-full px-16 py-6 fixed top-0 flex items-center justify-between z-50">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex gap-2">
          <div
            onClick={() => setIsSearchVisible(true)}
            className="w-10 h-10 bg-gray-200 rounded-sm flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors duration-500 cursor-pointer"
          >
            <Search className="text-2xl" />
          </div>
          <div className="w-10 h-10 bg-gray-200 rounded-sm flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors duration-500 cursor-pointer">
            <Bag className="text-2xl" />
          </div>
        </div>
      </motion.section>
      <motion.section ref={solidNavbar} initial={{ y: "-100%" }} className="w-full px-16 py-2 bg-white border-b-[1px] border-stone-200/60 fixed top-0 flex items-center justify-between z-50">
        <div className="w-52">
          <Link className="w-fit block" href="/">
            <Logo />
          </Link>
        </div>
        <div className="flex gap-6">
          <p onMouseEnter={() => setIsSlideNavbarVisible("men")} className="link link-underline link-underline-black cursor-pointer">
            Men
          </p>
          <p onMouseEnter={() => setIsSlideNavbarVisible("women")} className="link link-underline link-underline-black cursor-pointer">
            Women
          </p>
          <p onMouseEnter={() => setIsSlideNavbarVisible("sale")} className="text-red-500 link link-underline link-underline-red cursor-pointer">
            Sale
          </p>
          <p onMouseEnter={() => setIsSlideNavbarVisible("world")} className="link link-underline link-underline-black cursor-pointer">
            Our World
          </p>
        </div>
        <div className="w-52 flex justify-between">
          <div onClick={() => setIsSearchVisible(true)} className="flex items-center justify-center link link-underline link-underline-black cursor-pointer">
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
      <motion.section
        ref={slideNavbarDetails}
        onMouseLeave={() => setIsSlideNavbarVisible("none")}
        initial={{ y: "calc(-100% - 67px)", opacity: 0 }}
        className="w-full bg-white border-b-[1px] border-stone-200/60 fixed top-[67px] z-40"
      >
        {isSlideNavbarVisible === "men" || isSlideNavbarVisible === "women" ? (
          <div className="flex justify-between">
            <div className="w-[40%] px-16 py-6 flex justify-between">
              <div className="flex flex-col gap-2 text-sm">
                <h2 className="text-base text-stone-500">Featured</h2>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">New Arrivals</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Bestsellers</p>
                <p className="w-fit text-red-500 link link-underline link-underline-red link-underline-thin cursor-pointer">Shop All Sale</p>
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <h2 className="text-base text-stone-500">Shoes</h2>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">All Shoes</p>
                <p
                  onMouseEnter={() => {
                    if (isSlideNavbarVisible === "men")
                      mouseEnterChangeImage(
                        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/126b75c1-3786-49ce-a3ee-6ec2926577fe/air-force-1-low-black-and-metallic-silver-hf2885-001-release-date.jpg"
                      );
                    else if (isSlideNavbarVisible === "women")
                      mouseEnterChangeImage("https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/52d45d2f-88f7-478c-bb16-c2b4b1e3d78f/W+NIKE+COURT+VISION+LO+NN.png");
                  }}
                  onMouseLeave={mouseLeaveChangeImage}
                  className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer"
                >
                  Casuals
                </p>
                <p
                  onMouseEnter={() => {
                    if (isSlideNavbarVisible === "men")
                      mouseEnterChangeImage("https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9f6c204a-33cf-4958-bc11-f09a7968dcc0/NIKE+ZOOMX+INVINCIBLE+RUN+FK+3.png");
                    else if (isSlideNavbarVisible === "women")
                      mouseEnterChangeImage("https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/faef0535-4edf-49d4-b0a1-a004bd848905/NIKE+ZOOMX+STREAKFLY.png");
                  }}
                  onMouseLeave={mouseLeaveChangeImage}
                  className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer"
                >
                  Running
                </p>
                <p
                  onMouseEnter={() => {
                    if (isSlideNavbarVisible === "men")
                      mouseEnterChangeImage("https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9be48ec0-fcdd-4b99-8e6b-117496bc4e71/ZOOM+SUPERFLY+9+ELITE+MR+FG.png");
                    else if (isSlideNavbarVisible === "women")
                      mouseEnterChangeImage("https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/106b4a6f-dbfc-48f5-aa60-56a7ff87a8e2/PHANTOM+LUNA+II+CLUB+FG%2FMG.png");
                  }}
                  onMouseLeave={mouseLeaveChangeImage}
                  className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer"
                >
                  Football
                </p>
                <p
                  onMouseEnter={() => {
                    if (isSlideNavbarVisible === "men")
                      mouseEnterChangeImage("https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fcd62477-443e-467a-b25f-8de78bf10cd9/JA+2+NIGHTMARE+EP.png");
                    else if (isSlideNavbarVisible === "women")
                      mouseEnterChangeImage("https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5fd41028-9c10-4ec3-a0c7-dc735d5a111b/GIANNIS+FREAK+6+EP.png");
                  }}
                  onMouseLeave={mouseLeaveChangeImage}
                  className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer"
                >
                  Basketball
                </p>
                <p
                  onMouseEnter={() => {
                    if (isSlideNavbarVisible === "men") mouseEnterChangeImage("https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/77b26e8c-0e57-4872-b337-84de0bb8f746/LEBRON+TR+1.png");
                    else if (isSlideNavbarVisible === "women")
                      mouseEnterChangeImage("https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/415eb8cf-fedd-4e81-b636-c014ad8d386e/NIKE+METCON+9+AMP.png");
                  }}
                  onMouseLeave={mouseLeaveChangeImage}
                  className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer"
                >
                  Gym and Training
                </p>
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <h2 className="text-base text-stone-500">Shop By Sport</h2>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Running</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Basketball</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Yoga</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Football</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Tennis</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Skateboarding</p>
              </div>
            </div>
            <div className="w-[30rem] h-[23rem] bg-stone-200 overflow-hidden flex items-center justify-center group/image cursor-pointer">
              <div className="absolute text-white z-50">
                {isSlideNavbarVisible === "men" ? (
                  <motion.p ref={navText} initial={{ y: 0, opacity: 1 }} className="w-24 text-center">
                    Shop for Men&apos;s Shoes
                  </motion.p>
                ) : (
                  <motion.p ref={navText} initial={{ y: 0, opacity: 1 }} className="w-32 text-center">
                    Shop for Women&apos;s Shoes
                  </motion.p>
                )}
              </div>
              <motion.img className="object-cover brightness-95 group-hover/image:scale-110 transition-all duration-500" src={navImage} height={500} width={500} />
            </div>
          </div>
        ) : isSlideNavbarVisible === "sale" ? (
          <div className="flex justify-between">
            <div className="w-[40%] px-16 py-6 flex justify-between">
              <div className="flex flex-col gap-2 text-sm">
                <h2 className="text-base text-stone-500">Sale & Offers</h2>
                <p className="w-fit text-red-500 link link-underline link-underline-red link-underline-thin cursor-pointer">Shop All Sale</p>
                <p className="w-fit text-red-500 link link-underline link-underline-red link-underline-thin cursor-pointer">Bestsellers</p>
                <p className="w-fit text-red-500 link link-underline link-underline-red link-underline-thin cursor-pointer">Last Chance</p>
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <h2 className="text-base text-stone-500">Men&apos;s Sale</h2>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Casuals</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Running</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Football</p>
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <h2 className="text-base text-stone-500">Women&apos;s Sale</h2>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Casuals</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Running</p>
                <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Football</p>
              </div>
            </div>
            <div className="w-[30rem] h-[23rem] bg-stone-200 overflow-hidden flex items-center justify-center group/image cursor-pointer">
              <div className="absolute text-white z-50">
                <p className="w-48 text-4xl font-semibold text-center">Upto 50% Off</p>
              </div>
              <motion.img className="object-cover brightness-95 group-hover/image:scale-110 transition-all duration-500" src="/images/sale.jpg" height={500} width={500} />
            </div>
          </div>
        ) : (
          isSlideNavbarVisible === "world" && (
            <div className="flex justify-between">
              <div className="w-[40%] px-16 py-6 flex justify-between">
                <div className="flex flex-col gap-2 text-sm">
                  <h2 className="text-base text-stone-500">Bridge the Gap</h2>
                  <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">About Us</p>
                  <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Quality & Craft</p>
                  <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Responsibility</p>
                  <p className="w-fit link link-underline link-underline-black link-underline-thin cursor-pointer">Collaborations</p>
                </div>
              </div>
              <div className="flex">
                <div className="w-[25rem] h-[23rem] bg-stone-200 overflow-hidden flex items-center justify-center group/image cursor-pointer">
                  <div className="absolute text-white z-50">
                    <p className="w-48 text-center">Quality & Craft</p>
                  </div>
                  <motion.img className="h-full object-cover brightness-95 group-hover/image:scale-110 transition-all duration-500" src="/images/quality.jpg" height={500} width={500} />
                </div>
                <div className="w-[25rem] h-[23rem] bg-stone-200 overflow-hidden flex items-center justify-center group/image cursor-pointer">
                  <div className="absolute text-white z-50">
                    <p className="w-48 text-center">Collaborations</p>
                  </div>
                  <motion.img className="h-full object-cover brightness-95 group-hover/image:scale-110 transition-all duration-500" src="/images/colabs.jpg" height={500} width={500} />
                </div>
              </div>
            </div>
          )
        )}
      </motion.section>
      {isSearchVisible && <div onClick={() => setIsSearchVisible(false)} className="w-screen h-screen fixed top-0 right-0 bg-black/30 z-50"></div>}
      <motion.section ref={searchRef} initial={{ y: "-100%" }} className="w-full bg-white border-b-[1px] border-stone-200 fixed top-0 flex items-center justify-between z-50">
        <div className="w-full px-8 py-4 flex items-center">
          <input className="w-full h-20 text-5xl outline-none placeholder:text-foreground" placeholder="Type whatever you have in mind" type="text" />
          <div onClick={() => setIsSearchVisible(false)} className="text-2xl rotate-45 cursor-pointer">
            <Plus />
          </div>
        </div>
      </motion.section>
      <section ref={container} className="flex justify-center items-center">
        <HeroText />
        <HeroImage />
      </section>
    </>
  );
}
