"use client";

import { useRef } from "react";
import { useScroll, useSpring, useTransform, motion } from "motion/react";
import Image from "next/image";

export default function HeroImage() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["center center", "end start"] });
  const smoothYAnimate = useSpring(scrollYProgress, { stiffness: 180, damping: 25, mass: 0.1 });
  const yAnimate = useTransform(smoothYAnimate, [0, 1], [208, -400]);

  return (
    <motion.div
      ref={container}
      style={{ y: yAnimate }}
      className="absolute"
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 208 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.25 }}
    >
      <Image src="/images/hero-shoe.png" width={800} height={800} alt="Hero Shoe image" />
    </motion.div>
  );
}
