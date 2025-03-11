import { useRef } from "react";
import heroPfp from "../assets/images/pfp.jpg";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";

export default function TextParralax() {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0.85, 0.9], [0, -100]);

  return (
    <div ref={container} className="overflow-hidden">
      <motion.div
        style={{ opacity, y }}
        animate={{ transition: { ease: [0.55, 0, 1, 0.45] } }}
      >
        <Slide
          src={heroPfp}
          left={"-55%"}
          direction="left"
          phrase="Front End Developer"
          scrollYProgress={scrollYProgress}
        />
        <Slide
          src={heroPfp}
          left={"-25%"}
          direction="right"
          scrollYProgress={scrollYProgress}
          phrase="Xin chào thế giới"
        />
        <Slide
          src={heroPfp}
          left={"-40%"}
          direction="left"
          scrollYProgress={scrollYProgress}
          phrase="你好世界"
        />
        <Slide
          src={heroPfp}
          left={"-25%"}
          direction="right"
          scrollYProgress={scrollYProgress}
          phrase="Hello world"
        />
        <Slide
          src={heroPfp}
          left={"-95%"}
          direction="left"
          phrase="Front End Developer"
          scrollYProgress={scrollYProgress}
        />
      </motion.div>
    </div>
  );
}

function Slide({
  left,
  src,
  direction,
  phrase,
  scrollYProgress,
}: {
  left: string;
  src: string;
  direction: "left" | "right";
  phrase: string;
  scrollYProgress: MotionValue<number>;
}) {
  const _direction = direction == "left" ? -1 : 1;

  const translateX = useTransform(
    scrollYProgress,
    [0, 1],
    [150 * _direction, -150 * _direction]
  );

  return (
    <motion.div
      style={{ left, x: translateX }}
      className="relative flex whitespace-nowrap"
    >
      <Phrase src={src} text={phrase} />
      <Phrase src={src} text={phrase} />
      <Phrase src={src} text={phrase} />
    </motion.div>
  );
}

function Phrase({ src, text }: { src: string; text: string }) {
  return (
    <div className={"px-5 flex gap-5 items-center"}>
      <p className="text-[10vw]">{text}</p>
      <span className="relative h-[10vw] aspect-[4/2] rounded-full overflow-hidden">
        <img src={src} alt="image" className="object-cover" />
      </span>
    </div>
  );
}
