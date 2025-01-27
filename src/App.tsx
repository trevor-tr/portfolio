import { useEffect } from "react";
import Lenis from "lenis";
import { cn } from "./lib/utils";
import useScrollUp from "./hooks/useScrollUp";
import Hero from "@/components/hero";
import Grid from "@/components/grid";
import Footer from "@/components/footer";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

function App() {
  const { isVisible, scrollUp } = useScrollUp();

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Grid />
      <Hero />
      <div className="h-screen" />
      <Footer />
      <button
        onClick={scrollUp}
        className={cn(
          "fixed right-5 bottom-10 z-50 cursor-pointer rounded-full border border-zinc-200 bg-white p-3.5 shadow-lg transition-all hover:scale-110 active:scale-95 md:right-16 md:p-2.5",
          {
            "pointer-events-auto bottom-5 opacity-100 md:bottom-16": isVisible,
            "pointer-events-none opacity-0": !isVisible,
          },
        )}
      >
        <ArrowUpIcon className="size-6 text-slate-950" />
      </button>
    </>
  );
}

export default App;
