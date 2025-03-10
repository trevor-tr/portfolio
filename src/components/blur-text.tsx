import { motion, type Variants } from "motion/react";

const parentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      delay: 1.5,
      staggerChildren: 0.15,
    },
  },
} satisfies Variants;

const childVariants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.65 },
  },
} satisfies Variants;

export default function BlurOutText({
  text,
  textClassName,
  externalVariants,
}: {
  text: string;
  textClassName?: string;
  externalVariants?: Variants;
}) {
  const words = text.split(" ");

  return (
    <motion.p
      initial="hidden"
      animate="visible"
      className="flex flex-row gap-2 flex-wrap items-baseline justify-center"
      variants={externalVariants ?? parentVariants}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={externalVariants ?? childVariants}
          className={textClassName}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}
