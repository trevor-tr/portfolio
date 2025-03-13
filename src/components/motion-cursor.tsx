import { motion, useMotionValue, useSpring, Variants } from "motion/react";
import { useCallback, useEffect, useState } from "react";

const cursorSize = 15;
const smoothOptions = { damping: 25, stiffness: 350, mass: 0.65 };

type CursorStyle = "normal" | "text" | "clickable";

const cursorVariants = {
  normal: {
    borderRadius: 9999,
    scale: 1,
  },
  text: {
    width: 3,
    height: 30,
    scale: 1.75,
  },
  clickable: {
    scale: 2,
  },
} satisfies Variants;

export default function MotionCursor() {
  const [cursorStyle, setCursorStyle] = useState<CursorStyle>("normal");

  const mouse = {
    x: useMotionValue(-50),
    y: useMotionValue(-50),
  }; // offet outside the screen

  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = useCallback(
    (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const target = e.target as HTMLElement;

      if (
        target instanceof HTMLSpanElement ||
        target instanceof HTMLParagraphElement ||
        target instanceof HTMLHeadingElement ||
        target instanceof HTMLLabelElement ||
        target instanceof HTMLLIElement ||
        target.closest("p") ||
        target.closest("span") ||
        target.closest("h1, h2, h3, h4, h5, h6")
      ) {
        setCursorStyle("text");
      } else if (
        target instanceof HTMLButtonElement ||
        target instanceof HTMLAnchorElement ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setCursorStyle("clickable");
      } else {
        setCursorStyle("normal");
      }

      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    },
    [mouse.x, mouse.y],
  );

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [manageMouseMove]);

  return (
    <div>
      <motion.div
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
        }}
        className="pointer-events-none fixed top-50 left-50 z-100 size-5 rounded-full bg-black shadow-lg"
        variants={cursorVariants}
        animate={cursorStyle}
      ></motion.div>
    </div>
  );
}
