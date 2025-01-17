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
    <div ref={container} className="w-full py-20">
      <div className="w-fit mx-auto">
        <RevealText text="COLLABS" />
      </div>
      <div className="h-screen flex justify-center items-center">
        <motion.img style={{ y: mainYAnimate }} className="w-[25%] h-[90%] absolute object-cover object-center" src="/images/showcase-main.jpg" alt="Showcase Image" />
        <motion.img style={{ y: firstYAnimate, x: firstXAnimate }} className="w-[12%] h-[40%] absolute object-cover object-center" src="/images/showcase1.jpg" alt="Showcase Image" />
        <motion.img style={{ y: secondYAnimate, x: secondXAnimate }} className="w-[15%] h-[40%] absolute object-cover object-center" src="/images/showcase2.jpg" alt="Showcase Image" />
        <motion.img style={{ y: thirdYAnimate, x: thirdXAnimate }} className="w-[18%] h-[25%] absolute object-cover object-center" src="/images/showcase3.jpg" alt="Showcase Image" />
        <motion.img style={{ y: fourthYAnimate, x: fourthXAnimate }} className="w-[15%] h-[35%] absolute object-cover object-center" src="/images/showcase4.jpg" alt="Showcase Image" />
      </div>
      <motion.div style={{ y: textYAnimate }} className="w-full mt-20 flex flex-col items-center">
        <Logo className="w-[6vw] h-[6vw]" />
        <h1 className="w-fit mx-auto text-[6vw] font-bold">Stay Styled</h1>
      </motion.div>
    </div>
  );
}
