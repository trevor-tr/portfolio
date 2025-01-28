import { cn } from "@/lib/utils";
import ThemeSwitcher from "./theme-switcher";

const Navbar = () => {
  return (
    <nav
      className={cn("fixed inset-0 h-14 bg-white shadow transition-all", {})}
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
        <ThemeSwitcher />
      </ul>
    </nav>
  );
};

export default Navbar;
