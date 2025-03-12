import { motion, AnimatePresence } from "motion/react";

export default function Loading() {
  return (
    <AnimatePresence>
      <motion.div className="fixed inset-0 bg-zinc-900 flex items-center justify-center">
        loading...
      </motion.div>
    </AnimatePresence>
  );
}
