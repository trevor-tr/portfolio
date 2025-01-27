import { useRef } from "react";
import { useInView } from "motion/react";
import { ArrowLongDownIcon } from "@heroicons/react/24/outline";
import Navbar from "./navbar";
import GitHub from "./icons/github";
import Discord from "./icons/discord";
import Telegram from "./icons/telegram";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(ref, { margin: "-200px" });

  return (
    <div
      ref={ref}
      className="container mx-auto flex h-screen flex-col items-center justify-center gap-4"
    >
      <img
        src="./IMG_0551.jpg"
        alt="Stitch smiling with his teeth showing"
        className="size-40 rounded-full border-8 border-white shadow-xl lg:size-60"
      />
      <p className="text-1xl mt-2 text-center md:mt-5 md:text-2xl lg:text-4xl">
        <span className="italic">hello world,</span> i'm trev 👋
      </p>
      <p className="text-1xl mt-2 text-center md:mt-5 md:text-2xl lg:text-4xl">
        a web developer in sàigòn, nice to meet you!
      </p>
      <div className="mt-5 flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-4 pt-1 pb-1.5 shadow-md motion-safe:animate-bounce">
        <span className="text-sm md:text-lg">scroll down for more</span>
        <ArrowLongDownIcon className="size-4" />
      </div>
      <div>
        <ul className="mt-5 flex gap-5">
          <li className="rounded-full p-2 transition-all ease-out hover:scale-110 hover:bg-zinc-100 hover:underline">
            <a href="">
              <GitHub className="size-6" />
            </a>
          </li>
          <li className="rounded-full p-2 transition-all ease-out hover:scale-110 hover:bg-zinc-100 hover:underline">
            <a href="">
              <Telegram className="size-6" />
            </a>
          </li>
          <li className="rounded-full p-2 transition-all ease-out hover:scale-110 hover:bg-zinc-100 hover:underline">
            <a href="">
              <Discord className="size-6" />
            </a>
          </li>
        </ul>
      </div>
      <Navbar isHeroInView={isHeroInView} />
    </div>
  );
};

export default Hero;
