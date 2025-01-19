"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useSpring, useTransform, motion } from "motion/react";
import { Logo } from "./Icons";
import RevealText from "./RevealText";

export default function ShowcaseContainer() {
  const [viewportWidth, setViewportWidth] = useState(0);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start end", "end start"] });
  const smoothYAnimate = useSpring(scrollYProgress, { stiffness: 180, damping: 25, mass: 0.1 });
  const mainYAnimate = useTransform(smoothYAnimate, [0, 1], [0, 100]);
  const firstYAnimate = useTransform(smoothYAnimate, [0, 1], [viewportWidth >= 640 ? -200 : -100, viewportWidth >= 640 ? -120 : -20]);
  const firstXAnimate = useTransform(smoothYAnimate, [0, 1], [viewportWidth >= 768 ? 200 : viewportWidth >= 640 ? 150 : 120, viewportWidth >= 768 ? 500 : viewportWidth >= 640 ? 300 : 200]);
  const secondYAnimate = useTransform(smoothYAnimate, [0, 1], [viewportWidth >= 640 ? 250 : 50, viewportWidth >= 640 ? 400 : 250]);
  const secondXAnimate = useTransform(smoothYAnimate, [0, 1], [viewportWidth >= 768 ? -200 : viewportWidth >= 640 ? -100 : -50, viewportWidth >= 768 ? -500 : viewportWidth >= 640 ? -300 : -200]);
  const thirdYAnimate = useTransform(smoothYAnimate, [0, 1], [viewportWidth >= 640 ? -200 : -150, viewportWidth >= 640 ? -100 : -50]);
  const thirdXAnimate = useTransform(smoothYAnimate, [0, 1], [viewportWidth >= 768 ? -200 : viewportWidth >= 640 ? -150 : -100, viewportWidth >= 768 ? -650 : viewportWidth >= 640 ? -300 : -200]);
  const fourthYAnimate = useTransform(smoothYAnimate, [0, 1], [viewportWidth >= 640 ? 200 : 100, viewportWidth >= 640 ? 450 : 250]);
  const fourthXAnimate = useTransform(smoothYAnimate, [0, 1], [viewportWidth >= 768 ? 200 : viewportWidth >= 640 ? 100 : 50, viewportWidth >= 768 ? 450 : viewportWidth >= 640 ? 250 : 150]);
  const textYAnimate = useTransform(smoothYAnimate, [0, 1], [100, 0]);

  useEffect(() => {
    const calculateViewport = () => {
      setViewportWidth(window.innerWidth);
    };
    calculateViewport();
    window.addEventListener("resize", calculateViewport);
    return () => {
      window.removeEventListener("resize", calculateViewport);
    };
  }, []);

  return (
    <div ref={container} className="w-full py-20 overflow-hidden">
      <div className="w-fit mx-auto">
        <RevealText text="COLLABS" />
      </div>
      <div className="h-[80vh] sm:h-screen flex justify-center items-center relative">
        <motion.img
          style={{ y: mainYAnimate }}
          className="w-[15rem] h-[22rem] sm:w-[23rem] sm:h-[35rem] lg:w-[30rem] lg:h-[45rem] 2xl:w-[25%] 2xl:h-[90%] relative object-cover object-center"
          src="/images/showcase-main.jpg"
          alt="Showcase Image"
        />
        <motion.img
          style={{ y: firstYAnimate, x: firstXAnimate }}
          className="w-[10rem] h-[15rem] sm:w-[15rem] sm:h-[25rem] lg:w-[20rem] lg:h-[30rem] 2xl:w-[12%] 2xl:h-[40%] absolute object-cover object-center"
          src="/images/showcase1.jpg"
          alt="Showcase Image"
        />
        <motion.img
          style={{ y: secondYAnimate, x: secondXAnimate }}
          className="w-[8rem] h-[15rem] sm:w-[13rem] sm:h-[25rem] lg:w-[15rem] lg:h-[30rem] 2xl:w-[15%] 2xl:h-[40%] absolute object-cover object-center"
          src="/images/showcase2.jpg"
          alt="Showcase Image"
        />
        <motion.img
          style={{ y: thirdYAnimate, x: thirdXAnimate }}
          className="w-[18rem] h-[10rem] sm:w-[23rem] sm:h-[16rem] lg:w-[25rem] lg:h-[18rem] 2xl:w-[18%] 2xl:h-[25%] absolute object-cover object-center"
          src="/images/showcase3.jpg"
          alt="Showcase Image"
        />
        <motion.img
          style={{ y: fourthYAnimate, x: fourthXAnimate }}
          className="w-[10rem] h-[11rem] sm:w-[18rem] sm:h-[19rem] lg:w-[20rem] lg:h-[21rem] 2xl:w-[15%] 2xl:h-[35%] absolute object-cover object-center"
          src="/images/showcase4.jpg"
          alt="Showcase Image"
        />
      </div>
      <motion.div style={{ y: textYAnimate }} className="w-full mt-20 flex flex-col items-center">
        <Logo className="w-[15vw] h-[15vw] xs:w-[10vw] xs:h-[10vw] md:w-[6vw] md:h-[6vw]" />
        <h1 className="w-fit mx-auto text-[10vw] xs:text-[6vw] font-bold">Stay Styled</h1>
      </motion.div>
    </div>
  );
}
