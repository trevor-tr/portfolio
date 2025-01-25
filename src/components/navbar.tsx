import { cn } from "@/lib/utils";

const Navbar = ({ isHeroInView }: { isHeroInView: boolean }) => {
  return (
    <nav
      className={cn("fixed transition-all inset-0 h-14 bg-zinc-100 shadow", {
        "opacity-0 pointer-events-none -top-5": isHeroInView,
        "opacity-100 pointer-events-auto top-0": !isHeroInView,
      })}
    >
      <ul className="flex gap-5 justify-center items-center h-full">
        <li>
          <a
            className="px-4 py-2 hover:bg-white rounded-full transition-all"
            href=""
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            className="px-4 py-2 hover:bg-white rounded-full transition-all"
            href=""
          >
            Telegram
          </a>
        </li>
        <li>
          <a
            className="px-4 py-2 hover:bg-white rounded-full transition-all"
            href=""
          >
            Discord
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
