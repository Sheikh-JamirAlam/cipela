"use client";

import { useRef } from "react";
import { useScroll, useSpring, useTransform, motion, useMotionValueEvent } from "motion/react";

export default function FeaturedBackground() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start end", "end start"] });

  const yAnimate = useTransform(scrollYProgress, [0.1, 1], [0, 100]);
  const smoothYAnimate = useSpring(yAnimate, { stiffness: 180, damping: 25, mass: 0.1 });

  useMotionValueEvent(smoothYAnimate, "change", (latest) => {
    console.log(latest);
  });

  return (
    <div ref={container} className="mt-20 absolute">
      <motion.h1 style={{ y: smoothYAnimate }} className="text-white text-6xl">
        Mercurial Vapor 1
      </motion.h1>
    </div>
  );
}
