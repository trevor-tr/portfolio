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
      className="container mx-auto flex flex-col justify-center items-center h-screen gap-4"
    >
      <img
        src="./IMG_0551.jpg"
        alt="Stitch smiling with his teeth showing"
        className="lg:size-60 size-40 rounded-full shadow-xl border-8 border-white"
      />
      <p className="lg:text-4xl text-1xl md:text-2xl mt-2 md:mt-5 text-center">
        <span className="italic">hello world,</span> i'm trev 👋
      </p>
      <p className="lg:text-4xl text-1xl md:text-2xl mt-2 md:mt-5 text-center">
        a web developer in sàigòn, nice to meet you!
      </p>
      <div className="flex items-center bg-white shadow-md gap-2 mt-5 border border-zinc-300 px-4 pt-1 pb-1.5 rounded-full motion-safe:animate-bounce">
        <span className="text-sm md:text-lg">scroll down for more</span>
        <ArrowLongDownIcon className="size-4" />
      </div>
      <div>
        <ul className="flex gap-5 mt-5">
          <li className="hover:scale-110 transition-all ease-out hover:underline rounded-full hover:bg-zinc-100 p-2">
            <a href="">
              <GitHub className="size-6" />
            </a>
          </li>
          <li className="hover:scale-110 transition-all ease-out hover:underline rounded-full hover:bg-zinc-100 p-2">
            <a href="">
              <Telegram className="size-6" />
            </a>
          </li>
          <li className="hover:scale-110 transition-all ease-out hover:underline rounded-full hover:bg-zinc-100 p-2">
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
