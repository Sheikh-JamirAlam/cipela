"use client";

import { useEffect } from "react";
import { useAnimate, motion } from "motion/react";
import { stagger } from "motion";

export default function HeroText() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate([["span", { transform: "translateY(0)", opacity: 1 }, { duration: 0.4, ease: [0.33, 1, 0.68, 1], delay: stagger(0.01) }]]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={scope} className="lg:w-[93%] mx-auto text-[13.1vw] lg:text-[12vw] leading-none text-center select-none">
      <div className="inline-block">
        {"Cipela—".split("").map((char, i) => (
          <motion.span key={i} className="inline-block" initial={{ y: "100%", opacity: 0 }}>
            {char}
          </motion.span>
        ))}
      </div>
      <div className="inline-block font-ogg">
        {"your".split("").map((char, i) => (
          <motion.span key={i} className="inline-block" initial={{ y: "100%", opacity: 0 }}>
            {char}
          </motion.span>
        ))}
      </div>
      <div className="inline-block">
        {"gateway".split("").map((char, i) => (
          <motion.span key={i} className="inline-block" initial={{ y: "100%", opacity: 0 }}>
            {char}
          </motion.span>
        ))}
      </div>{" "}
      <div className="inline-block">
        {"to".split("").map((char, i) => (
          <motion.span key={i} className="inline-block" initial={{ y: "100%", opacity: 0 }}>
            {char}
          </motion.span>
        ))}
      </div>
      <div className="inline-block">
        {"modern".split("").map((char, i) => (
          <motion.span key={i} className="inline-block" initial={{ y: "100%", opacity: 0 }}>
            {char}
          </motion.span>
        ))}
      </div>{" "}
      <div className="inline-block font-ogg">
        {"style".split("").map((char, i) => (
          <motion.span key={i} className="inline-block" initial={{ y: "100%", opacity: 0 }}>
            {char}
          </motion.span>
        ))}
      </div>{" "}
      <div className="inline-block">
        {"and".split("").map((char, i) => (
          <motion.span key={i} className="inline-block" initial={{ y: "100%", opacity: 0 }}>
            {char}
          </motion.span>
        ))}
      </div>{" "}
      <div className="inline-block">
        {"comfort".split("").map((char, i) => (
          <motion.span key={i} className="inline-block" initial={{ y: "100%", opacity: 0 }}>
            {char}
          </motion.span>
        ))}
      </div>{" "}
      <div className="inline-block">
        {"that".split("").map((char, i) => (
          <motion.span key={i} className="inline-block" initial={{ y: "100%", opacity: 0 }}>
            {char}
          </motion.span>
        ))}
      </div>
      <div className="inline-block font-ogg">
        {"lasts".split("").map((char, i) => (
          <motion.span key={i} className="inline-block" initial={{ y: "100%", opacity: 0 }}>
            {char}
          </motion.span>
        ))}
      </div>{" "}
      <div className="inline-block">
        {"add".split("").map((char, i) => (
          <motion.span key={i} className="inline-block" initial={{ y: "100%", opacity: 0 }}>
            {char}
          </motion.span>
        ))}
      </div>{" "}
      <div className="inline-block">
        {"day.".split("").map((char, i) => (
          <motion.span key={i} className="inline-block" initial={{ y: "100%", opacity: 0 }}>
            {char}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
