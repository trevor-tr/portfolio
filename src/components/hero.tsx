import { useRef } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
  Variants,
} from "motion/react";
import BlurOutText from "./blur-text";
import heroPfp from "../assets/images/dock.jpg";
import useScrollUp from "../hooks/useScrollUp";
import { scrollToTop } from "../utils";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@uidotdev/usehooks";
import LanguageSwitch from "./language-switch";

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
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const { t } = useTranslation();
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
        className="relative flex h-screen flex-col items-center justify-center gap-4"
      >
        <motion.img
          src={heroPfp}
          alt="logo"
          className="size-48 rounded-full border-8 border-white shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 1, ease: [0, 0.55, 0.45, 1] }}
        />
        <BlurOutText textClassName="text-4xl" text={t("hero.title")} />
        <motion.p
          className="w-fit rounded-full bg-white px-4 py-2 text-center text-sm text-gray-500 shadow-md"
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.75, delay: 3.5, ease: [0, 0.55, 0.45, 1] }}
        >
          {t("hero.subtitle")}
        </motion.p>
      </motion.div>
      <AnimatePresence>
        {isVisible && !isSmallDevice && (
          <motion.button
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={buttonVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="fixed right-4 bottom-4 z-10 w-fit cursor-none rounded-full bg-white px-4 py-2 text-center shadow-md"
            onClick={scrollToTop}
          >
            {t("buttons.scrollUp")}
          </motion.button>
        )}
      </AnimatePresence>
      <LanguageSwitch />
    </div>
  );
}
