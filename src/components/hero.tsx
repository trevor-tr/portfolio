import { useRef } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
  Variants,
} from "motion/react";
import BlurOutText from "./blur-text";
import heroPfp from "../assets/images/pfp.jpg";
import useScrollUp from "../hooks/useScrollUp";
import { scrollToTop } from "../utils";

const buttonVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    filter: "blur(10px)",
    transition: { duration: 0.75, ease: "easeOut" },
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0, 0.55, 0.45, 1] },
  },
} satisfies Variants;

export default function Hero() {
  const isVisible = useScrollUp(250);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.2, 0.8], [1, 0]);

  return (
    <div ref={ref}>
      <motion.div
        style={{ opacity }}
        className="h-screen flex items-center justify-center flex-col gap-4"
      >
        <motion.img
          src={heroPfp}
          alt="logo"
          className="size-48 rounded-full border-8 border-white shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 1, ease: [0, 0.55, 0.45, 1] }}
        />
        <BlurOutText
          textClassName="text-4xl"
          text="hello everyone, i'm trev, nice to meet you"
        />
        <motion.p
          className="text-gray-500 text-sm bg-white rounded-full px-4 py-2 shadow-md text-center w-fit"
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.75, delay: 3.5, ease: [0, 0.55, 0.45, 1] }}
        >
          scroll down to know me better uwu
        </motion.p>
      </motion.div>
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={buttonVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-4 right-4 z-10 bg-white rounded-full px-4 py-2 shadow-md text-center w-fit cursor-none"
            onClick={scrollToTop}
          >
            scroll up
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
