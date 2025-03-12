import { motion, type Variants } from "motion/react";
import { containsChinese } from "../utils";

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
  const segments = containsChinese(text)
    ? text.split("").filter((char) => char !== " ")
    : text.split(" ");

  return (
    <motion.p
      initial="hidden"
      animate="visible"
      className="flex flex-row gap-2 flex-wrap items-baseline justify-center px-2 md:px-0"
      variants={externalVariants ?? parentVariants}
    >
      {segments.map((segment, index) => (
        <motion.span
          key={index}
          variants={externalVariants ?? childVariants}
          className={textClassName}
        >
          {segment}
        </motion.span>
      ))}
    </motion.p>
  );
}
