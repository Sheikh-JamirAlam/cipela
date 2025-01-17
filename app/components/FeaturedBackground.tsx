"use client";

import { useRef } from "react";
import { useScroll, useSpring, useTransform, motion, useMotionValueEvent } from "motion/react";

export default function FeaturedBackground() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start end", "end start"] });
  const smoothYAnimate = useSpring(scrollYProgress, { stiffness: 180, damping: 25, mass: 0.1 });

  const yTextAnimate = useTransform(smoothYAnimate, [0.1, 1], [0, 100]);
  const scaleTextAnimate = useTransform(smoothYAnimate, [0.1, 1], [1, 1.25]);
  const yMercurialAnimate = useTransform(smoothYAnimate, [0.25, 1], [0, -150]);
  const rotateMercurialAnimate = useTransform(smoothYAnimate, [0.25, 1], [0, 20]);
  const yR9Animate = useTransform(smoothYAnimate, [0.35, 1], [0, -150]);
  const rotateR9Animate = useTransform(smoothYAnimate, [0.35, 1], [20, 0]);
  const rotateR9TextAnimate = useTransform(smoothYAnimate, [0.25, 1], [-20, 20]);
  const yViniAnimate = useTransform(smoothYAnimate, [0.45, 1], [0, -150]);
  const rotateViniAnimate = useTransform(smoothYAnimate, [0.45, 1], [20, 0]);
  const rotateViniTextAnimate = useTransform(smoothYAnimate, [0.45, 1], [20, -10]);

  useMotionValueEvent(smoothYAnimate, "change", (latest) => {
    console.log(latest);
  });

  return (
    <div ref={container} className="w-full absolute">
      <motion.h1 style={{ y: yTextAnimate, scale: scaleTextAnimate }} className="w-fit mx-auto mt-20 text-white text-6xl">
        Mercurial Vapor 1 RGN
      </motion.h1>
      <motion.img style={{ y: yMercurialAnimate, rotate: rotateMercurialAnimate }} className="w-[25rem] ml-auto mr-40 mt-[20%]" src="/images/mercurial-small.png" alt="Mercurial Image" />
      <motion.img style={{ y: yR9Animate, rotate: rotateR9Animate }} className="w-[25rem] mr-auto ml-40" src="/images/r9-small.png" alt="Vini Image" />
      <motion.p style={{ y: yViniAnimate, rotate: rotateR9TextAnimate }} className="w-[25rem] ml-auto mr-52 mt-[2.5%] text-white text-3xl">
        Mercurial Vapor 1 RGN, first worn by R9 in 2002
      </motion.p>
      <motion.img style={{ y: yViniAnimate, rotate: rotateViniAnimate }} className="w-[25rem] ml-auto mr-20 mt-[15%]" src="/images/vini-small.png" alt="Vini Image" />
      <motion.p style={{ y: yViniAnimate, rotate: rotateViniTextAnimate }} className="w-[25rem] mr-auto ml-36 mt-[-2.5%] text-white text-3xl">
        “It&apos;s a really special feeling to use these boots now, knowing the history behind them,” says Vini Jr.
      </motion.p>
    </div>
  );
}
