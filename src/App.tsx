import { useEffect } from "react";
import Lenis from "lenis";
import { cn } from "./lib/utils";
import useScrollUp from "./hooks/useScrollUp";
import Hero from "@/components/hero";
import Grid from "@/components/grid";
import Timeline from "@/components/timeline";
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
      <Timeline />
      <div className="h-screen" />
      <Footer />
      <button
        onClick={scrollUp}
        className={cn(
          "fixed bottom-10 hover:scale-110 active:scale-95 shadow-lg md:right-16 right-5 z-50 md:p-2.5 p-3.5 bg-white border border-zinc-200 rounded-full transition-all",
          {
            "opacity-100 md:bottom-16 bottom-5 pointer-events-auto": isVisible,
            "opacity-0 pointer-events-none": !isVisible,
          }
        )}
      >
        <ArrowUpIcon className="size-6 text-slate-950" />
      </button>
    </>
  );
}

export default App;
