"use client";

import { useAnimate, Segment } from "motion/react";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import { MenuToggle } from "./MenuToggle";
import Lenis from "lenis";

function useMenuAnimation(isOpen: boolean, lenisRef: React.RefObject<Lenis | null>) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations: Segment[] = isOpen
      ? [["nav", { transform: "translateX(0%)" }, { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }]]
      : [["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }]];

    animate([
      ["path.top", { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" }, { at: "<" }],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      ["path.bottom", { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" }, { at: "<" }],
      ...menuAnimations,
    ]);
    const lenis = lenisRef.current;
    if (isOpen) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
      document.getElementById("menu")?.setAttribute("data-lenis-prevent", "");
    } else {
      lenis?.start();
      document.body.style.overflow = "auto";
    }
    // document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  return scope;
}

export default function MenuContainer({ lenisRef }: { lenisRef: React.RefObject<Lenis | null> }) {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen, lenisRef);

  return (
    <div ref={scope}>
      <Menu />
      <MenuToggle toggle={() => setIsOpen(!isOpen)} />
    </div>
  );
}
