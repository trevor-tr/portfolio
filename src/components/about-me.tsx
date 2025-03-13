import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "motion/react";

export default function AboutMe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const descriptions = t("aboutMe.descriptions", { returnObjects: true }) as {
    title: string;
    img: string;
  }[];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const x = useTransform(
    scrollYProgress,
    [0.015, 1 - 1 / descriptions.length],
    ["0vw", `-${(descriptions.length - 1) * 100}vw`],
  );
  const widthProgess = useTransform(
    scrollYProgress,
    [0.015, 1],
    ["1%", "100%"],
  );

  return (
    <div
      ref={containerRef}
      style={{ height: `${descriptions.length * 100}vh` }}
      className="relative"
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden p-4 md:p-10">
        <h3 className="mb-2 max-w-fit text-3xl font-semibold md:mb-6 md:text-5xl">
          {t("aboutMe.title")}
        </h3>
        <motion.div
          style={{ x, width: `${descriptions.length * 100}vw` }}
          className={`flex flex-1 overflow-hidden md:flex-row`}
        >
          {descriptions.map(({ img, title }, index) => (
            <div key={index} className="flex w-screen items-center gap-4">
              <img
                className="h-full flex-1 rounded-2xl object-cover md:max-w-1/2"
                src={img}
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
        {/* <motion.div
          style={{ width: widthProgess }}
          className="absolute bottom-4 left-1/2 h-1 rounded-full bg-black shadow-lg"
        >
          aii
        </motion.div> */}
      </div>
    </div>
  );
}
