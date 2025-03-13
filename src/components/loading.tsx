import { motion, AnimatePresence } from "motion/react";

export default function Loading() {
  return (
    <AnimatePresence>
      <motion.div className="fixed inset-0 flex items-center justify-center bg-zinc-900">
        loading...
      </motion.div>
    </AnimatePresence>
  );
}
