"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useSpring, useTransform, motion } from "motion/react";
import Image from "next/image";

export default function HeroImage() {
  const [viewportWidth, setViewportWidth] = useState(0);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start start", "end start"] });
  const smoothYAnimate = useSpring(scrollYProgress, { stiffness: 180, damping: 25, mass: 0.1 });
  const yAnimate = useTransform(smoothYAnimate, [0, 1], [viewportWidth >= 1280 ? 208 : 400, viewportWidth >= 1280 ? -400 : 100]);

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
    <motion.div
      ref={container}
      style={{ y: isAnimationComplete ? yAnimate : viewportWidth >= 1280 ? 400 : 600 }}
      onAnimationComplete={() => setIsAnimationComplete(true)}
      className="absolute translate-y-[608]"
      initial={{ opacity: 0, y: viewportWidth >= 1280 ? 400 : 600 }}
      animate={{ opacity: 1, y: viewportWidth >= 1280 ? 208 : 400 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.25 }}
    >
      <Image className="w-[45vw] lg:w-[40vw]" src="/images/hero-shoe.png" width={800} height={800} alt="Hero Shoe image" />
    </motion.div>
  );
}
