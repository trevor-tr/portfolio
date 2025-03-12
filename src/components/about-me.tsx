import { motion, useScroll, useTransform } from "motion/react";

import city from "../assets/images/city.jpg";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const ref = useRef(null);
  const { t } = useTranslation();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0.2, 0.24], [0, 1]);
  const y = useTransform(scrollYProgress, [0.19, 0.22], [-100, 0]);
  const filter = useTransform(
    scrollYProgress,
    [0.2, 0.24],
    ["blur(10px)", "blur(0px)"]
  );

  return (
    <main ref={ref} className="relative h-[400vh]">
      <motion.div
        style={{ opacity, filter, y }}
        transition={{ ease: "easeOut" }}
        className="sticky top-0 md:p-10 p-4 h-screen max-h-screen flex flex-col"
      >
        <h3 className="md:text-5xl text-3xl font-semibold mb-2 md:mb-6 max-w-fit">
          {t("aboutMe.title")}
        </h3>
        <div className="flex flex-col flex-1 md:flex-row gap-4 overflow-y-auto">
          <p className="flex-1 h-min">
            born and raised in a coastal city of kiên giang province
          </p>
          <img
            className="flex-1 object-cover md:max-w-1/2"
            src={city}
            alt="City view"
          />
        </div>
      </motion.div>
    </main>
  );
}
