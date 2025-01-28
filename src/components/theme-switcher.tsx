import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "./providers/theme-provider";
import { Button } from "./ui/button";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      className="cursor-pointer"
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      {theme === "light" && <SunIcon className="size-6" />}
      {theme === "dark" && <MoonIcon className="size-6" />}
    </Button>
  );
};

export default ThemeSwitcher;
