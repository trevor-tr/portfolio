import { cn } from "@/lib/utils";

const Navbar = ({ isHeroInView }: { isHeroInView: boolean }) => {
  return (
    <nav
      className={cn("fixed inset-0 h-14 bg-white shadow transition-all", {
        "pointer-events-none -top-5 opacity-0": isHeroInView,
        "pointer-events-auto top-0 opacity-100": !isHeroInView,
      })}
    >
      <ul className="flex h-full items-center justify-center gap-5">
        <li>
          <a
            className="rounded-full px-4 py-2 transition-all hover:bg-zinc-100 hover:shadow"
            href=""
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            className="rounded-full px-4 py-2 transition-all hover:bg-zinc-100 hover:shadow"
            href=""
          >
            Telegram
          </a>
        </li>
        <li>
          <a
            className="rounded-full px-4 py-2 transition-all hover:bg-zinc-100 hover:shadow"
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
