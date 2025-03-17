import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import dock from "../assets/images/dock.jpg";
import city from "../assets/images/city.jpg";
import canyon from "../assets/images/canyon.jpg";

const imageListObj = {
  dock,
  city,
  canyon,
};

export default function AboutMe() {
  const [isShown, setIsShown] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const descriptions = t("aboutMe.descriptions", { returnObjects: true }) as {
    title: string;
    imgId: keyof typeof imageListObj;
  }[];

  const threshold = 1 - 1 / descriptions.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    layoutEffect: true,
    offset: ["start start", "end start"],
  });
  const x = useTransform(
    scrollYProgress,
    [0.015, threshold],
    ["0vw", `-${(descriptions.length - 1) * 100}vw`],
  );

  const widthProgress = useTransform(
    scrollYProgress,
    [0.015, threshold],
    ["0.5%", "95%"],
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsShown(latest <= threshold);
  });

  return (
    <div
      ref={containerRef}
      style={{ height: `${descriptions.length * 100}vh` }}
      className="relative"
    >
      <div
        ref={targetRef}
        className="sticky top-0 flex h-screen flex-col overflow-hidden p-4 md:p-10"
      >
        <h3 className="mb-2 max-w-fit text-3xl font-semibold md:mb-6 md:text-5xl">
          {t("aboutMe.title")}
        </h3>
        <motion.div
          style={{ x, width: `${descriptions.length * 100}vw` }}
          className={`flex flex-1 overflow-hidden md:flex-row`}
        >
          {descriptions.map(({ imgId, title }, index) => (
            <div key={index} className="flex w-screen items-center gap-4">
              <img
                className="h-full flex-1 rounded-2xl object-cover md:max-w-1/2"
                src={imageListObj[imgId]}
                alt={`View ${index}`}
              />
              <div className="w-full">
                <motion.p
                  initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    repeatCount: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: "all",
                  }}
                  className="h-min w-5/6 text-2xl"
                  transition={{
                    duration: 0.75,
                    ease: [0, 0.55, 0.45, 1],
                  }}
                >
                  {title}
                </motion.p>
              </div>
            </div>
          ))}
        </motion.div>
        <AnimatePresence>
          {isShown && (
            <motion.div
              exit={{ y: 5, opacity: 0, filter: "blur(10px)" }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              style={{ width: widthProgress }}
              className="absolute bottom-4 left-1/2 h-1.5 w-full origin-center -translate-x-1/2 rounded-full bg-black"
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
