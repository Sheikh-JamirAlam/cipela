"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useSpring, useTransform, motion } from "motion/react";

export default function FeaturedBackground() {
  const [viewportWidth, setViewportWidth] = useState(0);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start end", "end start"] });
  const smoothYAnimate = useSpring(scrollYProgress, { stiffness: 180, damping: 25, mass: 0.1 });

  const yTextAnimate = useTransform(smoothYAnimate, [0.1, 1], [viewportWidth >= 640 ? 0 : -10, viewportWidth >= 640 ? 100 : 50]);
  const scaleTextAnimate = useTransform(smoothYAnimate, [0.1, 1], [1, 1.25]);
  const yMercurialAnimate = useTransform(smoothYAnimate, [viewportWidth >= 425 ? 0.25 : 0.15, 1], [0, viewportWidth >= 640 ? -150 : -50]);
  const rotateMercurialAnimate = useTransform(smoothYAnimate, [viewportWidth >= 425 ? 0.25 : 0.15, 1], [0, 20]);
  const yR9Animate = useTransform(smoothYAnimate, [viewportWidth >= 425 ? 0.35 : 0.2, 1], [0, viewportWidth >= 640 ? -150 : -100]);
  const rotateR9Animate = useTransform(smoothYAnimate, [viewportWidth >= 425 ? 0.35 : 0.2, 1], [20, 0]);
  const rotateR9TextAnimate = useTransform(smoothYAnimate, [viewportWidth >= 425 ? 0.25 : 0.15, 1], [-20, 20]);
  const yViniAnimate = useTransform(smoothYAnimate, [viewportWidth >= 425 ? 0.45 : 0.3, 1], [0, viewportWidth >= 640 ? -150 : -100]);
  const rotateViniAnimate = useTransform(smoothYAnimate, [viewportWidth >= 425 ? 0.45 : 0.3, 1], [20, 0]);
  const rotateViniTextAnimate = useTransform(smoothYAnimate, [viewportWidth >= 425 ? 0.45 : 0.3, 1], [20, viewportWidth >= 640 ? -10 : -50]);

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
    <div ref={container} className="w-full pb-[10%] sm:pb-0 absolute overflow-hidden">
      <motion.h1 style={{ y: yTextAnimate, scale: scaleTextAnimate }} className="w-fit mx-auto mt-0 sm:mt-12 md:mt-20 text-white text-[4vw] xs:text-[6vw]">
        Mercurial Vapor 1 RGN
      </motion.h1>
      <motion.img
        style={{ y: yMercurialAnimate, rotate: rotateMercurialAnimate }}
        className="w-[25vw] 2xl:w-[25rem] ml-auto mr-6 xl:mr-40 mt-[10%] min-[1720px]:mt-[15%]"
        src="/images/mercurial-small.png"
        alt="Mercurial Image"
      />
      <motion.img style={{ y: yR9Animate, rotate: rotateR9Animate }} className="w-[25vw] 2xl:w-[25rem] mr-auto ml-6 xl:ml-40" src="/images/r9-small.png" alt="Vini Image" />
      <motion.p style={{ y: yViniAnimate, rotate: rotateR9TextAnimate }} className="w-[25vw] 2xl:w-[25rem] ml-auto mr-10 xl:mr-52 mt-[2.5%] text-white text-[1.6vw] 2xl:text-3xl">
        Mercurial Vapor 1 RGN, first worn by R9 in 2002
      </motion.p>
      <motion.img style={{ y: yViniAnimate, rotate: rotateViniAnimate }} className="w-[25vw] 2xl:w-[25rem] ml-auto mr-6 xl:mr-20 mt-[12%]" src="/images/vini-small.png" alt="Vini Image" />
      <motion.p style={{ y: yViniAnimate, rotate: rotateViniTextAnimate }} className="w-[25vw] 2xl:w-[25rem] mr-auto ml-10 xl:ml-36 mt-[-2.5%] text-white text-[1.6vw] 2xl:text-3xl">
        “It&apos;s a really special feeling to use these boots now, knowing the history behind them,” says Vini Jr.
      </motion.p>
    </div>
  );
}
