"use client";

import { useRef } from "react";
import { useScroll, useSpring, useTransform, motion } from "motion/react";
import { Logo } from "./Icons";
import RevealText from "./RevealText";

export default function ShowcaseContainer() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start end", "end start"] });
  const smoothYAnimate = useSpring(scrollYProgress, { stiffness: 180, damping: 25, mass: 0.1 });
  const mainYAnimate = useTransform(smoothYAnimate, [0, 1], [0, 100]);
  const firstYAnimate = useTransform(smoothYAnimate, [0, 1], [-200, -120]);
  const firstXAnimate = useTransform(smoothYAnimate, [0, 1], [200, 500]);
  const secondYAnimate = useTransform(smoothYAnimate, [0, 1], [250, 400]);
  const secondXAnimate = useTransform(smoothYAnimate, [0, 1], [-200, -500]);
  const thirdYAnimate = useTransform(smoothYAnimate, [0, 1], [-200, -100]);
  const thirdXAnimate = useTransform(smoothYAnimate, [0, 1], [-200, -650]);
  const fourthYAnimate = useTransform(smoothYAnimate, [0, 1], [200, 450]);
  const fourthXAnimate = useTransform(smoothYAnimate, [0, 1], [200, 450]);
  const textYAnimate = useTransform(smoothYAnimate, [0, 1], [100, 0]);

  return (
    <div ref={container} className="w-full py-20 overflow-hidden">
      <div className="w-fit mx-auto">
        <RevealText text="COLLABS" />
      </div>
      <div className="h-screen flex justify-center items-center relative">
        <motion.img
          style={{ y: mainYAnimate }}
          className="w-[23rem] h-[35rem] lg:w-[30rem] lg:h-[45rem] 2xl:w-[25%] 2xl:h-[90%] relative object-cover object-center"
          src="/images/showcase-main.jpg"
          alt="Showcase Image"
        />
        <motion.img
          style={{ y: firstYAnimate, x: firstXAnimate }}
          className="w-[15rem] h-[25rem] lg:w-[20rem] lg:h-[30rem] 2xl:w-[12%] 2xl:h-[40%] absolute object-cover object-center"
          src="/images/showcase1.jpg"
          alt="Showcase Image"
        />
        <motion.img
          style={{ y: secondYAnimate, x: secondXAnimate }}
          className="w-[13rem] h-[25rem] lg:w-[15rem] lg:h-[30rem] 2xl:w-[15%] 2xl:h-[40%] absolute object-cover object-center"
          src="/images/showcase2.jpg"
          alt="Showcase Image"
        />
        <motion.img
          style={{ y: thirdYAnimate, x: thirdXAnimate }}
          className="w-[23rem] h-[16rem] lg:w-[25rem] lg:h-[18rem] 2xl:w-[18%] 2xl:h-[25%] absolute object-cover object-center"
          src="/images/showcase3.jpg"
          alt="Showcase Image"
        />
        <motion.img
          style={{ y: fourthYAnimate, x: fourthXAnimate }}
          className="w-[18rem] h-[19rem] lg:w-[20rem] lg:h-[21rem] 2xl:w-[15%] 2xl:h-[35%] absolute object-cover object-center"
          src="/images/showcase4.jpg"
          alt="Showcase Image"
        />
      </div>
      <motion.div style={{ y: textYAnimate }} className="w-full mt-20 flex flex-col items-center">
        <Logo className="w-[6vw] h-[6vw]" />
        <h1 className="w-fit mx-auto text-[6vw] font-bold">Stay Styled</h1>
      </motion.div>
    </div>
  );
}
